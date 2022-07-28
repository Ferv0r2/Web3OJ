const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MinusCalculator = await ethers.getContractFactory("MinusCalculator");
  const minusCalculator = await MinusCalculator.connect(myAccount).deploy();
  await minusCalculator.deployed();

  const instance = "0xBB674485edcD26d29DCbC6f9BE7Fc13FF55e24c9";
  const MinusCalculatorProblem = await ethers.getContractFactory(
    "MinusCalculatorProblem"
  );
  const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
  minusCalculatorProblem
    .connect(myAccount)
    .setMinusCalculator(minusCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
