import Sun from '../../../ui/Sun.js';
import Moon from '../../../ui/Moon.js';

const Theme = (mode) => {
  return `
    ${mode === 'light' ? Moon() : Sun()}
  `;
};

export default Theme;