require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");


const { privateKey } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  networks: {
    tCANTO: {
      url: "https://canto-testnet.plexnode.wtf",
      chainId: 7701,
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
  sourcify: {
    enabled: true,
    // Optional: specify a different Sourcify server
    apiUrl: "https://sourcify.dev/server",
    // Optional: specify a different Sourcify repository
    browserUrl: "https://repo.sourcify.dev",
  }
};