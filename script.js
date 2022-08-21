// Menu Mobile
const btnMenu = document.getElementById("img-menu");

btnMenu.addEventListener ("click", function (){
  const menu = document.getElementById("nav");
  // console.log(menu.className);
  menu.classList.toggle("menu-flex");
  // console.log(menu.className);
});
