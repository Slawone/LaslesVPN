/**
 * @param {string} item
 * @param {string} parentClassName
 * @returns
 */

const MenuItem = (item, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__link`
    : 'link';

  return `
    <a class="${className}" href="#!">${item.data}</a>
  `;
};

export default MenuItem;