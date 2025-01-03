import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import trucking3 from "../../assets/trucking3.jpg";
import trucking1 from "../../assets/trucking1.jpg";
import styles from "../../styles/Homepage.module.css";

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
        <div>
          <h3>Why Us</h3>
          <Image src={trucking1} alt="Trucking" className={styles.Image2} roundedCircle />
          <p>Reason one</p>
          <p>Reason 2</p>
          <p>Reason 3</p>
          <p>REason 4</p>
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
