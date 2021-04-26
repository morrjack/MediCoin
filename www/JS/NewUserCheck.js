

function Check(form){

    var name, email, user, pass;

    console.log = ("--- Checking First name and Last name ---");
    name = Name();
    if(name = false){
        console.log("First Name and Last Name must both be filled out");
        return -1;
    }else{
        console.log("returned true");
    }

    console.log = ("--- Checking Email Address ---");
    email = CheckEmail();
    if(email = false){
        console.log("Email must be filled out");
        return -1;
    }else{
        console.log("returned true");
    }

    console.log = ("--- Checking Username ---");
    user = CheckUser();
    if (user = false){
        console.log("Username Already Taken");
        return -1
    }else{
        console.log("returned true");
    }

    console.log = ("--- Checking Password ---");
    pass = CheckPass();
    if (pass = false){
        console.log("Passwords do not match");
        return -1;
    }else{
        console.log("returned true");
    }



    return 0;
}

function Name(){

    var fname;
    var lname;
    var fc = 0;
    var lc = 0;

    fname = document.getElementById("NRFname").value;
    lname = document.getElementById("NRLname").value;

    if (fname = NULL){
        console.log("First Name must exist");
        fc = 0;
    }else{
        console.log("First Name filled out \n");
        if(getLength(fname) == 1){
            console.log("First Name can not be one character \n");
            fc = 0;
        }else{
            console.log("First Name pass check \n");
        fc = 1;   
        }    
    }

    if (lname = NULL){
        console.log("Last Name must exist");
        lc = 0;
    }else{
        console.log("Last Name filled out \n");
        if(getLength(lname) == 1){
            console.log("Last Name can not be one character \n");
            lc = 0;
        }else{
            console.log("Last Name pass check \n");
        lc = 1;   
        }  
    }
    
    if(lc * fc == 1){
        return true;
    }else return false;
}
 
function Email(){
    var email;
    email = document.getElementById("NRemail").value;

    if (email = NULL){
        console.log("Email must be filled out");
        return false;
    }
    return true;
}

function CheckUser(){

    var user;
    var uc = 0;
    user = document.getElementById("username").value;

    if(user = User.username){
        console.log("Error: Username Already used");
        return false;
    }else{
        console.log("Username Available")
        return true;
    }
}

function CheckPass(){
    
    var pass;
    var passvar;

    pass = document.getElementById("NRpass").value;
    passvar = document.getElementById("NRpassvar").value;

    if(pass != pasvar){
        console.log("Passwords do not match");
        return false;
    }else{
        return true;
    } 
}

document.getElementById("").addEventListener("click", myFunction);