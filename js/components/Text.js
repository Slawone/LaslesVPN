const Text  = (text, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__description`
    : 'description';

  return `
    <p class="${className}">${text}</p>
  `
}

export default Text;