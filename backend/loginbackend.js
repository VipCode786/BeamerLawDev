
const form = document.getElementById("formLogin");

form.addEventListener("submit",async function(e){
	e.preventDefault();
	// var password  = document.getElementById("password")
	// var passwordre  = document.getElementById("passwordre")
	// console.log("password",password.value)
	// console.log("passwordre",passwordre.value)
	// if(password.value==passwordre.value)
	// {
	const prePayload = new FormData(form);
	const payload = new URLSearchParams(prePayload);
	console.log("data",[...payload])
	let getdata;
	  await fetch("https://beamerlaw.onrender.com/api/users/signin", {
		method: "POST",
		 mode:"cors",
		body:payload,
		headers: {
			Accept: 'application/json',
			
		  },
	}).then(response => {
		if (response.status==200) {
		  response.json().then(json => {
			// console.log("hello",json);
                        // if(!localStorage.getItem('email')){
            localStorage.setItem("token", json.token);
            localStorage.setItem("id",json.userInfo._id);
			localStorage.setItem("FirstName",json.userInfo.firstName);
			localStorage.setItem("LastName",json.userInfo.lastName);
			localStorage.setItem("email",json.userInfo.email);
			localStorage.setItem("verified",json.userInfo.verified);
            // }
            // var x = localStorage.getItem("email");
            // if(inputEmail!==x)
            // {
                
            // }
             window.location.href="homePageAfterLogin.html"
		  });
		}

		

		else if(response.status==201){
			response.json().then(json => {
				localStorage.setItem("otpid",json.userInfo._id);
				getdata = json.userInfo
				 console.log("response201",json)
				 console.log("getData",getdata)
				 otpResend(getdata._id)
				// console.log("response",response.status)
				
			})
			
		}

		else{
			console.log("error else")
			document.getElementById("loginError").style.display="flex"
		}
	}).catch(err => console.log(err))

	

// }

// else{
// 	alert("Password is not matching ")
// }
	
});

async function otpResend(){
	const token =localStorage.getItem("token")
	const id = localStorage.getItem("otpid")
	await fetch(`https://beamerlaw.onrender.com/api/users/otpCreate?id=${id}`, {
		method: "POST",
		 mode:"cors",
		// body:payload,
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		  },
	}).then(response => {
		if (response.status==200) {
			response.json().then(json => {
				alert("OTP send to mail")
				window.location.href="otpVerification.html"

			})}
}).catch(err => console.log(err))

}