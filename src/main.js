/*  Name: Jackson Morrell
    Date: 02/26/2021
    Project: MediCoin
*/


const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('eb47c84f44f762d21bd9a7b739d5d6eb03e4f8580db6327833a7569044ab490b');
const myWalletAddress = myKey.getPublic('hex');


let MediCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
MediCoin.addTransaction(tx1);






/*
//test to mine blocks
console.log('Mining block 1...');
MediCoin.minePendingTransactions(new Block(1, "10/07/2017",{amount: 4}));

console.log('Mining block 2...');
MediCoin.minePendingTransactions(new Block(2, "12/07/2017",{amount: 8}));

console.log('Mining block 3...');
MediCoin.minePendingTransactions(new Block(2, "14/07/2017",{amount: 15})); 
*/

//test to create transaction 



console.log('\n starting miner...');
MediCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of myWalletAddress is ', MediCoin.getBalanceOfAddress(myWalletAddress));
console.log('is chain valid', MediCoin.isChainValid());


// console.log(JSON.stringify(MediCoin, null, 4));