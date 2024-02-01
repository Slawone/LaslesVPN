import MenuItem from './MenuItem.js';

const Menu = (links) => {
  return `
    <nav>
      ${links ? links.map(link => MenuItem(link)).join('') : ''}
    </nav>
  `;
};

export default Menu;