import styles from "../../styles/Home.module.scss";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";

export default function CardCarousel() {
  return (
    <CardGroup className={styles.blog_group}>
      <Card className={styles.blog_card}>
        <Card.Img
          variant="top"
          src="images/blog_image_1.svg"
          className={styles.blog_card_image}
        />
        <Card.Body className={styles.blog_card_body}>
          <Card.Title className={styles.blog_card_title}>
            Quick-start guide to nuts and seeds
          </Card.Title>
          <div className={styles.blog_card_autor}>
            <img src="images/man1.jpg" /> <small>Kevin Ibrahim</small>
          </div>
        </Card.Body>
      </Card>

      <Card className={styles.blog_card}>
        <Card.Img
          variant="top"
          src="images/bloco_image_2.svg"
          className={styles.blog_card_image}
        />
        <Card.Body className={styles.blog_card_body}>
          <Card.Title className={styles.blog_card_title}>
            Nutrition: Tips for Improving Your Health
          </Card.Title>
          <div className={styles.blog_card_autor}>
            <img src="images/man2.jpg" /> <small>Barbara McGregor</small>
          </div>
        </Card.Body>
      </Card>

      <Card className={styles.blog_card}>
        <Card.Img
          variant="top"
          src="images/bloco_image_3.svg"
          className={styles.blog_card_image}
        />
        <Card.Body className={styles.blog_card_body}>
          <Card.Title className={styles.blog_card_title}>
            The top 10 benefits of eating healthy
          </Card.Title>
          <div className={styles.blog_card_autor}>
            <img src="images/man3.jpg" /> <small>Jasmine Hason</small>
          </div>
        </Card.Body>
      </Card>

      <Card className={styles.blog_card}>
        <Card.Img
          variant="top"
          src="images/bloco_image_4.svg"
          className={styles.blog_card_image}
        />
        <Card.Body className={styles.blog_card_body}>
          <Card.Title className={styles.blog_card_title}>
            What Makes you not eating Healthy Food
          </Card.Title>
          <div className={styles.blog_card_autor}>
            <img src="images/man4.jpg" /> <small>Mike Jackson</small>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
