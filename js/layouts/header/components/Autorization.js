import AutorizationLink from './AutorizationLink.js';

const Autorization = (autorization) => {
  return `
    <div>
      ${autorization ? autorization.map(link => AutorizationLink(link)).join('') : ''}
    </div>
  `
};

export default Autorization;