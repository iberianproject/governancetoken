const { projectId, mnemonic, apiKey } = require(__dirname+'/.secrets.js');

usePlugin("@nomiclabs/buidler-etherscan");
usePlugin('@nomiclabs/buidler-ethers');

module.exports = {
    networks: {
        ropsten: {
          url: `https://ropsten.infura.io/v3/${projectId}`,
          accounts: {mnemonic: mnemonic}
        }
      },
    
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: apiKey
      },
    solc: {
        version: "0.6.2"
      }
};