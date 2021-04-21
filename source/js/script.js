const menuToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav');

menu.classList.remove('main-nav--nojs');
menu.classList.add('main-nav--closed');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('main-nav--closed');
});
