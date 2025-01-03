import React from "react";
import {
    Row,
    Col,
    Container,
    Card,
  } from "react-bootstrap";

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
          <h3>Why us</h3>
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