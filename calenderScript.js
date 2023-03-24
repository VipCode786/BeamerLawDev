const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
let calendermonthdate
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];



const toISOStringWithTimezone = date => {
const tzOffset = -date.getTimezoneOffset();
const diff = tzOffset >= 0 ? '+' : '-';
const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    'T' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds()) +
    diff + pad(tzOffset / 60) +
    ':' + pad(tzOffset % 60);
};



const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="current active test" onclick="myFunction(event);checkAvailability()" onclick="getDay()" >${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});




// Starting api 

let SelectedMonthYear;
let day 
let selectedfile=null;

let monthYear = document.getElementsByClassName("current-date");
let calDay = document.getElementsByClassName("active");
let calMonthYear = monthYear[0].innerText;
let thisYear = date.getFullYear();
let thisMonth = months[date.getMonth()];
let thisMonthYear = thisMonth+" "+thisYear;
let thisDay = date.getDate()

//  Function for radio button when it is active and when not 
// This function is triggered when user click the date day
// This function say first select day and after that radio button (time)


// This function say when user click on day first all style should be clear and after that selected date hightlighted with blue button
function myFunction(event) {
    const allList=  document.querySelectorAll("li");

     
    for (let i = 0; i < allList.length; i++) {
        allList[i].removeAttribute('style');
      }    
    let target = event.currentTarget
    target.style.backgroundColor="blue" ;
    target.style.borderRadius= "25px";

    day = target.textContent;
   
    let monthYearArr = document.getElementsByClassName("current-date");
     SelectedMonthYear   = monthYearArr[0].innerText

     let buttonRadio = document.getElementsByClassName("button");
     for (let i = 0; i < buttonRadio.length; i++) {
        buttonRadio[i].style.pointerEvents="auto";
      }  
    
  
}


// This function say when page loaded check if current month is same as calendar html month then prev button should be disabled


if(calMonthYear == thisMonthYear )
{
    document.getElementById("prev").style.display= "none"; 
     for(let i = 0 ; i< calDay.length ; i++)
     {
        // console.log(" Number(calDay[i].innerText)", Number(calDay[i].innerText))
        if( Number(calDay[i].innerText) < thisDay)
        { 
            // console.log("enter day ", Number(calDay[i].innerText))
          
          calDay[i].removeAttribute("onclick");
          calDay[i].style.pointerEvents = "none";
        }
     }
}

else{
    document.getElementById("prev").style.display= "flex";
}


//  this function say when click on prev button check if current month is same as calendar html month then prev button should be disabled
//  and all radio button is deselected 
document.getElementById("prev").onclick = function(){
let monthYear = document.getElementsByClassName("current-date");
let calMonthYear = monthYear[0].innerText;
let thisYear = date.getFullYear();
let thisMonth = months[date.getMonth()];
let thisMonthYear = thisMonth+" "+thisYear
//  and all radio button is deselected
var elee = document.querySelectorAll("input[type=radio]");
   for(var i=0;i<elee.length;i++){
      elee[i].checked = false;
   }
    if(calMonthYear == thisMonthYear )
    {
        document.getElementById("prev").style.display= "none";   
        
    }
    
    else{
        document.getElementById("prev").style.display= "flex";
    }
}


//  this function say when click on next button check if current month is same as calendar html month then prev button should be disabled
//  and all radio button is deselected 
document.getElementById("next").onclick = function(){
let monthYear = document.getElementsByClassName("current-date");
let calMonthYear = monthYear[0].innerText;
let thisYear = date.getFullYear();
let thisMonth = months[date.getMonth()];
let thisMonthYear = thisMonth+" "+thisYear
    console.log("next")
    var elee = document.querySelectorAll("input[type=radio]");
   for(var i=0;i<elee.length;i++){
      elee[i].checked = false;
   }
    if(calMonthYear == thisMonthYear )
    {
        document.getElementById("prev").style.display= "none";   
    }
    
    else{
        document.getElementById("prev").style.display= "flex";
    }
}


// Sending data to api post
    let timeInput = document.getElementsByName('check-substitution-2')
    let subjectInput = document.getElementById('subject')
    let messageInput =  document.getElementById('message')
    // this function for when user select files then show on html page
    $("#getFile").change(function() {

        let filename = ""
        for(let i=0; i< this.files.length ; i++)
        {
            filename = this.files[i].name+","+filename
            console.log("filesss",filename)
            
        }
         selectedfile = this.files
         document.getElementById("filee").innerHTML = filename;

        });



