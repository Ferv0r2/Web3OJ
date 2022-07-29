const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const StringCompare = await ethers.getContractFactory("StringCompare");
  const stringCompare = await StringCompare.connect(account).deploy();
  await stringCompare.deployed();

  const instance = "0xC28c00f11677E173Fc06A232623414165A35eDa0";
  const StringCompareProblem = await ethers.getContractFactory("StringCompareProblem");
  const stringCompareProblem = StringCompareProblem.attach(instance);
  stringCompareProblem.setStringCompareContract(stringCompare.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
