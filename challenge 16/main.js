const form = document.getElementById("formElement");
const fname = document.getElementById("first-name");
const lname = document.getElementById('last-name');
const email = document.getElementById("email-address");
const password = document.getElementById("password");

form.addEventListener('submit', e => {
    e.preventDefault();
    
    
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //  first name validation
    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    } else {
        successFunc(fname)
    }

    //  last name validation 
    if(lastName === ""){
        errorFunc(lname, 'Last Name cannot be empty')
    } else {
        successFunc(lname)
    }

    // email validation 
    if(emailValue === ""){
        errorFunc(email, "email cannot be empty" )
    } else if (!emailValue.match(pattern)){
        errorFunc(email, 'Looks like this is not an email')
    } else {
        successFunc(email)
    }

    // password validation 
    if(passwordValue === ""){
        errorFunc(password, 'Password cannot be empty')
    } else {
        successFunc(password)
    }
});

function errorFunc(req, message){
    const formControl = req.parentElement;
    const div = formControl.querySelector('div');
    div.innerText = message;
    req.className += 'error';
    div.className += 'error-text';
    if( req !== email) {
        req.value = " ";
    } else {
        req.style.color = "hsl(0, 100%, 74%)"
    }
}

function successFunc(req){
    req.className += 'success';

}


