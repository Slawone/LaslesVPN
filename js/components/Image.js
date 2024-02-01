const Image  = (image, parentClassName) => {
  const className = parentClassName
    ? `${parentClassName}__image`
    : 'image';

  return `
    <img class="${className}" src="${image.source}" alt="${image.alternate}">
  `
}

export default Image;