checkLogin()
function checkLogin(){
    if (localStorage.getItem("logIn") == null ){
        window.location.href = "login.html"
        localStorage.setItem("logIn", false)
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
            localStorage.setItem("loggedIn", (usnInput))
            localStorage.setItem("logIn", true)
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
    document.getElementById("greet").innerHTML = 'What are you doing that early? ' + localStorage.getItem('loggedIn');
} else if (curHr >= 6 && curHr < 12) {
    document.getElementById("greet").innerHTML = 'Good Morning ' + localStorage.getItem('loggedIn');
} else if (curHr >= 12 && curHr < 17) {
    document.getElementById("greet").innerHTML = 'Good Afternoon ' + localStorage.getItem('loggedIn');
} else {
    document.getElementById("greet").innerHTML = 'Good Evening ' + localStorage.getItem('loggedIn');
}

// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputName = document.getElementById('name');
    const userInputAddress = document.getElementById('address');
    const userInputPhone = document.getElementById('phone_number');
    const userInputEmail = document.getElementById('email');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputDesc = document.getElementById('desc');
    const userInputCheckbox = document.getElementsByName('checkbox');
    // let userInputfile = document.getElementById('file');
    
    const name = JSON.parse(sessionStorage.getItem("name")) || [];
    const address = JSON.parse(sessionStorage.getItem("address")) || [];
    const phone = JSON.parse(sessionStorage.getItem("phone")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const radio = JSON.parse(sessionStorage.getItem("radio")) || [];
    const desc = JSON.parse(sessionStorage.getItem("desc")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    // let file = JSON.parse(sessionStorage.getItem("checkbox")) || [];

    //     existUsernames.push(usnInput);
    //     localStorage.setItem("usn", JSON.stringify(existUsernames));
        
    //     psw.push(pswInput);
    //     localStorage.setItem("psw", JSON.stringify(psw));
    //     alert("Sign Up Success")
    //     document.getElementById("submitSignUp").href = "login.html"

    // push nama
    name.push(userInputName.value);
    sessionStorage.setItem("name", JSON.stringify(name))
    
    // push address
    address.push(userInputAddress.value);
    sessionStorage.setItem("address", JSON.stringify(address))
    
    // push number phone
    phone.push(userInputPhone.value);
    sessionStorage.setItem("phone", JSON.stringify(phone))
    
    // push email
    email.push(userInputEmail.value);
    sessionStorage.setItem("email", JSON.stringify(email))
    
    // push radio
    radio.push(userInputRadio.value);
    sessionStorage.setItem("radio", JSON.stringify(radio))
    
    // push desc
    desc.push(userInputDesc.value);
    sessionStorage.setItem("desc", JSON.stringify(desc))
    
    // push checkbox
    // cek apa aja yang dicentang pada type checkbox
    for (var i=0; i<userInputCheckbox.length; i++) {
        if (userInputCheckbox[i].checked) {
            checkbox.push(userInputCheckbox[i].value);
        }
    }
    sessionStorage.setItem("checkbox", JSON.stringify(checkbox));
    // alert(name)
    
    
    // name_form.innerHTML = "Name : " + ambil_name;
    // const name_form = document.getElementById("name_form");
    
    // userInputAddress.innerHTML = address.join(", ");
    // userInputPhone.innerHTML = phone.join(", ");
    // userInputEmail.innerHTML = email.join(", ");
    // userInputRadio.innerHTML = radio.join(", ");
    // userInputDesc.innerHTML = desc.join(", ");
    // userInputCheckbox.innerHTML = checkbox.join(", ");

    
}


// function form(){
    // Mengambil nilai dari session storage
    // const sesstore_name = sessionStorage.getItem('name');
    // const sesstore_address = sessionStorage.getItem('address');
    // const sesstore_phone = sessionStorage.getItem('phone');
    // const sesstore_email = sessionStorage.getItem('email');
    // const sesstore_radio = sessionStorage.getItem('radio');
    // const sesstore_desc = sessionStorage.getItem('desc');
    // const sesstore_checkbox = sessionStorage.getItem('checkbox');

      // Menampilkan nilai pada halaman HTML
// }