document.querySelector('form').addEventListener('submit', async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();   

    let ele = document.getElementsByName('check-substitution-2');
       let radiovalue; 
         
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
           
            radiovalue=    ele[i].value;
        }

   
    const time = radiovalue.split("-")
    const dateTimeArray = SelectedMonthYear.split(" ");
    let month = months.indexOf(dateTimeArray[0])+1 ;
    if(month.toString().length < 2)
    {
        month= "0"+String(month); 
    }

    if(day.toString().length < 2)
    {
        day= "0"+String(day); 
    }
    let year = dateTimeArray[1]

    const time1= dateTimeArray[0]+" "+day+","+" "+dateTimeArray[1]+" "+time[0];
    const time2= dateTimeArray[0]+" "+day+","+" "+dateTimeArray[1]+" "+time[1];

    const timeUTC1= year+"-"+month+"-"+day+"T"+time[0]+".000Z"
    const timeUTC2=  year+"-"+month+"-"+day+"T"+time[1]+".000Z"
    let dateTimeobj1 = new Date(time1)
    let dateTimeobj2 = new Date(time2);
    console.log("time1,",time1)
    console.log("time2,",time2)
    console.log("dateTimeobj1",dateTimeobj1.toUTCString())
    console.log("dateTimeobj2",dateTimeobj1.toISOString())
    let startTiming = timeUTC1//dateTimeobj1;
    let endTiming = timeUTC2//dateTimeobj2;
    let useremail = localStorage.getItem("email");
    let id = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    let organiser = {name : "Vipul gupta",email:"vipul.gupta@networsys.com"}
    let emailusr = useremail + "," + "v07860@gmail.com"
    const data = new FormData()
    // data.append('file',selectedfile)
    if(selectedfile!=null)
    {
    for (let i = 0 ; i < selectedfile.length ; i++) {
        data.append("file", selectedfile[i]);
    }
    }
    // $.each($('input[type=file]')[0].files,function(key,input){
    //    data.append('file[]', input);
    //     });
    data.append("startTiming",startTiming)
    data.append("endTiming",endTiming)
    data.append("summary",subjectInput.value)
    data.append("title","BeamerLaw")
    data.append( "Description",messageInput.value)
    data.append("email",emailusr)
    //   data.append( "organiser" ,{ name : "Vipul gupta",email:"vipul.gupta@networsys.com"})
    // data.append("organiser[name]","Vipul gupta")
    // data.append("organiser[email]","vipul.gupta@networsys.com")
    data.append("organiser",JSON.stringify({name : "Vipul gupta",email:"vipul.gupta@networsys.com"})) 
    data.append("location" ,"Noida")
   const payload = new URLSearchParams(data)
    // await fetch(`http://localhost:5000/api/booking/appointment?id=${id}`, {
        await fetch(`https://beamerlaw.onrender.com/api/booking/appointment?id=${id}`, {
		method: "POST",
        
	     mode:"cors",
         body:data,
        
        headers: { authorization: `Bearer ${token}` },
      
    // body: JSON.stringify({
        
    //     startTiming:startTiming,
    //     endTiming:endTiming,
    //     summary:subjectInput.value,
    //     title:"BeamerLaw",
    //     Description:messageInput.value,
    //     emailusr:emailusr,
    //     organiser : {name : "Vipul gupta",email:"vipul.gupta@networsys.com"},
    //     location : "Noida",
    //     // File:selectedfile
    // }),
     
    // headers: {
    // "Content-Type": "multipart/form-data",
    // 'Accept': 'application/json'	
    
    // // 'Content-Type': 'application/json',
    // // 'Accept': 'application/json'
    // }
}).then(response => {
			if (response.ok) {
			  response.json().then(json => {
				// usrID=json._id
				// x.style.display = "none";
				// y.style.display = "flex";
                alert("Your Appointment is booked ,Please check you email address"); 
                window.location.href="index.html";
				console.log("Okay");
               
			  });
			  
			}
		}).catch(err => console.log("err",err))
	


});

// // Here a date has been assigned
// // while creating Date object
// let dateobj = 
// new Date('October 15, 1996 05:35:32');
  
// // Contents of above date object is converted
// // into a string using toISOString() function.
// let B = dateobj.toISOString();
  
// // Printing the converted string.
// console.log(B);




 
// let token= localStorage.getItem("token")
// let ele = document.getElementsByName('check-substitution-2');
// let radiovalue;   
//  for(i = 0; i < ele.length; i++) {
//      if(ele[i].checked)
    
//      radiovalue=    ele[i].value;
//  }
// async function getData(){
//     // var monthYear = document.getElementsByClassName("current-date");
//     // var calMonthYear = monthYear[0].innerText;
//     let token = localStorage.getItem("token");
//  await  fetch(`http://localhost:5000/api/booking`, {
//         method: "GET",
        
//          mode:"cors",
         
        
//         headers: { authorization: `Bearer ${token}` },
      
    
//     }).then(response => {
//             if (response.ok) {
//               response.json().then(json => {
//                 // usrID=json._id
//                 // x.style.display = "none";
//                 // y.style.display = "flex";
//                 console.log("jsonget",json)
//                 booked= json.bookedDataList
//                console.log("booked",booked)
//               });
              
//             }
//         }).catch(err => console.log("err",err))
    
