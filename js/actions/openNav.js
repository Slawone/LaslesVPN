const headerNav = document.querySelector('.header__nav');
const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
})