"use strict";
exports.__esModule = true;
var CryptoJS = require("crypto-js");
var Block = /** @class */ (function () {
    //생성자
    function Block(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    //해시 값 생성
    Block.calculateBlockHash = function (index, previousHash, timestamp, data) { return CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); };
    //자료형 검증
    Block.validateStructure = function (aBlock) {
        return typeof aBlock.index === "number" &&
            typeof aBlock.hash === "string" &&
            typeof aBlock.previousHash === "string" &&
            typeof aBlock.timestamp === "number" &&
            typeof aBlock.data === "string";
    };
    return Block;
}());
//첫 블록 생성
var genesisBlock = new Block(0, "20202020202020", "", "Hello", 20200729);
//블록 체인 생성
var blockchain = [genesisBlock];
//블록체인 반환
var getBlockchain = function () { return blockchain; };
//이전 블록체인 바환
var getLatestBlock = function () { return blockchain[blockchain.length - 1]; };
//현재 시각 반환
var getNewTimeStamp = function () { return Math.round(new Date().getTime() / 1000); };
//헤쉬 생성 함수를 호출해서 반환
var getHashForBlock = function (aBlock) { return Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data); };
//블록 생성전 검증 단계
var isBlockVaild = function (candidateBlock, previousBlock) {
    if (!Block.validateStructure(candidateBlock)) { //블록의 자료형 검증
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
// 블록 추가
var addBlock = function (candidateBlock) {
    if (isBlockVaild(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
//새 블록 생성 후 블록 체인에 추가
var createNewBlock = function (data) {
    var previousBlock = getLatestBlock();
    var newIndex = previousBlock.index + 1;
    var newTimestamp = getNewTimeStamp();
    var newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    var newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
//블록 추가...
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
//블록 체인 출력
console.log(blockchain);
