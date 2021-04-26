

var User = [
    
{
    "id" : "0001",
    "first" : "Jackson",
    "last"  : "Morrell",
    "emailaddress" : "jackson@medicoin.net",
    "username" : "jack",
    "password" : "1234",
    "admin": "yes"
},

{
    "id" : "0002",
    "first" : "Caden",
    "last"  : "Beck",
    "emailaddress" : "caden@medicoin.net",
    "username" : "sn4ps",
    "password" : "54321",
    "admin" : "no"
},
{
    
}
];


for (var i = 0; i < User.length; i++) {
    var object = User[i];
        console.log(object.first);
        console.log(object.last);
}


console.log(User.length);
