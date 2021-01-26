/*
var headerMenu = document.querySelector(".header-menu");
var ham = document.querySelector(".hamburger-icon");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    headerMenu.classList.toggle("showNav");
    ham.classList.toggle("showClose");
}

var menuLinks = document.querySelectorAll(".header-menu-link");

menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleHamburger);
    }
)

function swapper() {
    toggleClass(document.getElementByClass('.header-menu'), 'open');
}

var el = document.getElementByClass()
*/

let ham = document.querySelectorAll('.hamburger-icon');
ham.addEventListener("click", toggleHamburger);

window.onload=function toggleHamburger() {
    console.log("Clicked");
}