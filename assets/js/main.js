const buttonMenu = document.querySelector(".button-menu");
const menuVertical = document.querySelector(".container__nav-list");

buttonMenu.addEventListener("click", () => {
    menuVertical.classList.toggle("container__nav-list-show")
})