// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

contract ERC20Mintable {
    IERC20Mintable public token;

    function setToken(address _token) public {
        token = IERC20Mintable(_token);
    }
}

contract ERC20Mint is IERC20Mintable, ERC20, Ownable {
    constructor(address _sender) ERC20("Web3 Online Judge Token", "WEB3OJT") {
        _transferOwnership(_sender);
    }

    function mint(address to, uint256 amount) external override {
        _mint(to, amount);
    }
}