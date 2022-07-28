const { ethers } = require("hardhat");
async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MultiplicationCalculator = await ethers.getContractFactory(
    "MultiplicationCalculator"
  );
  const multiplicationCalculator = await MultiplicationCalculator.connect(
    myAccount
  ).deploy();
  await multiplicationCalculator.deployed();

  const instance = "0xD4cEBD1933945e0CF3249dE2B920083c8F393f84";
  const MultiplicationCalculatorProblem = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculatorProblem =
    MultiplicationCalculatorProblem.attach(instance);
  multiplicationCalculatorProblem
    .connect(myAccount)
    .setMultiplicationCalculator(multiplicationCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
