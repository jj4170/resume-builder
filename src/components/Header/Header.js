import React from "react";

import resumeSvg from "../../assets/logo.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <img src={resumeSvg} alt="Logo" className={styles.logo} />
      <span>TheAiHelper.com</span>
    </div>
  );
}

export default Header;
