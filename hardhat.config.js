require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");


const { privateKey } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  networks: {
    tPLQ: {
      url: "https://evm-rpc-atlas.planq.network",
      chainId: 7077,
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
      tPLQ: "abc",
    },
    customChains: [
      {
        network: "tPLQ",
        chainId: 7077,
        urls: {
          apiURL: "https://testnet-explorer.konsortech.xyz/planq/api",
          browserURL: "https://testnet-explorer.konsortech.xyz/planq",
        },
      },
    ],

  },
};