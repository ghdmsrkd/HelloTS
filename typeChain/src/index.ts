import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
}

const genesisBlock: Block = new Block(0, "20202020202020", "", "Hello", 20200729);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const getHashForBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
    //console.log("candidateBlock : \n" + candidateBlock);
    //console.log("previousBlock : \n" + previousBlock);
    if (!Block.validateStructure(candidateBlock)) {
        console.log(" if (Block.vaildateStructure(candidateBlock))");
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        console.log("else if (previousBlock.index + 1 !== candidateBlock.index)");
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        console.log("else if (previousBlock.hash !== candidateBlock.previousHash)");
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        console.log("else if (getHashForBlock(candidateBlock) !== candidateBlock.hash)");
        return false;
    } else {
        console.log("success!!!");
        return true;
    }
};

const addBlock = (candidateBlock: Block): void => {
    if (isBlockVaild(candidateBlock, getLatestBlock())) {
        console.log("11111111111111111111111111");
        blockchain.push(candidateBlock);
    }
};

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    addBlock(newBlock);
    return newBlock;
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export { }; 