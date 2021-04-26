

function Login(form){

        var check;
        
        check = Check(form);
        if(check = false){
            console.log("Check Failed, Try again");
            return -1;
        }else{
            //login function
            //login with credentials;
            return 0;
        }
        

}


    function Check(form){


        var pass;
        var user;

        pass = document.getElementById("LFpassword").value;        
        user = document.getElementById("username").value;


        console.log = ("--- Checking Username and Password ---");
        
        var id, j;

        id = CheckUser(user);
        if(id = false){
            console.log("username does not exist");
            return false;
        }

        j = CheckPass(pass, id);
        if(j = false){
            console.log("Password Failed");
            return false;
        }

        console.log("The user name and password are both correct.");
        return true;
    }

    function CheckUser(user){

        for(var i = 0; i < User.length; i++ ){
            if(user = User[i].username){
                console.log("Username exists in DB");
                id = User[i].id;
                return id;
            }else{
                console.log("Username does not exist");
                return false;
            }
        }
    }

    function CheckPass(pass, id){

    
        if(pass = User[id].password){
            console.log("Password for username matches");
            return true;
        }else{
            console.log("Wrong Password");
            return false;
        }    
    }
