const form = document.getElementById("formContact");

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
	console.log([...payload])

	await fetch("https://beamerlaw.onrender.com/api/booking/contactUS", {
		method: "POST",
		 mode:"cors",
		body:payload,
		headers: {
			Accept: 'application/json',
			
		  },
	}).then(response => {
		if (response.ok) {
			alert("Your response sent to Beamer Law Family");
			location.reload();
			document.body.scrollTop = 0;
		  response.json().then(json => {
			
			console.log("index",json);
          
            //             // if(!localStorage.getItem('email')){
            // localStorage.setItem("token", json.token);
            // localStorage.setItem("id",json.userInfo._id);
			// localStorage.setItem("FirstName",json.userInfo.firstName);
			// localStorage.setItem("LastName",json.userInfo.lastName);
			// localStorage.setItem("email",json.userInfo.email);
			// localStorage.setItem("verified",json.userInfo.verified);
            // // }
            // // var x = localStorage.getItem("email");
            // // if(inputEmail!==x)
            // // {
                
            // // }
            //  window.location.href="homePageAfterLogin.html"
		  });
		}
	}).catch(err => console.log(err))

	

// }

// else{
// 	alert("Password is not matching ")
// }
	
})