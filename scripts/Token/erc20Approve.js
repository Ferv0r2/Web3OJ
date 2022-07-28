const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const erc20Token = await ERC20Token.connect(account).deploy(account.address);
  await erc20Token.deployed();

  const instance = "0x24B466C0e9d655D95fe3De1447C25730d433C66f";
  erc20Token.connect(account).approve(instance, BigInt(20 * 10 ** 18));

  const ERC20Approve = await ethers.getContractFactory("ERC20Approve");
  const erc20Approve = ERC20Approve.attach(instance);
  erc20Approve.setWeb3ojt(erc20Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
