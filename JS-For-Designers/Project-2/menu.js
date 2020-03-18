const toggleNav = document.querySelector(".toggle-nav");
const mainArea = document.querySelector("main");

toggleNav.addEventListener("click", function() {
    mainArea.classList.toggle("open");
    if(mainArea.classList.contains("open")){
        toggleNav.innerHTML = `<img src="/JS-For-Designers/Project-2/assets/close.svg"/>Close`;
    } else {
        toggleNav.innerHTML = `<img src="/JS-For-Designers/Project-2/assets/menu.svg"/>Menu`;
    }
})