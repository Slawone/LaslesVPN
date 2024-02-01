import Header from './layouts/header/Header.js';
import Hero from './layouts/hero/Hero.js';

/**
 * @param {object} data
 * @returns
 */

const App = (data) => {
  console.log(data);
  const {
    header,
    hero,
  } = data;

  return `
    ${Header(header ? header : '')}
    <main>
      ${Hero(hero ? hero: '')}
    </main>
  `
}

export default App;