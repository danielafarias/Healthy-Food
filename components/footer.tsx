import styles from "../styles/Footer.module.scss";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <small className={styles.footer_copyright}>&copy; Copyrights 2019 Stack. All Rights Reserved</small>
        <div className={styles.footer_terms}>
        <small>Privacy Policy</small>
        <small>Terms and Conditions</small>
        </div>
    </footer>
  );
}
