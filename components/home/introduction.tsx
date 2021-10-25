import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default function Introduction() {
  return (
    <section id="introduction" className={styles.introduction}>
      <div className={styles.introduction_header}>
        <h1>Healthy Food</h1>

        <nav>
          <a href="#recipes">Healthy Recipes</a>
          <a href="#blog">Blog</a>
          <a href="#membership">Join</a>
          <Button className={styles.introduction_button} href="/register">
            Register
          </Button>
        </nav>
      </div>
      <div className={styles.introduction_search}>
        <Container>
          <Row>
            <h2>
              Ready for <br /> Trying a new <br /> recipe?
            </h2>
          </Row>
          <Row>
            <Form.Control placeholder="Search healthy recipes" />
            <Button>
              <GoSearch />
            </Button>
          </Row>
        </Container>
      </div>
    </section>
  );
}
