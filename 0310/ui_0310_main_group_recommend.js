const menu = document.querySelector(".menu");
function menuClickHandler(e) {
  const hamburgerIcon = document.querySelector('.hamburgerIcon')
  const menuAside = document.querySelector('.menu__asdide__wrapper')
  const menu = document.querySelector('.menu')
  menuAside.classList.toggle('show_aside');
  console.log(menuAside)
  console.log(hamburgerIcon);
  menu.classList.toggle('move_menu')
  console.log(e.target)
  hamburgerIcon.classList.toggle('open');
}
menu.addEventListener('click',menuClickHandler);
