// Storing HTML elements into variables
const imageContainer = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img"); 

// On click, increase the z-index of the next image in the array
let slideNumber = 0;
let z = 1;

imageContainer.addEventListener("click", function(){
    slideNumber = slideNumber + 1;
    z = z + 1;

    images[slideNumber].style.zIndex = z;
    
})
