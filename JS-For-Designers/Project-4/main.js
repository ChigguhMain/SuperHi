const pixelTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");

// Update pixelTag according to how much we've scrolled. 
document.addEventListener("scroll", function(){
    let pixels = window.pageYOffset;
    pixelTag.innerHTML = pixels;
    
    // When we scroll the page, make a progress bar that tracks the distance. 
    let bodyHeight = bodyTag.getBoundingClientRect().height;
    let scrollDistance = bodyHeight - window.innerHeight;
    let percentage = pixels / scrollDistance;
    progressTag.style.width = `${100 * percentage}%`;

})

