const body = document.body;
const headerNav = document.querySelector('.header__nav');
const headerNavLinks = document.querySelectorAll('.header__nav-link');
const themeBtn = document.querySelector('.header__theme');
const themeSvg = document.querySelector('.header__theme-svg');
const logoSvgs = document.querySelectorAll('.logo__svg');
const autorizationLink = document.querySelector('.autorization__link_sign-in');
const priceCardPlans = document.querySelectorAll('.price__card-plan');
const priceCardBtns = document.querySelectorAll('.price__card-btn');
const footerLinks = document.querySelectorAll('.footer__column-list-link');
const cards = document.querySelectorAll('.reviews__card');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  logoSvgs.forEach(svg => svg.classList.toggle('dark'));
  footerLinks.forEach(link => link.classList.toggle('dark'));
  headerNav.classList.toggle('dark');
  headerNavLinks.forEach(link => link.classList.toggle('dark'));
  themeSvg.classList.toggle('dark');
  autorizationLink.classList.toggle('dark');
  priceCardPlans.forEach(plan => plan.classList.toggle('dark'));
  priceCardBtns.forEach(button => button.classList.toggle('dark'));
  cards.forEach(card => card.classList.toggle('dark'));
})