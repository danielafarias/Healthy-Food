import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";

export default function Membership() {
  return (
    <section id="membership" className={styles.membership}>
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
            <Button className={styles.membership_search_button}>Join</Button>
          </Row>
        </Container>
      </div>
    </section>
  );
}
