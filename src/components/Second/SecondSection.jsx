/** @format */

import transform from "../../../images/desktop/image-transform.jpg";
import stand from "../../../images/desktop/image-stand-out.jpg";
import image1 from "../../../images/desktop/image-graphic-design.jpg";
import image2 from "../../../images/desktop/image-photography.jpg";

import transform1 from "../../../images/mobile/image-transform.jpg";
import stand1 from "../../../images/mobile/image-stand-out.jpg";
import image3 from "../../../images/mobile/image-graphic-design.jpg";
import image4 from "../../../images/mobile/image-photography.jpg";

import styles from "./style.module.css";

export default function SecondSection() {
  return (
    <div className={styles.second}>
      <div className={styles.first}>
        <div className={styles.transform}>
          <h2>Transform your brand</h2>

          <p>
            {" "}
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div className={styles.line}>
            {" "}
            <label> Learn more </label>
            <hr />
          </div>
        </div>
        <picture>
          <source media='(max-width: 1110px)' srcSet={transform1} />
          <img
            className='transform-image'
            src={transform}
            alt='Transform your brand'
          />
        </picture>
      </div>
      <div className={styles.sec}>
        <picture>
          <source media='(max-width: 1110px)' srcSet={stand1} />
          <img
            className='transform-image'
            src={stand}
            alt='Transform your brand'
          />
        </picture>

        <div className={styles.transform}>
          <h2> Stand out to the right audience</h2>
          <p>
            {" "}
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className={styles.line}>
            {" "}
            <label> Learn more </label>
            <hr />
          </div>{" "}
        </div>
      </div>
      <div className={styles.third}>
        <div>
          <picture>
            <source media='(max-width: 1110px)' srcSet={image3} />
            <img
              className='transform-image'
              src={image1}
              alt='Transform your brand'
            />
          </picture>

          <span className={styles.text}>
            <h2>Graphic Design</h2>
            <p>
              {" "}
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </span>
        </div>
        <div>
          <picture>
            <source media='(max-width: 1110px)' srcSet={image4} />
            <img
              className='transform-image'
              src={image2}
              alt='Transform your brand'
            />
          </picture>

          <span className={`${styles.text} ${styles.photo}`}>
            <h2>Photography</h2>
            <p>
              {" "}
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
