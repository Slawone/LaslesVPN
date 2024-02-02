const body = document.body;
const headerNav = document.querySelector('.header__nav');
const headerNavLinks = document.querySelectorAll('.header__nav-link');
const themeBtn = document.querySelector('.header__theme');
const themeSvg = document.querySelector('.header__theme-svg');
const logoSvg = document.querySelector('.header__logo-svg');
const autorizationLink = document.querySelector('.autorization__link_sign-in');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  logoSvg.classList.toggle('dark');
  headerNav.classList.toggle('dark');
  headerNavLinks.forEach(link => link.classList.toggle('dark'));
  themeSvg.classList.toggle('dark');
  autorizationLink.classList.toggle('dark');
})