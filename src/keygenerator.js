/*  Name: Jackson Morrell
    Date: 02/26/2021
    Project: MediCoin
*/


const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


var i = 5;

var public_keys = [];
var private_keys = [];


for (y = 0; y < i; y++){
    
    var Key_Pair = New_Key_Pair();
    
    public_keys.push(Key_Pair[0]);
    private_keys.push(Key_Pair[1])

    console.log();
    console.log('P',y,' - Private Key', private_keys[y]);
    console.log('Private Key Length :',private_keys[y].length);
    console.log('P',y,' - Public Key: ', public_keys[y]);
    console.log('Public Key Length :',public_keys[y].length)
    console.log();

}   



function New_Key_Pair(){

    const key = ec.genKeyPair();
    const publicKey = key.getPublic('hex');
    const privateKey = key.getPrivate('hex');

    var public = publicKey;
    var private = privateKey;

    var Key_Pair = [public, private];

    return Key_Pair;
}


