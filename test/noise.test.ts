import { expect, assert } from "chai";
import DuplexPair from 'it-pair/duplex';

import { Noise } from "../src";
import { generateEd25519Keys } from "./utils";
import {createPeerIds, createPeerIdsFromFixtures} from "./fixtures/peer";
import Wrap from "it-pb-rpc";
import {Handshake} from "../src/handshake";
import {
  createHandshakePayload,
  decodeMessageBuffer,
  encodeMessageBuffer,
  generateKeypair,
  getHandshakePayload,
  signPayload
} from "../src/utils";
import {XXHandshake} from "../src/xx";
import {Buffer} from "buffer";

describe("Noise", () => {
  let remotePeer, localPeer;

  before(async () => {
    [localPeer, remotePeer] = await createPeerIds(2);
  });

  it("should communicate through encrypted streams", async() => {
    const libp2pInitPrivKey = localPeer.privKey.marshal().slice(0, 32);
    const libp2pRespPrivKey = remotePeer.privKey.marshal().slice(0, 32);

    const noiseInit = new Noise(libp2pInitPrivKey);
    const noiseResp = new Noise(libp2pRespPrivKey);

    const [inboundConnection, outboundConnection] = DuplexPair();
    const [outbound, inbound] = await Promise.all([
      noiseInit.secureOutbound(localPeer, outboundConnection, remotePeer),
      noiseResp.secureInbound(remotePeer, inboundConnection, localPeer),
    ]);
    const wrappedInbound = Wrap(inbound.conn);
    const wrappedOutbound = Wrap(outbound.conn);

    wrappedOutbound.writeLP(Buffer.from("test"));
    const response = await wrappedInbound.readLP();
    expect(response.toString()).equal("test");
  });

  it("should test that secureOutbound is spec compliant", async() => {
    const libp2pPrivKey = localPeer.privKey.marshal().slice(0, 32);
    const noiseInit = new Noise(libp2pPrivKey);
    const [inboundConnection, outboundConnection] = DuplexPair();

    const [outbound, { wrapped, handshake }] = await Promise.all([
      noiseInit.secureOutbound(localPeer, outboundConnection, remotePeer),
      (async () => {
        const wrapped = Wrap(inboundConnection);
        const prologue = Buffer.from('/noise');
        const staticKeys = generateKeypair();
        const xx = new XXHandshake();
        const libp2pPubKey = remotePeer.pubKey.marshal().slice(32, 64);
        const handshake = new Handshake(false, libp2pPrivKey, libp2pPubKey, prologue, staticKeys, wrapped, xx);

        let receivedMessageBuffer = decodeMessageBuffer((await wrapped.readLP()).slice());
        // The first handshake message contains the initiator's ephemeral public key
        expect(receivedMessageBuffer.ne.length).equal(32);
        await xx.recvMessage(handshake.session, receivedMessageBuffer);

        // Stage 1
        const signedPayload = signPayload(libp2pPrivKey, getHandshakePayload(staticKeys.publicKey));
        const handshakePayload = await createHandshakePayload(libp2pPubKey, libp2pPrivKey, signedPayload);

        const messageBuffer = await xx.sendMessage(handshake.session, handshakePayload);
        wrapped.writeLP(encodeMessageBuffer(messageBuffer));

        // Stage 2 - finish handshake
        receivedMessageBuffer = decodeMessageBuffer((await wrapped.readLP()).slice());
        await xx.recvMessage(handshake.session, receivedMessageBuffer);
        return { wrapped, handshake };
      })(),
    ]);

    const wrappedOutbound = Wrap(outbound.conn);
    wrappedOutbound.write(Buffer.from("test"));

    // Check that noise message is prefixed with 16-bit big-endian unsigned integer
    const receivedEncryptedPayload = (await wrapped.read()).slice();
    const dataLength = receivedEncryptedPayload.readInt16BE(0);
    const data = receivedEncryptedPayload.slice(2, dataLength + 2);
    const decrypted = handshake.decrypt(data, handshake.session);
    // Decrypted data should match
    assert(decrypted.equals(Buffer.from("test")));
  })
});