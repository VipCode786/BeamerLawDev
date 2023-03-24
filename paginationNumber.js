var pageNumbers = document.querySelectorAll(".pagination-number")
// document.querySelector() finds, and returns, the first element
// matching the supplied selector (or null, if no element is found):

const nextButton = document.getElementById("next-button");

const prevButton = document.getElementById("prev-button");
// here we create an adjacent element from the string of HTML,
// the 'afterend' argument states that this adjacent element
// follows the el1 node, rather than preceding it or appearing
// within:
let initialValue=0;
let lastValue=3;
let next=1;
let prev=-1;
let lastPage = pageNumbers[3].innerText

// table.tBodies[0].rows;


console.log("pageNumbers",pageNumbers)

function dot()
{
for(let i=0;i<pageNumbers.length;i++){
  if(i==(pageNumbers.length)-1){
  pageNumbers[i].insertAdjacentHTML('beforebegin', '.....');
  }
}
}

function pageNumber()
{
for(let i=0;i<pageNumbers.length;i++){
  pageNumbers[i].style.display="none"
        if(i>=Number(initialValue) && i<=Number(lastValue) ){
       
          pageNumbers[i].style.display=""
          }
       if(i==(pageNumbers.length)-1){
       
        pageNumbers[i].style.display=""
        } 
      }
}

pageNumber();
dot();
prevButton.addEventListener("click", () => {
  initialValue = initialValue -1;
  lastValue= lastValue-1;
  pageNumber();
           
});

nextButton.addEventListener("click", () => {
  initialValue = initialValue +1;
  lastValue= lastValue+1;
  pageNumber();
});