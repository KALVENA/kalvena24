const menu = document.querySelector(".Menu");
const cancel = document.querySelector(".menu-cross");
const menubar = document.querySelector(".menubar");
const body = document.querySelector(".body");


menu.addEventListener("click", () => {
 
  menubar.classList.toggle("active");
  body.style.backgroundColor = "#cfcfcf";
});
cancel.addEventListener("click", () => {

  menubar.classList.toggle("active");
});