// Setting up the variables
const imageContainer = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img"); 
let slideNumber = 0;
let z = 1;

// On click, change the image
imageContainer.addEventListener("click", function(){
    slideNumber = slideNumber + 1;
    z = z + 1;
    
    // Start slides again once they finish
    if(slideNumber > images.length - 1){
        slideNumber = 0;
    }

    // Remove all fade animations
    images.forEach(image => {
        image.style.animation = "";
    });

    // Update slide number and z-index
    images[slideNumber].style.zIndex = z;
    images[slideNumber].style.animation = "fade 0.3s";
});

// On mouseover, move the images to random positions
imageContainer.addEventListener("mouseenter", function(){
    images.forEach(function(image){
        
        /* Not snapping to a grid
        const randX = 100 * Math.random() -50;
        const randY = 100 * Math.random() -50;
        */

        // Snapping to a grid based on 0, 25, 50, 75
        const randX = 25 * (Math.floor(Math.random() * 5)) - 50;
        const randY = 25 * (Math.floor(Math.random() * 5)) - 50;
        
        image.style.transform = `translate(${randX}px, ${randY}px)`;
    });
});

// On mouseout, move all the images back to their orignal positions
imageContainer.addEventListener("mouseleave", function(){
    images.forEach(function(image){
        image.style.transform = "translate(0px, 0px)";
    });
})