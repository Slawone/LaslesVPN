const body = document.body;
const headerNav = document.querySelector('.header__nav');
const themeBtn = document.querySelector('.header__theme');
const themeSvg = document.querySelector('.header__theme-svg');
const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
})

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeSvg.classList.toggle('dark');
})