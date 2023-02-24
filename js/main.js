function ValidateEmail() {

    var names = document.getElementById("name").value;

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    var mail = document.getElementById("email").value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var psd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;

    var pswrd = document.getElementById("password").value;


    // if (mail.match(validRegex),names.match(regName)) {

    //     alert("Valid email address! and name");

    //     // document.form1.text1.focus();

    //     return true;

    // } else {

    //     alert("Invalid email address! and name");

    //     // document.form1.text1.focus();

    //     return false;

    // }


    if(names.match(regName)){
        console.log("valid name");
    }else{
        document.getElementById("name").style.border=" 2px solid red";
        document.getElementById("name").style.borderRadius=" 10px";
        alert("invalid Name")
    }




    if(mail.match(validRegex)){
        console.log("valid mail");
    }else{
            document.getElementById("email").style.border=" 2px solid red";
            document.getElementById("email").style.borderRadius=" 10px";
            alert("invalid Email ID")
        }




        
    if (pswrd.match(psd)){
        alert("Login Successfull !")
    }else{
        document.getElementById("password").style.border=" 2px solid red";
        document.getElementById("password").style.borderRadius=" 10px";
        alert("invalid Password")
    }

} 