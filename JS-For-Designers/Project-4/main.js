const pixelTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");
const headerTag = document.querySelector("header");

// Update pixelTag according to how much we've scrolled. 
document.addEventListener("scroll", function(){
    let pixels = window.pageYOffset;
    pixelTag.innerHTML = pixels;
    
    // When we scroll the page, make a progress bar that tracks the distance. 
    let bodyHeight = bodyTag.getBoundingClientRect().height;
    let scrollDistance = bodyHeight - window.innerHeight;
    let percentage = pixels / scrollDistance;
    progressTag.style.width = `${100 * percentage}%`;

    // When we scroll the page, see how far down the page we've scrolled 
    // then for each section, check if we have passed it and if we have...
    // then update the text in the header
    sections.forEach(section => {
        if (pixels >= section.offsetTop) {
            clientTag.innerHTML = section.getAttribute("data-client");
            pageTag.innerHTML = section.getAttribute("data-page");
        }
        
    })
})