const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const PlusCalculator = await ethers.getContractFactory("PlusCalculator");
  const plusCalculator = await PlusCalculator.connect(myAccount).deploy();
  await plusCalculator.deployed();

  const instance = "0x448e225b4814260467CAF89cEAaa593127AaC7A2";
  const PlusCalculatorProblem = await ethers.getContractFactory(
    "PlusCalculatorProblem"
  );
  const plusCalculatorProblem = PlusCalculatorProblem.attach(instance);
  plusCalculatorProblem
    .connect(myAccount)
    .setPlusCalculator(plusCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
