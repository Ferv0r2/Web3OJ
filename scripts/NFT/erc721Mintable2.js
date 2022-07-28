const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x8091604855f2eD2DBbfA402d0ac8409240AE2FcF";
  const sender = "0x12a60872b053c009452cdb95178144c8ffbdea4d";

  const ERC721Token = await ethers.getContractFactory("ERC721Mint2");
  const erc721Token = await ERC721Token.connect(account).deploy(sender);
  await erc721Token.deployed();

  const ERC721Mintable = await ethers.getContractFactory("ERC721Mintable2");
  const erc721Mintable = ERC721Mintable.attach(instance);
  erc721Mintable.setToken(erc721Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
