document.addEventListener('DOMContentLoaded',init,false);

let name, email, inus, depts, cookies, comments;

function init() {
	// get the dom objects one time
	firstName = document.querySelector('.firstName');
	lastName = document.querySelector('.lastName');
	phone = document.querySelector('.phone');
	email = document.querySelectorAll('.email');
	passcode1 = document.querySelectorAll('passcode1');
	// comments = document.querySelector('#comments');
	
	// listen for input on all
	let elems = Array.from(document.querySelectorAll('#mainForm input'));
	elems.forEach(e => e.addEventListener('input', handleChange, false));
}


function handleChange(e) {
	
	console.log('handleChange');
	/*
	get all values and store
	first the easy ones
	*/
	let form = {};
	form.firstName = firstName.value;
	form.lastName = lastName.value;
	form.phone = phone.value;
	form.email = email.value;
    form.passcode1= passcode1.value
	// either null or one
	depts.forEach(d => {
		if(d.checked) form.department = d.value;
	});
	// either empty array or some things
	form.cookies = [];
	cookies.forEach(c => {
		if(c.checked) form.cookies.push(c.value);
	});
	
	// now store
	saveForm(form);
}

function saveForm(form) {
	let f = JSON.stringify(form);
	window.localStorage.setItem('form', f);
}




function store(event) {
    event.preventDefault();
    var inputEmail= document.getElementById("email");
    var inputPhone =document.getElementById("phone")
    
    if(!localStorage.getItem('email')){
     localStorage.setItem("email", inputEmail.value);
    }
    var x = localStorage.getItem("email");
    if(inputEmail!==x)
    {
        localStorage.setItem("email", inputEmail.value);
    }

    if(!localStorage.getItem('phone')){
		localStorage.setItem("phone", inputPhone.value);
	   }
	   var x = localStorage.getItem("phone");
	   if(inputPhone!==x)
	   {
		   localStorage.setItem("phone", inputPhone.value);
	   }

	   window.location.href = "otpVerification.html";

	  
  
    }