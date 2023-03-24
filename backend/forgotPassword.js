

let myUrl2 = new URL(window.location.toLocaleString()); 
let query = []
async function getParameters() {
    let urlString = myUrl2.href;
    // console.log("urlString", urlString)
    let paramString = urlString.split('?')[1];
    let params_arr = paramString.split('&');
    for(let i = 0; i < params_arr.length; i++) {
        let pair = params_arr[i].split('=');
        query[i] = pair[1]
        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);
    }

    
}
console.log(myUrl2.href)


async function sendForgotOTP(event) {

    event.preventDefault();
	const token =localStorage.getItem("token")
       
	let email = document.getElementById("email")
	
	await fetch(`https://beamerlaw.onrender.com/api/users/otpforgot?email=${email.value}`, {
		method: "POST",
		 mode:"cors",
		headers: {
			Accept: 'application/json',
			
        Authorization: `Bearer ${token}`
		  },
	}).then(response => {
		if (response.ok) {
		  response.json().then(json => {
            alert("Check Your Mail For Reset Password")
                window.location.href = "index.html";
		  });
		}
		else{
            // console.log("error")
				document.getElementById("otpError").style.display="flex"
		}
	}).catch(err => console.log("err",err))
}


async function resetPassword(event) {

    event.preventDefault();
	
    
	let password = document.getElementById("password")
    let repassword = document.getElementById("passwordre")
    console.log(password.value)
    if(password.value == "" ){
        document.getElementById("warningField5").style.display="flex"
    }

    if (repassword.value == "" ){
        document.getElementById("warningField6").style.display="flex"
    }
     if(password.value == repassword.value )
    {
        let bodyPassword = password.value
		const token =localStorage.getItem("token")
        await getParameters();
	    await fetch(`https://beamerlaw.onrender.com/api/users/verify?id=${query[0]}&token=${query[1]}&password=${bodyPassword}`, {
		method: "POST",
		 mode:"cors",
		headers: {
			Accept: 'application/json',
        	Authorization: `Bearer ${token}`
		  },
	}).then(response => {
		if (response.ok) {
		//   response.json().then(json => {
                window.location.href = "clienLogIn.html";
		//   });
		}
		else{
            // response.json().then(json => {
                alert("JSON.stringify(json)");
		//   });
		}
	}).catch(err => console.log("err",err))
            
    }
	else{
        document.getElementById("loginError").style.display="flex"
}
}