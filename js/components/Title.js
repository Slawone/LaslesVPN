/**
 * @param {object} title 
 * @param {string} parentClassName 
 * @returns 
 */

const Title = (title, parentClassName) => {
  const {
    data, 
    priority
  } = title;

  const className = parentClassName
    ? `${parentClassName}__title`
    : 'title';

  switch (priority) {
    case 1: return `
      <h1 class="${className}">${data}</h1>
    `
      break;

    case 2: return `
      <h2 class="${className}">${data}</h2>
    `
      break;

    case 3: return `
      <h3 class="${className}">${data}</h3>
    `
      break;

    case 4: return `
      <h4 class="${className}">${data}</h4>
    `
      break;
  
    default: return `
    <h5 class="${className}">${data}</h5>
  `
      break;
  }  
}

export default Title;