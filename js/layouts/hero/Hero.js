import Title from '../../components/Title.js';
import Text from '../../components/Text.js';
import Image from '../../components/Image.js';

const Hero = (section) => {
  const {
    title,
    name,
    description,
    link,
    image,
  } = section;

  const className = name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="hero__wrapper">
          <div class="hero__info">
            ${Title(title, className)}
            ${Text(description, className)}
            <a href="${link.href}" class="hero__link">${link.data}</a>
          </div>
          <div class="hero__img">
            ${Image(image)}
          </div>
        </div>
      </div>
    </section>
  `
};

export default Hero;