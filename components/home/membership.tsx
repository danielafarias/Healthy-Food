import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default function Membership() {
  return (
    <section className={styles.membership}>
      <div className={styles.membership_search}>
        <Container>
          <Row>
            <h3>
              Join our membership <br />
              to get special offer
            </h3>
          </Row>
          <Row>
            <Form.Control placeholder="Enter your email address" />
            <Button className={styles.membership_search_button}>
              Join
            </Button>
          </Row>
        </Container>
      </div>
    </section>
  );
}
