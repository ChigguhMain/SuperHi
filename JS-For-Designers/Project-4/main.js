const pixelTag = document.querySelector("div.pixels");

// Update pixelTag according to how much we've scrolled. 
document.addEventListener("scroll", function(){
    let pixels = window.pageYOffset;
    
    pixelTag.innerHTML = pixels;
})