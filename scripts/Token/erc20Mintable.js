const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x84BF9c36593265e880F1931C337ac0f589e45A7B";
  const sender = "0x4F551c7fD8D2A32007b05D7e75a668E0b756b693";

  const ERC20Token = await ethers.getContractFactory("ERC20Mint");
  const erc20Token = await ERC20Token.connect(account).deploy(sender);
  await erc20Token.deployed();

  const ERC20Mintable = await ethers.getContractFactory("ERC20Mintable");
  const erc20Mintable = ERC20Mintable.attach(instance);
  erc20Mintable.setToken(erc20Token.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
