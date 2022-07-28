const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0xFcb57625c5363F7bE7afDCc07cE334CF57F4E78c";
  const ERC721Token = await ethers.getContractFactory(
    "Web3OnlineJudgeNFTPausable"
  );
  const erc721Token = await ERC721Token.attach(instance);
  erc721Token.connect(account).pause();
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
