const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const erc20Token = await ERC20Token.connect(account).deploy(account.address);
  await erc20Token.deployed();

  const instance = "0x2379bd8917e0c84Bae1bc138D4ce581AedFEbb8b";
  const ERC20Init = await ethers.getContractFactory("ERC20Init");
  const erc20Init = ERC20Init.attach(instance);
  erc20Init.setWeb3ojt(erc20Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
