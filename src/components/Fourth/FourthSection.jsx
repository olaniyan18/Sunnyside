/** @format */

import image1 from "../../../images/desktop/image-gallery-cone.jpg";
import image2 from "../../../images/desktop/image-gallery-milkbottles.jpg";
import image3 from "../../../images/desktop/image-gallery-orange.jpg";
import image4 from "../../../images/desktop/image-gallery-sugarcubes.jpg";

import image11 from "../../../images/mobile/image-gallery-cone.jpg";
import image22 from "../../../images/mobile/image-gallery-milkbottles.jpg";
import image33 from "../../../images/mobile/image-gallery-orange.jpg";
import image44 from "../../../images/mobile/image-gallery-sugar-cubes.jpg";

import styles from "./style.module.css";
export default function FourthSection() {
  return (
    <div className={styles.fourth}>
      <picture>
        <source media='(max-width: 768px)' srcSet={image22} />
        <img
          className='transform-image'
          src={image2}
          alt='Transform your brand'
        />
      </picture>
      <picture>
        <source media='(max-width: 768px)' srcSet={image33} />
        <img
          className='transform-image'
          src={image3}
          alt='Transform your brand'
        />
      </picture>
      <picture>
        <source media='(max-width: 768px)' srcSet={image11} />
        <img
          className='transform-image'
          src={image1}
          alt='Transform your brand'
        />
      </picture>
      <picture>
        <source media='(max-width: 768px)' srcSet={image44} />
        <img
          className='transform-image'
          src={image4}
          alt='Transform your brand'
        />
      </picture>{" "}
    </div>
  );
}
