checkLogin()
function checkLogin(){
    if (sessionStorage.getItem("logIn") == null ){
        window.location.href = "login.html"
        sessionStorage.setItem("logIn", false)
    }
    else {
        console.log("login");
    } 
}

function signup(){
    let usnInput = document.getElementById("username").value;
    let pswInput = document.getElementById("password").value;
    
    let existUsernames = JSON.parse(localStorage.getItem("usn")) || [];
    let psw = JSON.parse(localStorage.getItem("psw")) || [];
    
    if (existUsernames.includes(usnInput)){
        alert("Username already exists!")
    }
    else{
        existUsernames.push(usnInput);
        localStorage.setItem("usn", JSON.stringify(existUsernames));
        
        psw.push(pswInput);
        localStorage.setItem("psw", JSON.stringify(psw));
        alert("Sign Up Success")
        document.getElementById("submitSignUp").href = "login.html"
    }
}

function login(){
    let usnInput = document.getElementById("usnLogin").value;
    let pswInput = document.getElementById("pswLogin").value;

    let usnStorage = JSON.parse(localStorage.getItem("usn")) || [];
    let pswStorage = JSON.parse(localStorage.getItem("psw")) || [];

    if (usnInput == ""){
        alert ("Please fill the username") ;
    }
    else if (pswInput == ""){
        alert ("Please fill the Password") ;
    }
    else if (usnStorage.includes(usnInput)){
        if ( usnStorage.indexOf(usnInput) == pswStorage.indexOf(pswInput)) {
            alert("Welcome "+ usnInput)
            document.getElementById("submit").href = "home.html"
            sessionStorage.setItem("loggedIn", (usnInput))
            sessionStorage.setItem("logIn", true)
            checkLogin();
        }
        else if (usnStorage.indexOf(usnInput) != pswStorage.indexOf(pswInput)){
            alert("Invalid username or password")
        }
        else{
            alert ("Invalid username or password")
        }    
    }
    else{
        alert ("Invalid username or Password");
    }   
}

var today = new Date()
var curHr = today.getHours()

if (curHr >= 0 && curHr < 6) {
    document.getElementById("greet").innerHTML = 'What are you doing that early? ' + sessionStorage.getItem('loggedIn');
} else if (curHr >= 6 && curHr < 12) {
    document.getElementById("greet").innerHTML = 'Good Morning ' + sessionStorage.getItem('loggedIn');
} else if (curHr >= 12 && curHr < 17) {
    document.getElementById("greet").innerHTML = 'Good Afternoon ' + sessionStorage.getItem('loggedIn');
} else {
    document.getElementById("greet").innerHTML = 'Good Evening ' + sessionStorage.getItem('loggedIn');
}