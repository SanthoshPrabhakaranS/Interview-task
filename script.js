const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const passowrd = document.getElementById('password');
const passowrd2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
})

function checkInputs(){
    const userNameValue = userName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const passwordValue = password.value;
    const password2Value = passowrd2.value;

    if (userNameValue === ''){
        setErrorFor(userName,'Name cannot be empty');
        
    }else{
        setSuccessFor(userName);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
    }else {
		setSuccessFor(email);
	}

    if (phoneValue === ''){
        setErrorFor(phone,'Phone number cannot be empty')
    }else if(phoneValue.length > 10 || phoneValue.length < 10){
        setErrorFor(phone,'Numbers should be in 10 characters')
    }
    else{
        setSuccessFor(phone);
    }
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password cannot be empty');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
   
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';

    welcome();
}

function welcome(){
    window.location.replace("welcome.html");
}
	