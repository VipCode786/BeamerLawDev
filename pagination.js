
 function pagination() {
const paginationNumbers = document.getElementById("pagination-numbers");

const paginatedList = document.getElementById("customers");
console.log("paginatedList",paginatedList)
const table =  document.getElementById("customers");
var listItems = document.querySelectorAll(".users")
// table.tBodies[0].rows;
console.log("listItems",listItems)

const nextButton = document.getElementById("next-button");

const prevButton = document.getElementById("prev-button");

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
console.log("pageCount1",pageCount)
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
  
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  console.log("pageCount",pageCount)
  console.log("currentPage-4",currentPage+4)
  if (pageCount === currentPage+4) {
    
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }

  if(pageCount < 5)
  {
    disableButton(prevButton);
    disableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  console.log("pagecount",pageCount)
  for (let i = 1; i <= pageCount; i++) {
    console.log("pagecount",pageCount)
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  console.log("listrows",listItems.length)
  for(var i=0;i<listItems.length;i++)
  {
    listItems[i].classList.add("hidden")
    if (i >= prevRange && i < currRange) {
      listItems[i].classList.remove("hidden");
    }
  }
};

//  window.addEventListener("load", () => {
  console.log("weeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
//  });

 }

 pagination()