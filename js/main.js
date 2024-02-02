const body = document.body;
const headerNav = document.querySelector('.header__nav');
const headerNavLinks = document.querySelectorAll('.header__nav-link');
const themeBtn = document.querySelector('.header__theme');
const themeSvg = document.querySelector('.header__theme-svg');
const logoSvg = document.querySelector('.header__logo-svg');
const burgerBtn = document.querySelector('.header__burger');
const autorizationLink = document.querySelector('.autorization__link_sign-in');
const mainTitle = document.querySelector('h1');
const paragraphs = document.querySelectorAll('p');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
})

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  logoSvg.classList.toggle('dark');
  headerNav.classList.toggle('dark');
  headerNavLinks.forEach(link => link.classList.toggle('dark'));
  themeSvg.classList.toggle('dark');
  autorizationLink.classList.toggle('dark');
  mainTitle.classList.toggle('dark');
  paragraphs.forEach(paragraph => paragraph.classList.toggle('dark'));
})