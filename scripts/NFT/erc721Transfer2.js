const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x0B10DD3Ff380Ae0b1432D6C8eadc9f21B78e9415";
  const ERC721Token = await ethers.getContractFactory("ERC721Token");
  const erc721Token = await ERC721Token.attach(instance);
  erc721Token.transferFrom(account.address, instance, 811);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
