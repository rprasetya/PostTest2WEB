form()
function form(){
    const name = JSON.parse(sessionStorage.getItem("name")) || [];
    const address = JSON.parse(sessionStorage.getItem("address")) || [];
    const phone = JSON.parse(sessionStorage.getItem("phone")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const radio = JSON.parse(sessionStorage.getItem("radio")) || [];
    const desc = JSON.parse(sessionStorage.getItem("desc")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    
    const userInputName = document.getElementById('name_form');
    const userInputAddress = document.getElementById('address_form');
    const userInputPhone = document.getElementById('phone_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputRadio = document.getElementById('radio_form');  
    const userInputDesc = document.getElementById('desc_form');
    const userInputCheckbox = document.getElementById('checkbox_form');

    userInputName.innerHTML =     "Name                        : " + name;
    userInputAddress.innerHTML =  "Address                     : " + address;
    userInputPhone.innerHTML =    "Phone Number                : " + phone;
    userInputEmail.innerHTML =    "Email                       : " + email;
    userInputRadio.innerHTML =    "Photo Type                  : " + radio;
    userInputDesc.innerHTML =     "Description                 : " + desc;
    userInputCheckbox.innerHTML = "Additional Tool Suggestions : " + checkbox;
}