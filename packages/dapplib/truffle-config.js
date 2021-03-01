require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth snow protect hover enrich orange gather'; 
let testAccounts = [
"0x13790c934efded025469b631b6cbd67d787d8f96914ba7850c025c171392b7dc",
"0x9e4cd72ab279c2e0956693bde9108f37f0ce8fb843561ff538e8e814cb6d01bf",
"0x4b37ea597040df673b0d06bfb1c9bbe14a0ba2ce3137dbcac4da850d652e0e90",
"0xabda8fde12485ced2dc5024c75a306c2d015be4e42d8645f3e41224ebdccc0f7",
"0xac6da194c4b250fbe04bb90bc0eb8a5cbc9c5c5a269a83f76fd9f28da8a68aa1",
"0x94a5b71871fc6b2dd23507ea3e48022001219c461c7ea69480bf1ee6f0bdd063",
"0x8abf9d01822bc09a3f34b7b494cc3ae0b3522a5658f5480b9117437912438f8d",
"0x4398b46307ed9e4c613f1293facd6e184143e39a515a61db0e093cf31f642151",
"0x6a7017215aed034d1b1a2e83fba7b3171b12c8a48ad105ea47641aa13c86f03b",
"0x195c8327411307583e9a5077436e408937d05dbec1370311200e04c60317f7c0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
