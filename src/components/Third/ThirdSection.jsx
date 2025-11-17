/** @format */

import emily from "../../../images/image-emily.jpg";
import thomas from "../../../images/image-thomas.jpg";
import jennie from "../../../images/image-jennie.jpg";

import styles from "./style.module.css";

export default function ThirdSection() {
  return (
    <div className={styles.third}>
      <label>Clients Testimonials</label>

      <div className={styles.testimonials}>
        <div className={styles.name}>
          <img src={emily} />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className={styles.ceo}>
            <h3>Emily R.</h3>
            <label className={styles.ceo1}>Marketing Director</label>
          </div>
        </div>

        <div className={styles.name}>
          <img src={thomas} />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className={styles.ceo}>
            <h3>Thomas S.</h3>
            <label className={styles.ceo1}>Chief Operating Officer</label>
          </div>
        </div>

        <div className={styles.name}>
          <img src={jennie} />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className={styles.ceo}>
            <h3>Jennie F.</h3>
            <label className={styles.ceo1}>Business Owner</label>
          </div>
        </div>
      </div>
    </div>
  );
}
