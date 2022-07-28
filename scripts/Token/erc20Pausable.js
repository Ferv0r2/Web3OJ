const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0xEA6850E96da58F6c9763466dad34D84A29cCD37B";
  const ERC20Token = await ethers.getContractFactory("Web3OJTPausable");
  const erc20Pausable = ERC20Token.attach(instance);

  erc20Pausable.connect(account).pause();
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
