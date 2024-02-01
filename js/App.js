import Header from './layouts/header/Header.js';

/**
 * @param {object} data
 * @returns
 */

const App = (data) => {
  const {
    header,
  } = data;

  return `
    ${Header(header ? header : '')}
  `
}

export default App;