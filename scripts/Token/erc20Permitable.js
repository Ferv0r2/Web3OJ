const { ethers } = require("hardhat");

async function calculatorSol() {
  const [account] = await ethers.getSigners();

  const instance = "0x49Ef71a3EA557677D697D6171f2Ff087eCe0B073";
  const ERC20Token = await ethers.getContractFactory("Web3OJTPermitable");
  const erc20Pausable = ERC20Token.attach(instance);

  const nonce = await erc20Pausable.nonces(account.address);

  const domain = {
    name: "Web3 Online Judge Token",
    version: "1",
    chainId: 4,
    verifyingContract: instance,
  };

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };

  const value = {
    owner: account.address,
    spender: instance,
    value: BigInt(20 * 10 ** 18),
    nonce: nonce,
    deadline: ethers.constants.MaxUint256,
  };

  const data = await account._signTypedData(domain, types, value);

  const signed = data.substring(2);
  const v = Number("0x" + signed.substring(128));
  const r = "0x" + signed.substring(0, 64);
  const s = "0x" + signed.substring(64, 128);

  erc20Pausable.permit(
    account.address,
    instance,
    BigInt(20 * 10 ** 18),
    ethers.constants.MaxUint256,
    v,
    r,
    s
  );
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
