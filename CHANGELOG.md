# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [8.0.1](https://github.com/ChainSafe/js-libp2p-noise/compare/v8.0.0...v8.0.1) (2022-08-19)


### Bug Fixes

* only increment nonce in valid decrypted msg ([#200](https://github.com/ChainSafe/js-libp2p-noise/issues/200)) ([393c169](https://github.com/ChainSafe/js-libp2p-noise/commit/393c1693ec21440432f33c3f27144ad5bb2f714f))


### Miscellaneous

* add interop tests ([#194](https://github.com/ChainSafe/js-libp2p-noise/issues/194)) ([78921b9](https://github.com/ChainSafe/js-libp2p-noise/commit/78921b9f352b63c29d8a4b720adadba3940acb09))
* bump @libp2p/daemon-client from 2.0.3 to 2.0.4 ([#197](https://github.com/ChainSafe/js-libp2p-noise/issues/197)) ([5a16844](https://github.com/ChainSafe/js-libp2p-noise/commit/5a168444ade13d50ee6a517aa121caa4729d87f6))
* bump libp2p from 0.37.3-f439d9b to 0.38.0 ([#201](https://github.com/ChainSafe/js-libp2p-noise/issues/201)) ([ff869e7](https://github.com/ChainSafe/js-libp2p-noise/commit/ff869e7086b0e9ef55d928fa4d1353e21ae6f7b7))

## [8.0.0](https://github.com/ChainSafe/js-libp2p-noise/compare/v7.0.3...v8.0.0) (2022-08-11)


### ⚠ BREAKING CHANGES

* update protons and connection encryption interface (#193)
* remove noise pipes option (#177)
* remove default instance (#188)

### Features

* remove default instance ([#188](https://github.com/ChainSafe/js-libp2p-noise/issues/188)) ([1358409](https://github.com/ChainSafe/js-libp2p-noise/commit/13584098db2b5021bb5b979881f5fdf98ddf1100))


### Bug Fixes

* Allow the caller to set the prologue ([#181](https://github.com/ChainSafe/js-libp2p-noise/issues/181)) ([#182](https://github.com/ChainSafe/js-libp2p-noise/issues/182)) ([15f7a6e](https://github.com/ChainSafe/js-libp2p-noise/commit/15f7a6e700a69c9a40abb82d989a55032d5cf687))


### Miscellaneous

* fix tests ([#184](https://github.com/ChainSafe/js-libp2p-noise/issues/184)) ([c2e6b64](https://github.com/ChainSafe/js-libp2p-noise/commit/c2e6b640088562043ab0d93ca304fcd0186a1b89))
* remove noise pipes option ([#177](https://github.com/ChainSafe/js-libp2p-noise/issues/177)) ([a43cba9](https://github.com/ChainSafe/js-libp2p-noise/commit/a43cba92f7dec3367273ca97c63d04690dc378e3))
* update protons and connection encryption interface ([#193](https://github.com/ChainSafe/js-libp2p-noise/issues/193)) ([9d5a07f](https://github.com/ChainSafe/js-libp2p-noise/commit/9d5a07f13610fd6e6e80dbd81e24d46fc084584f))

## [7.0.3](https://github.com/ChainSafe/js-libp2p-noise/compare/v7.0.2...v7.0.3) (2022-08-03)


### Bug Fixes

* correct type of it-length-prefixed 8.0.2 ([#178](https://github.com/ChainSafe/js-libp2p-noise/issues/178)) ([45c1d56](https://github.com/ChainSafe/js-libp2p-noise/commit/45c1d56dbc9cbb97e1b162b44ed289f8d723e7c1))


### Miscellaneous

* correct type of it-length-prefixed 8.0.2 ([45c1d56](https://github.com/ChainSafe/js-libp2p-noise/commit/45c1d56dbc9cbb97e1b162b44ed289f8d723e7c1))

## [7.0.2](https://github.com/ChainSafe/js-libp2p-noise/compare/v7.0.1...v7.0.2) (2022-08-02)


### Miscellaneous

* bump @libp2p/peer-collections from 1.0.3 to 2.0.0 ([#164](https://github.com/ChainSafe/js-libp2p-noise/issues/164)) ([7ffb5bd](https://github.com/ChainSafe/js-libp2p-noise/commit/7ffb5bddbc25c17339821fce26c4a11a43ccfe6e))
* clean up logic ([#165](https://github.com/ChainSafe/js-libp2p-noise/issues/165)) ([7a0d8c0](https://github.com/ChainSafe/js-libp2p-noise/commit/7a0d8c00c8099f1d88deee033a0d967b098c9b5e))
* update node.js badge version in readme ([#167](https://github.com/ChainSafe/js-libp2p-noise/issues/167)) ([16caa6d](https://github.com/ChainSafe/js-libp2p-noise/commit/16caa6d59a562d96446a88cb882d149fe395b1dd))
* update protons and peer collections ([#172](https://github.com/ChainSafe/js-libp2p-noise/issues/172)) ([3ea9f33](https://github.com/ChainSafe/js-libp2p-noise/commit/3ea9f33cc198d07acb2e06fcd11aa4847f1de61d))

## [7.0.1](https://github.com/ChainSafe/js-libp2p-noise/compare/v7.0.0...v7.0.1) (2022-06-23)


### Bug Fixes

* improve nonce performance ([#162](https://github.com/ChainSafe/js-libp2p-noise/issues/162)) ([9b04145](https://github.com/ChainSafe/js-libp2p-noise/commit/9b04145b07bd0272f1c109502d0f34e853ffcb00))

## [7.0.0](https://github.com/ChainSafe/js-libp2p-noise/compare/v6.2.0...v7.0.0) (2022-06-17)


### ⚠ BREAKING CHANGES

* updates to the single-issue libp2p interface definitions

### Miscellaneous

* update deps ([#159](https://github.com/ChainSafe/js-libp2p-noise/issues/159)) ([2c138df](https://github.com/ChainSafe/js-libp2p-noise/commit/2c138df0997ebf21c0dd173891f43eeae3387e2a))

## [6.2.0](https://github.com/ChainSafe/js-libp2p-noise/compare/v6.1.2...v6.2.0) (2022-05-23)


### Features

* adjust to comply with conn encryptor spec ([#153](https://github.com/ChainSafe/js-libp2p-noise/issues/153)) ([0fd6a63](https://github.com/ChainSafe/js-libp2p-noise/commit/0fd6a6344faf3470412f194b3e37c98c9c0ff0cb))

### [6.1.2](https://github.com/ChainSafe/js-libp2p-noise/compare/v6.1.1...v6.1.2) (2022-05-23)


### Miscellaneous

* add libp2p/crypto to prod dep ([#149](https://github.com/ChainSafe/js-libp2p-noise/issues/149)) ([479eb8c](https://github.com/ChainSafe/js-libp2p-noise/commit/479eb8c7f943651e84397c558fe8cf10108233de))

### [6.1.1](https://github.com/ChainSafe/js-libp2p-noise/compare/v6.1.0...v6.1.1) (2022-04-14)


### Bug Fixes

* use protons instead of protobuf for native .proto to .ts ([#141](https://github.com/ChainSafe/js-libp2p-noise/issues/141)) ([2ad93fa](https://github.com/ChainSafe/js-libp2p-noise/commit/2ad93facf96279c390d14b93e420769f0b8cd1a3))


### Miscellaneous

* align release with chainsafe ([a2f2d5f](https://github.com/ChainSafe/js-libp2p-noise/commit/a2f2d5f10c340f5db099194d58bd7387d226c345))

## [6.1.0]
- enable using own crypto library
## [6.0.1]
- Fix global env access in browser
## [6.0.0]
#### BREAKING CHANGE
- switch to esm

## [5.0.3]
- Fix handshake signature verification [#129](https://github.com/ChainSafe/js-libp2p-noise/pull/130)

## [5.0.2]
- Fix write handshake nonce correctly which made this version incompatible with other implementations [#129](https://github.com/ChainSafe/js-libp2p-noise/pull/129)

## [5.0.1]

- Fix API docs link [#124](https://github.com/ChainSafe/js-libp2p-noise/pull/124)
- remove node buffers [#125](https://github.com/ChainSafe/js-libp2p-noise/pull/125)
- safely handle nonces as 64 bit uints [#118](https://github.com/ChainSafe/js-libp2p-noise/pull/118)

## [5.0.0]

### BREAKING CHANGE

- update peer-id and libp2p-crypto (requires nodejs v15+) [#116](https://github.com/ChainSafe/js-libp2p-noise/pull/116)

## [4.1.1]

# Added
- Bump libp2p deps for uint8arrays@3.0.0 [#108](https://github.com/ChainSafe/js-libp2p-noise/pull/108) 

## [4.1.0]

# Added
- Updated uint8arrays version to 3.0.0

## [4.0.0]
# Breaking
- the new peer-id module uses the new CID class and not the old one

## [3.1.0]

# Added
- Replaced bcrypto dependency
- Add support for node 15

## [3.0.0]

- Updates all deps to pull in the latest buffer and bl modules
- Specifies a root name for pbjs code gen - message names for pbjs
generated code are global so specifying a root name scopes them
to prevent two modules accidentally trampling over each other's
protobuf code by giving their messages the same name
#### Breaking
- buffer@6 dropped support for IE and Safari < 10

## [2.0.5]
#### Bugfixes
- update aegir to latest
- update dependencies

## [2.0.4]

#### Bugfixes
- downgrade aegir because js files are missing in dist directory
## [2.0.3]

#### Bugfixes
- update peer-id dependency

## [2.0.2]

#### Bugfixes
- update dependencies

## [2.0.1]

#### Bugfixes
- security update for bl dependency
- add missing type declaration files in dist

## [2.0.0]

#### Features
- switched to aegir for building and linting
- using peer id with Uint8Arrays (breaking!)

## [1.1.2]

#### Bugfixes
- fix issue where web build depends on global regeneratorRuntime

## [1.1.1] - 2020-05-08

#### Bugfixes
- fix issue [#58](https://github.com/NodeFactoryIo/js-libp2p-noise/issues/58)

## [1.1.0] - 2020-04-23

Stable version, interoperable with go.

Using reduced size with bcrypto.

## [1.1.0-rc.1] - 2020-04-22

- Added early data API
- Dumping session keys
- Reducing package size

## [1.0.0]

Stable version, interobable with go-libp2p-noise!

### Bugfixes
- fix types to be compatible with rest of libp2p typescript projects
- update it-pb-rpc to 0.1.8 (contains proper typescript types)

### Bugfixes
- changed bcrypto imports to use pure js versions (web bundle size reduction)

## [1.0.0-rc.9] - 2019-03-11

### Bugfixes
- return handshake remote peer from secureOutbound
- fix browser usage of buffer

## [1.0.0-rc.8] - 2019-03-05

### Breaking changes
- Disabled noise pipes

### Bugfixes
- fixed empty ephemeral bug in XX
- verification of AEAD decryption


## [1.0.0-rc.7] - 2019-02-20

### Bugfixes
- attach/remove aead auth tag on cyphertext

## [1.0.0-rc.6] - 2019-02-20

### Bugfixes
- attach/remove aead auth tag on cyphertext
- better protobuf handling (static module generation)

## [1.0.0-rc.5] - 2019-02-10

### Bugfixes
- fix module compiling in node 10 (class properties)

## [1.0.0-rc4] - 2019-02-10

### Bugfixes
- resolved bug with key cache and null remote peer
- fixed IK flow as initiator and responder
