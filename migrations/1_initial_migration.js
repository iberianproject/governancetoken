const XpieToken = artifacts.require("XpieToken");

module.exports = function (deployer) {
  deployer.deploy(XpieToken);
};
