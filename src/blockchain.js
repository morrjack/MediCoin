/*  Name: Jackson Morrell
    Date: 02/26/2021
    Project: MediCoin
*/


const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    calculateHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    signTransaction(signingKey){
        if(signingKey.getPublic('hex') !== this.fromAddress){
            throw new Error('You cannot sign transactions for other wallets!');
        }
        
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');

    }

    isValid(){
        if(this.fromAddress === null) return true;
        
        if(!this.signature || this.signature.length === 0){
            throw new Error('No signature in this transaction ');
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

class Record{
    constructor(ownerAddress, editorAddress, data){
        this.ownerAddress = ownerAddress;
        this.editorAddress = editorAddress;
        this.data = data;
    }

    calculateHash(){
        return SHA256(this.ownerAddress + this.editorAddress + this.data).toString();
    }

    signRecord(signingKey){
        if(signingKey.getPublic('hex') !== this.ownerAddress){
            throw new Error('You cannot edit other wallets!');
        }
        
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    }
    
    isValid(){
        if(this.ownerAddress === null) return false;
        
        if(!this.signature || this.signature.length === 0){
            throw new Error('No signature in this transaction ');
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }


}

class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + JSON.stringify(this.updates) + this.nonce).toString();
    
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty +1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block Mined: " + this.hash);
    }

    hasValidTransactions(){
        for (const tx of this.transactions){
            if(!tx.isValid()){
                return false;
            }
        }

        return true;
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("01/01/2017", "Genesis block", "0");

    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    minePendingTransactions(miningRewardAddress){
        const rewardtx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardtx);

        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined! ');
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null ,miningRewardAddress, this.miningReward)
        ];
    }

    addTransaction(transaction){

        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error('Transaction must include from and to address');
        }

        if(!transaction.isValid()){
            throw new Error('Cannot add invalid transaction to chain');
        }

        this.pendingTransactions.push(transaction);
    }

    createRecord(record){
        if(!record.ownerAddress || !record.editorAddress){
            throw new Error ('Record must have an editor and a patient signature') 
        }
        if (record.isValid)
    }
}

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(!currentBlock.hasValidTransactions()){
                console.log('current block has invalid transactions');
                return false;
            }


            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log('current block has invalid hash');
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                console.log('current block has invalid previous block hash');
                return false;
            }
        }

        return true;
    }

}

module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;
