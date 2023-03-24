var firstName = localStorage.getItem("FirstName");
console.log("firstName",firstName)
var lastName = localStorage.getItem("LastName");
console.log("LastName",lastName)
var profile= firstName.charAt(0)+lastName.charAt(0);
console.log("profile",profile)
document.getElementById("profileAvatar").innerHTML = profile;
document.getElementById("profileName").innerHTML = firstName+" "+lastName;

