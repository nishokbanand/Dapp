const NiceToken = artifacts.require("NiceToken")

module.exports = async function (deployer) {
  await deployer.deploy(NiceToken);

  const niceToken = await NiceToken.deployed()
  // Mint 200 NiceToken for the first account
  const result = await niceToken.mint(
    '0x39159BBf4d290bB2E089cf0845325a8F9Fea620c',
    '200000000000000000000'
  )
   console.info("Success")
};