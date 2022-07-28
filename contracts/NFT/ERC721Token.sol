// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Token is ERC721 {
	string TOKEN_NAME = "Web3 Online Judge NFT";
	string TOKEN_SYMBOL = "WEB3OJNFT";

	constructor() ERC721(TOKEN_NAME, TOKEN_SYMBOL) {
        _mint(msg.sender, 0);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }
}