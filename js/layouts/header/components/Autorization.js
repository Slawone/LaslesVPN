import AutorizationLink from './AutorizationLink.js';

/**
 * @param {array} autorization
 * @returns
 */

const Autorization = (autorization, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__autorization`
    : 'autorization';

  return `
    <div class="${className}">
      ${autorization ? autorization.map(link => AutorizationLink(link, className)).join('') : ''}
    </div>
  `;
};

export default Autorization;