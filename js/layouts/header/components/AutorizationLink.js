/**
 * @param {string} link
 * @returns
 */

const AutorizationLink = (link, parentClassName) => {
  const {data, mod} = link;

  const className = parentClassName
    ? `${parentClassName}-link`
    : 'link';

  const modificator = `${className}_${mod}`;

  return `
    <a class="${className} ${modificator}" href="#!">${link.data}</a>
  `;
};

export default AutorizationLink;