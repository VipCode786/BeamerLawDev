async function isLoggedIn () {
    const token = localStorage.getItem('token')
    if (!token) 
    {return false}
    else if(token){
        return true
    }
  }

  async function autoRedirect () {
    console.log("location.pathname",location.pathname)
    const validLogin = await isLoggedIn()
    if (!validLogin && location.pathname !== '/index.html') 
    {window.location.href='index.html'}
    if (validLogin && location.pathname === '/index.html')
    {window.location.href='homePageAfterLogin.html'}
  }

  async function Logout(){
   const validLogin = await isLoggedIn()
   if(validLogin)
   {
    localStorage.removeItem('token')
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("phone");
    localStorage.removeItem("otpid");

    autoRedirect()
   }
  }

  
 let f = localStorage.getItem("FirstName");
 let l = localStorage.getItem("LasttName");
 var initials = f.charAt(0)+""+l.charAt(0);
 document.getElementById("profileAvatar").innerHTML = initials;

 async function checkUserLogIn(){
  const validLogin = await isLoggedIn()
  // if (!validLogin && location.pathname !== '/index.html') 
  // {window.location.href='index.html'}
  if (validLogin)
  {window.location.href='calender.html'}
  else{
    {window.location.href='clienLogIn.html'}

  }

 }