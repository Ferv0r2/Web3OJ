// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC721Mintable {
    function mint(address to, uint256 tokenId) external;
}

contract ERC721Mintable{
    IERC721Mintable public token;

    function setToken(address _token) public {
        token = IERC721Mintable(_token);
    }
}

contract ERC721Mint is IERC721Mintable, ERC721, Ownable {
    string TOKEN_NAME = "Web3 Online Judge NFT";
	string TOKEN_SYMBOL = "WEB3OJNFT";

	constructor(address _account) ERC721(TOKEN_NAME, TOKEN_SYMBOL) {
        _transferOwnership(_account);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }
    
    function mint(address to, uint256 tokenId) override external {
        _mint(to, tokenId);
    }
}