require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict prison sugar spot tower ring remind concert gesture forget food tell'; 
let testAccounts = [
"0xcc6e8db5c6c34c82685a97faf8f94fd4f3b15f00de145fd29a5b930dd52748c2",
"0xc2210782f815162c383bde619ee6e101510d904f4abfe4a241b901fc6a014eeb",
"0xd7ac4f7423caef158283035ef52290592eb639e4d234a121a0076afb641a1aec",
"0x6d302419f06a1afe0ee191ee8e9168a03b0ffc1937a3d6ba9c2e33cfd75cb435",
"0x4662216b910f96e6c6d9f643cbad4920aa88bbf0706fde4f525c3744950ca87e",
"0x0bc7f184bd2c20b87feb1f98ac58f935116b80df228c267e52a7067c2cd05b74",
"0x804ff68ae60a206b1babddb088bfaac2709f17b0cf856e55a75cbcc2c2fab60d",
"0x16e2ad65aa888e13e0d2939c6de2fb89349b1fa20008a885b259f367e614c246",
"0x9bafbe041cd39375444566e5a1427fd2f614da7c358c0cb59dfab186ece49219",
"0x78c2bdae1031f2819e4a0491c46d7be28e5617df0fcfe9cec1a9aea6fd3a5ccf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


