// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStringCompare {
    function compare(string memory _a, string memory _b) external pure returns (bool);
}

contract StringCompare is IStringCompare {

    function compare(string memory _a, string memory _b) override external pure returns (bool) {
        return (keccak256(bytes(_a)) == keccak256(bytes(_b)));
    }
}