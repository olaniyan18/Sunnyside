/** @format */

import styles from "./style.module.css";
import logo from "../../../images/logo.svg";
import icon from "../../../images/icon-hamburger.svg";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  function handleClick() {
    setMobile((prev) => !prev);
  }

  const NavRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (NavRef.current && !NavRef.current.contains(event.target)) {
        setMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.nav} ref={NavRef}>
      <img src={logo} alt='sunny side' />
      <ul className={styles.ul}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li className={styles.contact}>Contact</li>
      </ul>

      <img className={styles.icon} onClick={handleClick} src={icon} alt='' />

      {mobile && (
        <div className={styles.ulmobile}>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className={styles.contact}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
