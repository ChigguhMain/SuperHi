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
            if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white");
                progressTag.classList.add("white");
            } else {
                headerTag.classList.remove("white");
                progressTag.classList.remove("white");
            };
        };
    })
    // What ever your scroll position, find the pageYOffset value of the middle of the window.
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + (window.innerHeight / 2);

    sections.forEach(section => {
        const topSection = section.offsetTop;
        const midSection = topSection + (section.offsetHeight / 2);

        const distanceToSection = midViewport - midSection;

        const parallaxTags = section.querySelectorAll(`[data-parallax]`);

        // Loop over each parallax tag
        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"));
            tag.style.transform = `translate(0px, ${distanceToSection * speed}px)`;
        })
    })
})