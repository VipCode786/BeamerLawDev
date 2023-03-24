// document.addEventListener('DOMContentLoaded',init,false);

let x = document.getElementById("one");
let y = document.getElementById("two");
    y.style.display = "none";
    let usrID=""
 async function store(event) {

    event.preventDefault();
	var firstName = document.getElementById("firstName")
    var lastName  = document.getElementById("lastName")
    var email     = document.getElementById("email")
    var phone     = document.getElementById("phone")
    var password  = document.getElementById("password")
	var passwordre  = document.getElementById("passwordre")
	if(firstName.value=="" || lastName.value=="" || email.value=="" ||phone.value=="" || password.value==""||passwordre.value=="")
{
	if(firstName.value=="")
	{
		document.getElementById("warningField1").style.display="flex"
		document.getElementById("warningField1").style.color="red"
	}

	if(lastName.value=="")
	{
		document.getElementById("warningField2").style.display="flex"
		document.getElementById("warningField2").style.color="red"
	}

	if(email.value=="")
	{
		document.getElementById("warningField3").style.display="flex"
		document.getElementById("warningField3").style.color="red"
	}

	if(phone.value=="")
	{
		document.getElementById("warningField4").style.display="flex"
		document.getElementById("warningField4").style.color="red"
	}

	if(password.value=="")
	{
		document.getElementById("warningField5").style.display="flex"
		document.getElementById("warningField5").style.color="red"
	}
	

	if(passwordre.value=="")
	{
		document.getElementById("warningField6").style.display="flex"
		document.getElementById("warningField6").style.color="red"
	}

}

else if(password.value !== passwordre.value)
{
	alert("Please check your confirm password")
}
    // if(!localStorage.getItem('email')){
    //  localStorage.setItem("email", inputEmail.value);
    // }
    // var x = localStorage.getItem("email");
    // if(inputEmail!==x)
    // {
    //     localStorage.setItem("email", inputEmail.value);
    // }

    // if(!localStorage.getItem('phone')){
	// 	localStorage.setItem("phone", inputPhone.value);
	//    }
	//    var x = localStorage.getItem("phone");
	//    if(inputPhone!==x)
	//    {
	// 	   localStorage.setItem("phone", inputPhone.value);
	//    }

	//    window.location.href = "otpVerification.html";

else{
	

	 await fetch("https://beamerlaw.onrender.com/api/users/register", {
		// await fetch("http://localhost:5000/api/users/register", {
		method: "POST",
	
	mode:"cors",
 
    // Adding method type
   
     
    // Adding body or contents to send
    body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email:email.value,
		phone:phone.value,
		password:password.value
    }),
     
    // Adding headers to the request
    headers: {
		'Content-Type': 'application/json',
    'Accept': 'application/json'	
    }
}).then(response => {
			if (response.ok) {
				x.style.display = "none";
				y.style.display = "flex";
			  response.json().then(json => {
				// usrID=json._id
				localStorage.setItem("otpid",json._id)
				console.log("hello",json._id);
			  });
			  
			}

			else{
				// response.json().then(json => {
				// 	// usrID=json._id
				// 	// x.style.display = "none";
				// 	// y.style.display = "flex";
	
					console.log("elsehello",response.status);
					if(response.status == 400)
					{
					   alert("You have already an account , Please Log in")
					   window.location.href = "clienLogIn.html";
					}
				//   });
				  
			}
		}).catch(err => console.log("err",err))
}

}



// let userID

// let otp = false
// const form = document.getElementById("formData");

// form.addEventListener("submit",async function(e){
// 	e.preventDefault();

// 	var password  = document.getElementById("password")
// 	var passwordre  = document.getElementById("passwordre")
// 	console.log("password",password.value)
// 	console.log("passwordre",passwordre.value)
// 	if(password.value==passwordre.value)
// 	{
// 	const prePayload = new FormData(form);
// 	const payload = new URLSearchParams(prePayload);
// 	console.log([...payload])

// 	await fetch("http://localhost:5000/api/users/register", {
// 		method: "POST",
// 		 mode:"cors",
// 		body:payload,
// 		headers: {
// 			Accept: 'application/json',
			
// 		  },
// 	}).then(response => {
// 		if (response.ok) {
// 		  response.json().then(json => {
// 			console.log("hello",json._id);
// 		  });
// 		}
// 	}).catch(err => console.log(err))

// 	x.style.display = "none";
// 	y.style.display = "flex";

// }

// else{
// 	alert("Password is not matching ")
// }
	
// })


async function otp(event) {

    event.preventDefault();
	
	let val1 = document.getElementById("val1")
    let val2  = document.getElementById("val2")
    let val3    = document.getElementById("val3")
    let val4     = document.getElementById("val4")
    console.log("value1",val1.value)
	console.log("value2",val2.value)
	console.log("value3",val3.value)
	console.log("value4",val4.value)
	var id= localStorage.getItem("otpid")
	let usrID = id
	// if(usrID==""){
	// 	var id= localStorage.getItem("otpid")
	// 	usrID= id
	// }
	const token =localStorage.getItem("token")
   let getOTP = (String(val1.value)) + (String(val2.value)) + (String(val3.value)) +String(val4.value)
   console.log("getOTP",getOTP)
	let id1="63da40a6771eb21613103917"
	await fetch(`https://beamerlaw.onrender.com/api/users/otp?id=${usrID}&getOTP=${getOTP}`, {
		
        Authorization: `Bearer ${token}`,
		method: "POST",
		 mode:"cors",
		//  body: JSON.stringify({
		// 	val1: val1.value,
		// 	val2: val2.value,
		// 	val3:val3.value,
		// 	val4:val4.value,
			
		// }),
		headers: {
			Accept: 'application/json',
			
		  },
	}).then(response => {
		if (response.ok) {
		  response.json().then(json => {
			console.log("hello",json);
			window.location.href = "clienLogIn.html";

		  });
		}
		else{
				document.getElementById("otpError").style.display="flex"
		}
	}).catch(err => console.log("err",err))




	
}