// navbar togglers

const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#menu-toggle");
const closeMenu = document.querySelector("#close-menu");
const logo = document.querySelector("#logo");
const main = document.querySelector("#main");



toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  toggleMenu.classList.add('hidden');
  logo.classList.add('hidden');
  main.classList.add('hidden');
  navMenu.classList.remove('left');
  navMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.add('hidden');
  toggleMenu.classList.toggle('hidden');
  logo.classList.toggle('hidden');
  main.classList.toggle('hidden');
  navMenu.classList.remove('active');
  navMenu.classList.add('left');
});
