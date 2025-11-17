/** @format */

import Navbar from "../Navbar/Navbar";
import img from "../../../images/desktop/image-header.jpg";
import styles from "./style.module.css";

export default function FirstSection() {
  return (
    <div className={styles.firstsection}>
      <img src={img} alt='' />

      <Navbar />
      <div className={styles.creative}>
        <label>We are creatives</label>
        <div className={styles.svg}>
          <svg width='36' height='114' xmlns='http://www.w3.org/2000/svg'>
            <g
              stroke='#FFF'
              strokeWidth='6'
              fill='none'
              fillRule='evenodd'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 3v100M3 95.484l15 15 15-15' />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
