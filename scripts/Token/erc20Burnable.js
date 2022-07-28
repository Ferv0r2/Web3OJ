const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0xB82585905B28d7E0D9a5E7c15fF8DEe07516eDf0";
  const ERC20Token = await ethers.getContractFactory("ERC20BurnableToken");
  const erc20Token = await ERC20Token.attach(instance);

  erc20Token.connect(account).burn(BigInt(20 * 10 ** 18));
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
