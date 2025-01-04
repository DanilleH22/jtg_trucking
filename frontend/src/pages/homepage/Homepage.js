import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import trucking3 from "../../assets/trucking3.jpg";
import trucking1 from "../../assets/trucking1.jpg";
import styles from "../../styles/Homepage.module.css";
import Card from 'react-bootstrap/Card';

const Homepage = () => {
  return (
    <Container fluid="md">
      <Row className="my-4">
        <Col className="text-center">
          <h1 className="d-flex justify-content-center">JTG TRUCKING</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.ImageContainer}>
            <img src={trucking3} alt="Trucking" className={styles.Image} />
            <div className={styles.ImageText}>
              <h4>Company Slogan</h4>
              <p>Some generic text</p>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <h3>Why Us</h3>
        <div>
        <Card className={styles.Why1}>
      <Card.Body >Reason 1</Card.Body>
    </Card>
    <Card className={styles.Why2}>
      <Card.Body >Reason 2</Card.Body>
    </Card>
          <Image src={trucking1} alt="Trucking" className={styles.Image2} roundedCircle />
      
        
        
    <Card className={styles.Why3}>
      <Card.Body >Reason 3</Card.Body>
    </Card>
    <Card className={styles.Why4}>
      <Card.Body >Reason 4</Card.Body>
    </Card>
        </div>
        
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Request a Quote</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
