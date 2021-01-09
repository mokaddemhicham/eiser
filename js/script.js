let menuToggle = document.querySelector(".resp-menu");
let menu = document.querySelector(".m-nav");
let menuToggleSpan = document.getElementById("s2");

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle("activeMenu");
    menuToggleSpan.classList.toggle("animateToggleMenu");
});