import styles from "../../styles/Home.module.scss";
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Recipes() {
  return (
    <section id="recipes" className={styles.recipes}>
      <h3>Our Best Recipes</h3>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <Container className={styles.recipes_container}>
        <Row>
          <Col>
            <Card className={styles.recipes_card}>
              <Card.Img variant="top" src="images/comida_1.svg" />
              <Card.Body className={styles.recipes_card_body}>
                <Card.Title className={styles.recipes_card_title}>
                  Broccoli Salad with Bacon
                </Card.Title>
                <Button
                  variant="primary"
                  className={styles.recipes_card_button}
                >
                  See Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.recipes_card}>
              <Card.Img variant="top" src="images/comida_2.svg" />
              <Card.Body className={styles.recipes_card_body}>
                <Card.Title className={styles.recipes_card_title}>
                  Classic Beef Burgers
                </Card.Title>
                <Button
                  variant="primary"
                  className={styles.recipes_card_button}
                >
                  See Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className={styles.recipes_card}>
              <Card.Img variant="top" src="images/comida_3.svg" />
              <Card.Body className={styles.recipes_card_body}>
                <Card.Title className={styles.recipes_card_title}>
                  Classic Potato Salad
                </Card.Title>
                <Button
                  variant="primary"
                  className={styles.recipes_card_button}
                >
                  See Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.recipes_card}>
              <Card.Img variant="top" src="images/comida_4.svg" />
              <Card.Body className={styles.recipes_card_body}>
                <Card.Title className={styles.recipes_card_title}>
                  Cherry Cobbler on the Grill
                </Card.Title>
                <Button
                  variant="primary"
                  className={styles.recipes_card_button}
                >
                  See Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
