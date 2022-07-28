const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0xF56A8Eecfa0bCc80EaF63F766e1dCf39A8673783";
  const sender = "0xc9144f98320Ec8B34a8B10b1F76a88739EeD57D7";

  const ERC20TransferFrom = await ethers.getContractFactory(
    "ERC20TransferFrom"
  );
  const erc20TransferFrom = ERC20TransferFrom.attach(instance);
  erc20TransferFrom
    .connect(account)
    .transferFrom(sender, account.address, BigInt(20 * 10 ** 18));
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
