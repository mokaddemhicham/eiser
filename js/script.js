let menuToggle = document.querySelector(".resp-menu");
let menu = document.querySelector(".m-nav");
let menuToggleSpan1 = document.getElementById("s1");
let menuToggleSpan2 = document.getElementById("s2");
let menuToggleSpan3 = document.getElementById("s3");
let scrollToTop = document.querySelector(".scrollToTop");
let fixedNav = document.querySelector("#fixed");
menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle("activeMenu");
    menuToggleSpan1.classList.toggle("animateToggleMenu1");
    menuToggleSpan2.classList.toggle("animateToggleMenu2");
    menuToggleSpan3.classList.toggle("animateToggleMenu1");
});

window.addEventListener("scroll",()=>{
    scrollToTop.classList.toggle("activeScrollButton", window.scrollY > 400);
    fixedNav.classList.toggle("fixedNav", window.scrollY > 60);
});
scrollToTop.addEventListener("click", ()=>{
    window.scrollTo({ top: 0, behavior: "smooth"});
});