// }
   

let booked  

 async   function checkAvailability(){
    console.log("9999999999999999999999999999999999999999999999999999999999")
    var elee = document.querySelectorAll("input[type=radio]");
    let  startDay = day
    let endDay
   for(var i=0;i<elee.length;i++){
      elee[i].checked = false;
   }
    let calMonthYear = monthYear[0].innerText;
    console.log("day",day)
    
    console.log("month",calMonthYear)
    var Value=calMonthYear.split(" ");      
    var month = String((months.indexOf(Value[0]) + 1)); 
    if(month.toString().length < 2)
    {
        month= "0"+String(month); 
    }
    if(day.toString().length < 2)
    {
   startDay= "0"+String(day); 
    }
    let startTime =Value[1]+"-"+month+"-"+startDay
    endDay = String(Number(day)+1)
    if(endDay.toString().length < 2)
    {
        endDay= "0"+ String(endDay); 
    }
    let endTime =Value[1]+"-"+month+"-"+endDay;
    let token = localStorage.getItem("token");
        await fetch("https://beamerlaw.onrender.com/api/booking/BookedAppointmentOnSelectedDate", {
             // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        startTime: startTime,
        endTime: endTime,
        
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => {
    if (response.ok) {
        console.log("hello1",response);
      response.json().then(json => {
        console.log("hello2",json);
        booked = json.bookedDataList
        console.log("hello",booked);
        radioButtonCheck();
      });
    }
}).catch(err => console.log(err))
        
        // console.log("check start", booked)

        
    }

async function radioButtonCheck(){
    document.getElementById("a25").disabled = false;
         document.getElementById("l25").style.display= "flex";
         document.getElementById("a26").disabled = false;
         document.getElementById("l26").style.display= "flex";
         document.getElementById("a27").disabled = false;
         document.getElementById("l27").style.display= "flex";
         document.getElementById("a28").disabled = false;
         document.getElementById("l28").style.display= "flex";

         console.log("hello",booked);
        // // console.log("SelectedMonthYear",SelectedMonthYear)
        // // console.log("day",day)
        booked?.map((i)=>{
            console.log("i",i)
            let date1 = i.startTime;
            console.log("date1",date1)
            console.log("date1",String(date1).substring(11,19));
            let checkData = String(date1).substring(11,19)
            console.log("checkdata",checkData,typeof checkData, checkData.length)
        //     // const date2 = new Date(i.endTime);
            // console.log(date1);
        //     console.log("tyupe",typeof SelectedMonthYear )
        //   console.log(SelectedMonthYear.substring(SelectedMonthYear.length-4))
        // console.log("month",SelectedMonthYear.substring(0,3),String(date1).substring(4,7))
        // console.log("year",SelectedMonthYear.slice(-4),String(date1).substring(11,15))
        // console.log("day",day, String(date1).substring(8,10))
            // if((SelectedMonthYear.substring(0,3))==(String(date1).substring(4,7)) && (SelectedMonthYear.slice(-4))==(String(date1).substring(11,15)) && (day) ==(String(date1).substring(8,10)))
            // {
                // console.log("hello","i am in ",String(date1).substring(17,25))
                // let dates = String(date1).substring(17,24);
                // console.log("dates", dates.length, dates)
                    // if(String(date1).substring(17,25) )
                    // {
                    //    let one = document.getElementById("a25")
                    //    const first= one.value.split("-")
                    //    let two = document.getElementById("a26")
                    //    const second= two.value.split("-")
                    //    let three = document.getElementById("a27")
                    //    const third= three.value.split("-")
                    //    let four = document.getElementById("a28")
                    //    const fourth= four.value.split("-")
                   if(checkData== "10:00:00" )
                    {
                        console.log("if1")
                        document.getElementById("a25").disabled = true;
                        //  document.getElementById("l25").style.background="white";
                        //  document.getElementById("l25").style.pointerEvents= "none";
                         document.getElementById("l25").style.display= "none";

                    }

                    if(checkData == "11:00:00" )
                    {
                        console.log("if1")
                        document.getElementById("a26").disabled = true;
                        // document.getElementById("l26").style.background="white";
                        document.getElementById("l26").style.display= "none";

                    }

                    if(checkData == "12:00:00" )
                    {
                        console.log("if1")
                        document.getElementById("a27").disabled = true;
                        // document.getElementById("l27").style.background="white";
                        document.getElementById("l27").style.display= "none";

                    }

                    if(checkData== "01:00:00" )
                    {
                        console.log("if1")
                        document.getElementById("a28").disabled = true;
                        // document.getElementById("l28").style.background="white";
                        document.getElementById("l28").style.display= "none";

                    }
            // }
        })
}
    // async  function  checkAvailability(){
    //  await   getData();
    //     console.log("getdata")
    //  await   checkBookAvailability();
    //     console.log("checkBookAvailability")
    // }