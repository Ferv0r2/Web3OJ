const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0xf710660D999305Cadf60BE9EBf5415Ee0cb1316D";
  const ERC721Token = await ethers.getContractFactory(
    "Web3OnlineJudgeNFTBurnable"
  );
  const erc721Token = await ERC721Token.attach(instance);
  erc721Token.connect(account).burn(0);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
