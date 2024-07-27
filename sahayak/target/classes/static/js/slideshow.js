let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// let img = ["./src/earthquake.jpg", "./src/fireman.jpg", "./src/rescue.jpg"];

// function showSlides(){ 
//   let i = 0;

//   const ele = document.querySelector(".bodyContainer");
  
//   while( i!= 5){
//     ele.style.backgroundImage = `url(${img[i]})`;
//     i++;

//   }
// }

let ishidden = true;

document.querySelector(".dropDown").addEventListener("change", ()=>{
    ishidden = ! ishidden;

    if(ishidden){
        document.querySelector(".toHide").classList.add("hidden");
    } else {
        document.querySelector(".toHide").classList.remove("hidden");
    }
})