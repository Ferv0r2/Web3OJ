const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x55cd9f78FD86F4e4312815D1C21b56554F4ABDd0";
  const sender = "0x12a60872b053c009452cdb95178144c8ffbdea4d";

  const ERC721Token = await ethers.getContractFactory("ERC721Mint");
  const erc721Token = await ERC721Token.connect(account).deploy(sender);
  await erc721Token.deployed();

  const ERC721Mintable = await ethers.getContractFactory("ERC721Mintable");
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
