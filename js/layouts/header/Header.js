import Logo from '../../ui/Logo.js';
import Menu from './components/Menu.js'
import Autorization from './components/Autorization.js';
import Theme from './components/Theme.js';

const Header = (section) => {
  console.log(section);
  return `
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <a class="logo" href="/">
            ${Logo()}
          </a>
          ${Menu(section.nav)}
          ${Autorization(section.autorization)}
          ${Theme('light')}
          <button class="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
};

export default Header;