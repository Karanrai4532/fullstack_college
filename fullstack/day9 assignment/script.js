
let form=document.getElementById("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    let username=document.getElementById('username').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let confirmpassword=document.getElementById('confirmpassword').value;
let userInfo=document.getElementById('userinfo');
let name=document.createElement('h2');
if(password!=confirmpassword){
    alert("password is wrong")
}
if(password.length>6){
    alert("password is long, min length is 6")
}
    let obj={
        username,email,password,confirmpassword

    }
    console.log(obj);
    name.innerText=username;
    userInfo.append(name);

})