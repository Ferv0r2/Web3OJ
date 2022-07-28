const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x48D80fB2085471decDfad7ED7d3298590736bc2e";
  const sender = "0x6bc7c15e8ab846c668c69e41a7254e6fbdd09833";
  const ERC721Token = await ethers.getContractFactory("ERC721Token");
  const erc721Token = await ERC721Token.attach(instance);
  erc721Token.transferFrom(sender, account.address, 0);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
