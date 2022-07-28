const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const erc20Token = await ERC20Token.connect(account).deploy(account.address);
  await erc20Token.deployed();

  const instance = "0xEd7124d5232514b723b23AE67238223256a2DEAf";

  erc20Token.connect(account).approve(account.address, BigInt(20 * 10 ** 18));
  erc20Token.connect(account).transfer(instance, BigInt(20 * 10 ** 18));

  const ERC20Transfer = await ethers.getContractFactory("ERC20Transfer");
  const erc20Transfer = ERC20Transfer.attach(instance);
  erc20Transfer.setWeb3ojt(erc20Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
