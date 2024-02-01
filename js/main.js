import App from './App.js';

const API_BASE_URL = 'https://laslesvpn-4eab4-default-rtdb.europe-west1.firebasedatabase.app/.json';
const $root = document.querySelector('#root');

fetch(API_BASE_URL)
	.then((response) => response.json())
	.then((data) => {
		$root.insertAdjacentHTML('beforeend', App(data));
	})
	.catch((error) => console.error(error))

// const $burgerBtn = document.querySelector('.header__burger');

// $burgerBtn.addEventListener('click', () => {
// 	$burgerBtn.classList.toggle('active');
// });
