let seeMoreBrn = document.querySelector(".see-more-btn");
let expandHeight = document.querySelector(".man")
seeMoreBrn.addEventListener("click", function myFunc() {
    expandHeight.classList.add("expand-height");
    seeMoreBrn.classList.add("display-none");
});

let menuIcon = document.querySelector(".menu-icon");
let icons = document.querySelector(".icons");
let crossIcon = document.querySelector(".cross-icon");
menuIcon.addEventListener("click", function myFunc() {
    icons.classList.add("icons-visible");
    menuIcon.classList.add("menu-icon-hidden");
    crossIcon.classList.add("cross-icon-visible")
});
crossIcon.addEventListener("click", function myFunc() {
    icons.classList.remove("icons-visible");
    menuIcon.classList.remove("menu-icon-hidden");
    crossIcon.classList.remove("cross-icon-visible")
});