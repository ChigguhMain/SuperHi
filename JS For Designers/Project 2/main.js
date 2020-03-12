const menuBtn = document.querySelector(".toggle-nav");
const mainArea = document.querySelector("main");

menuBtn.addEventListener("click", function() {
    mainArea.classList.toggle("main-toggle");
})