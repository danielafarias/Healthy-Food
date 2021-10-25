import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row, Button } from "react-bootstrap";

export default function Recipes() {
  return (
    <section id="services" className={styles.services}>
      <Container className={styles.services_container}>
        <Row>
          <h3 className={styles.services_title}>
            The best services ready <br /> To serve you
          </h3>
        </Row>
        <Row>
          <p className={styles.services_paragraph}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className={styles.services_paragraph}>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p className={styles.services_paragraph}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </Row>
        <Row>
          <Button className={styles.services_button}>Know More</Button>
        </Row>
      </Container>
    </section>
  );
}
