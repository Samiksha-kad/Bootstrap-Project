function validateEmail(){
    var email= document.getElementById("t2").value;
    var emailErr = document.getElementById("emailErr");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        emailErr.textContent = '';
        if(email==''){
            console.log(email);
            emailErr.textContent = 'Please enter your user email id';
            return false;
        }
        else if(!filter.test(email)){
            console.log(email);
            console.log(filter);
            emailErr.textContent = 'Invalid Email';
            alert('Invalid email');
            return false;
        }  
        else{     
            emailErr.textContent='';                                  
        }
    

}

function pass(){
    var pwd= document.getElementById("t4").value;
    var passErr = document.getElementById("passErr");
    var  pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    passErr.textContent = '';
    if(pwd==''){
        passErr.textContent = 'Please enter Password';
        return false;
    }
    else if(!pwd_expression.test(pwd)){
        passErr.textContent = 'Upper case, Lower case, Special character and Numeric letter are required in Password filed';
        return false;
    }
}
function feeback(){
    var feed = document.getElementById('t6');
    var feedErr = document.getElementById('feedErr');
    if(feed==''){
        feedErr.textContent = 'Please enter Feedback';
        return false;
    }
}
function validateForm(){
    let st1 = validateEmail();
    let st2 = pass();
    let st3 = feeback();
    return(st1 && st2 && st3);
    
}
    
