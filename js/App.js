import Header from './layouts/header/Header.js';

const App = (data) => {
  return `
    ${Header(data.header)}
  `
}

export default App;