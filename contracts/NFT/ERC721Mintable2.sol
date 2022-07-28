// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC721Mintable2 {
    function mint(address to) external;
}

contract ERC721Mintable2{
    IERC721Mintable2 public token;

    function setToken(address _token) public {
        token = IERC721Mintable2(_token);
    }
}

contract ERC721Mint2 is IERC721Mintable2, ERC721, Ownable {
    string TOKEN_NAME = "Web3 Online Judge NFT";
	string TOKEN_SYMBOL = "WEB3OJNFT";

    uint256 public totalSupply = 0;
    
	constructor(address _account) ERC721(TOKEN_NAME, TOKEN_SYMBOL) {
        _transferOwnership(_account);
    }


    function _baseURI() internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }
    
    function mint(address to) override external {
        _mint(to, totalSupply);
        totalSupply += 1;
    }
}