import MenuItem from './MenuItem.js';

/**
 * @param {array} links
 * @param {string} parentClassName
 * @returns
 */

const Menu = (links, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__nav`
    : 'nav';

  return `
    <nav class="${className}">
      ${links ? links.map(link => MenuItem(link, parentClassName)).join('') : ''}
    </nav>
  `;
};

export default Menu;