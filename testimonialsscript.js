//Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "images/avatar.png",
      testimonial:
        "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "images/avatar.png",
      testimonial:
        "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "images/avatar.png",
      testimonial:
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: "images/avatar.png",
      testimonial:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <div class="testimonialRow">
    
    <img src=${testimonials[i].image} >
    <img src="images/quoteComa.png" height="40px" width="60px" style="margin-top:-10px">
  
    <div>
    <br/>
      <p>${testimonials[i].testimonial}</p>
      <br/>
      <br/>
     
      
      <div class="lineName"></div>
      <h3 style="margin-right:30px">${testimonials[i].name}</h3>
     
      <div>
      <div>

      




      
      
        
        
       
        <div>
        <div>




      
    `;
  };
  window.onload = displayTestimonial;