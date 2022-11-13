// Menu Mobile
const btnMenu = document.getElementById("img-menu");

btnMenu.addEventListener ("click", function (){
  const menu = document.getElementById("nav");
  // console.log(menu.className);
  menu.classList.toggle("menu-flex");
  // console.log(menu.className);
});

// Imagem Perfil 3D - Programador BR
// Fiz mudanças no css por causa do conflito de centralização com outros elementos
// https://www.youtube.com/watch?v=B-ifg3ZuKKE&list=PLIzJhTi3cja7FfbEQ9fBna0m7oP1Lukxa&index=3

const card = document.getElementById("card")

card.addEventListener ("click", function (){
  card.classList.toggle("flip");
});


alert('portifólio antigo')