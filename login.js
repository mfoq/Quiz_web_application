var member=document.getElementById('member'),
    register=document.getElementById('register'),
    register_form=document.getElementById('register-form'),
    login_form=document.getElementById('login-form');

//name and password from the register-form
var nm=document.getElementById('nm'),
    pw=document.getElementById('pw');

//storing input from register-from
function store(){
    if(nm.value =="" || pw.value ==""){
        swal("Please Enter Your Name and Password", {
            buttons: false,
          });
    } else{
        localStorage.setItem('nm',nm.value);
        localStorage.setItem('pw',pw.value);
        register_form.remove();
        login_form.style.display = "block";
    }
    
}

//check if stored data from register form is equal to enterd data in the log in form
function check(){

    //store data from the register-form
    var storedName=localStorage.getItem('nm'),
        storedPw=localStorage.getItem('pw');

    //enterd data from the login-form
    var userName=document.getElementById('userName'),
        userPw=document.getElementById('userPw');

    //check if stored data form register-form is equal to data from login-form
    if(userName.value == storedName && userPw.value == storedPw) {
        window.open("index.html");
    }else {
        swal("Wrong name or password", {
            buttons: false,
          });
    }
}


member.onclick = function () {
    register_form.style.display = "none";
    login_form.style.display = "block";
}

register.onclick = function(){
    register_form.style.display = "block";
    login_form.style.display = "none";
}
