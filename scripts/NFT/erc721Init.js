const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const ERC721Token = await ethers.getContractFactory("ERC721Token");
  const erc721Token = await ERC721Token.connect(account).deploy();
  await erc721Token.deployed();

  const instance = "0x99C06086e2DCcB83d181f3a064C56C433Cc4F7Cd";
  const ERC721Init = await ethers.getContractFactory("ERC721Init");
  const erc721Init = ERC721Init.attach(instance);
  erc721Init.setWeb3ojNFT(erc721Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
