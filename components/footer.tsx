import styles from "../styles/Footer.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/danielafarias"
        target="_blank"
        rel="noreferrer"
      >
        <small className={styles.footer_copyright}>
          &copy; Copyrights 2019 Stack. All Rights Reserved
        </small>
      </a>
      <div className={styles.footer_terms}>
        <small>Privacy Policy</small>
        <small>Terms and Conditions</small>
      </div>
    </footer>
  );
}
