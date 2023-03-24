// $(document).ready(function(){
$("#ourPracticesClick").click(function() {
    // console.log("enter tos dcierhio")
    $('html,body').animate({
        scrollTop: $("#afterHeroScroll").offset().top},
        'slow');
});

$("#contactusClick").click(function() {
    // console.log("enter tos dcierhio")
    $('html,body').animate({
        scrollTop: $("#contactScroll").offset().top},
        'slow');
});
async function isLoggedIn () {
    const token = localStorage.getItem('token')
    if (!token) 
    {return false}
    else if(token){
        return true
    }
  }

async function aboutPracticeScroll(){
    const validLogin = await isLoggedIn()


    if (!validLogin) 
    {
        window.location.href="index.html#afterHeroScroll"
    }
    else
    {
        window.location.href="homePageAfterLogin.html#afterHeroScroll"
    }
}


async function contactPracticeScroll(){
    const validLogin = await isLoggedIn()


    if (!validLogin) 
    {
        window.location.href="index.html#contactScroll"
    }
    else
    {
        window.location.href="homePageAfterLogin.html#contactScroll"
    }
}
//     var i = 0;
// function change() {
//   var doc = document.getElementById("book");
//   var color = ["#E91E63", "#0A0F96"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);
// });