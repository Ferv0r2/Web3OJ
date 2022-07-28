// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Token is ERC20, Ownable {
	string TOKEN_NAME = "Web3 Online Judge Token";
	string TOKEN_SYMBOL = "WEB3OJT";

	constructor(address _account) ERC20(TOKEN_NAME, TOKEN_SYMBOL) {
        _mint(_account, 2000000000 * (10 ** decimals()));
    }
}