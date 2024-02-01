import Sun from '../../../ui/Sun.js';
import Moon from '../../../ui/Moon.js';

/**
 * @param {string} mode
 * @returns
 */

const Theme = (mode, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__theme`
    : 'theme';

  return `
    <button class="${className}" title="Нажмите для смены темы">
      ${mode === 'light' ? Moon() : Sun()}
    </button>
  `;
};

export default Theme;