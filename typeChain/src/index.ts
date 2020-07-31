import * as CryptoJS from "crypto-js";

class Block {
    //맵버 변수
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    //생성자
    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    //해시 값 생성
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    //자료형 검증
    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
}

//첫 블록 생성
const genesisBlock: Block = new Block(0, "20202020202020", "", "Hello", 20200729);

//블록 체인 생성
let blockchain: [Block] = [genesisBlock];

//블록체인 반환
const getBlockchain = (): Block[] => blockchain;

//이전 블록체인 바환
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

//현재 시각 반환
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

//헤쉬 생성 함수를 호출해서 반환
const getHashForBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

//블록 생성전 검증 단계
const isBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) { //블록의 자료형 검증
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
};

// 블록 추가
const addBlock = (candidateBlock: Block): void => {
    if (isBlockVaild(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};

//새 블록 생성 후 블록 체인에 추가
const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    addBlock(newBlock);
    return newBlock;
};

//블록 추가...
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

//블록 체인 출력
console.log(blockchain);

export { }; 