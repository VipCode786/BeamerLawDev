 let data
//  function groupItemBy(array, property) {
//     var hash = {},
//         props = property.split('.');
//     for (var i = 0; i < array.length; i++) {
//         var key = props.reduce(function(acc, prop) {
//             return acc && acc[prop];
//         }, array[i]);
//         if (!hash[key]) hash[key] = [];
//         hash[key].push(array[i]);
//     }
//     return hash;
// }

// let grouped = Object.values(groupItemBy(cart, 'item.id'));
// console.log(grouped);



 async function getData(){
 const token =localStorage.getItem("token")
 console.log("appointment token")
 await fetch("https://beamerlaw.onrender.com/api/booking/", {
    method: "GET",
     mode:"cors",
    headers: {
        Accept: 'application/json',
        // const token =localStorage.getItem("token")
        Authorization: `Bearer ${token}`
        
      },
}).then(response => {
    if (response.ok) {
      response.json().then(json => {
        console.log(json)
       data=  json.bookedDataList
       console.log(data)

    //    ////////////////////////////////////////////////
       
    function groupItemBy(array, property) {
        var hash = {},
            props = property.split('.');
        for (var i = 0; i < array.length; i++) {
            var key = props.reduce(function(acc, prop) {
                return acc && acc[prop];
            }, array[i]);
            if (!hash[key]) hash[key] = [];
            hash[key].push(array[i]);
        }
        return hash;
    }
    
    let grouped = Object.values(groupItemBy(data, 'user._id'));
    console.log("grouped",grouped);

    // ////////////////////////////////////////////////////////
 
       let table = '<table border="1" id="customers"  data-current-page="1" class="table>';
       table +=`<thead>`
       table += `<tr><th>Name</th><th>Email</th><th>StartTime</th><th>EndTime</th></tr>`;
       table +=`</thead>`
       table +=`<tbody class="searchable">`
       console.log("grouped.length",grouped.length)
       for(let i=0;i< grouped.length;i++){
           let arrElement =  grouped[i];
           for(let j=0;j< arrElement.length;j++)
           {
            if(j==0)
            {
                console.log(arrElement[i].user.email)
           table = table + `<tr class="users">`;
           table = table + `<td>${arrElement[j].user.firstName} ${arrElement[j].user.lastName}</td>`;
           table = table + `<td>${arrElement[j].user.email}</td>`;
           table = table + `<td>${String(new Date(arrElement[j].startTime.slice(0, -1))).slice(0,24)}</td>`;
           table = table + `<td>${String(new Date(arrElement[j].endTime.slice(0, -1))).slice(0,24)}</td>`;
           table += `</tr>`;
            }
            else{
                table = table + `<tr class="users">`;
                table = table + `<td></td>`;
                table = table + `<td></td>`;
                table = table + `<td >${String(new Date(arrElement[j].startTime.slice(0, -1))).slice(0,24)}</td>`;
                table = table + `<td>${String(new Date(arrElement[j].endTime.slice(0, -1))).slice(0,24)}</td>`;
                table += `</tr>`;
            }
           }
       
       }
       table +=`</tbody>`
    //    for(i=0;i< grouped.length ; i++)
    //    {
    //     if(i=0)
    //     {
    //         console.log("ifpart")
    //        table = table + `<tr>`;
    //        table = table + `<td>Title: </td>`;
    //        table = table + `<td>Title: </td>`;
    //        table = table + `<td>Title:</td>`;
    //        table += `</tr>`; 
    //     }
    //    }
    //    data?.forEach((data, index) => {
    //        table = table + `<tr>`;
    //        table = table + `<td>Title: ${data.id}</td>`;
    //        table = table + `<td>Title: ${data.title}</td>`;
    //        table = table + `<td>Title: ${data.rank}</td>`;
    //        table += `</tr>`;
    //     });
        table += "</table>";

        document.getElementById("movies-list").innerHTML = table;
       
      });
  }  })

}

// List of movies


async function displayMovies(){
    await getData();
  
}

// displayMovies()