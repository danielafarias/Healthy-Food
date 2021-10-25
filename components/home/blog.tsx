import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row } from "react-bootstrap";
import CardCarousel from "./carousel";

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <h3 className={styles.blog_title}>Read Our Blog</h3>
      <p className={styles.blog_paragraph}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <Container className={styles.blog_container}>
        <Row>
          <CardCarousel />
        </Row>
      </Container>
    </section>
  );
}
