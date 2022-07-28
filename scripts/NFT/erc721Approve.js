const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x828b1B06F49F0bDbC1A8e6362F6dD8126126Ea30";
  const ERC721Token = await ethers.getContractFactory("ERC721Token");
  const erc721Token = await ERC721Token.attach(instance);
  erc721Token.approve(instance, 0);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
