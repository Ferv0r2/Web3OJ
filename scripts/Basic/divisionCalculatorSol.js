const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const DivisionCalculator = await ethers.getContractFactory(
    "DivisionCalculator"
  );
  const divisionCalculator = await DivisionCalculator.connect(
    myAccount
  ).deploy();
  await divisionCalculator.deployed();

  const instance = "0x1f6025a1060585580EaCb81bA066405fd69F1064";
  const DivisionCalculatorProblem = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculatorProblem = DivisionCalculatorProblem.attach(instance);
  divisionCalculatorProblem
    .connect(myAccount)
    .setDivisionCalculator(divisionCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
