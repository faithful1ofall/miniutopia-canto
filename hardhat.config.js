require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");


const { privateKey } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  networks: {
    tCANTO: {
      url: "https://canto-testnet.plexnode.wtf",
      chainId: 7701,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    sepolia: {
      url: "https://eth-sepolia-public.unifra.io",
      chainId: 11155111,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200  
      }
    }
  },
  etherscan: {
    apiKey: {
      sepolia: "JU87Q3CYXCBERPAGB2MDE9D67JZPVV27S7",
      tCANTO: "abc",
    },
    customChains: [
      {
        network: "tCANTO",
        chainId: 7701,
        urls: {
          apiURL: "https://testnet.tuber.build/api/eth-rpc",
          browserURL: " https://testnet.tuber.build",
        },
      },
    ],

  },
};