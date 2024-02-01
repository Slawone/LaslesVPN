import Logo from '../../ui/Logo.js';
import Menu from './components/Menu.js'
import Autorization from './components/Autorization.js';
import Theme from './components/Theme.js';

/**
 * @param {object} section
 * @returns
 */

const Header = (section) => {
  const {
    nav,
    autorization,
    name
  } = section;

  const className = `${name}`;

  return `
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <a class="logo" href="/">
            ${Logo()}
          </a>
          ${Menu(nav, className)}
          ${Autorization(autorization, className)}
          ${Theme('light', className)}
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