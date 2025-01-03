import React from "react";
import {
    Row,
    Col,
    Container,
    Card,
    Image,
    Overlay,
  } from "react-bootstrap";
  import trucking3 from "../../assets/trucking3.jpg";

  import { useState, useRef } from 'react';

const Homepage = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Container fluid="md">
      <Row className="my-4">
        <Col className="text-center">
          <h1 className="d-flex justify-content-center">JTG TRUCKING</h1>
        </Col>
      </Row>

      <Row>
        <Col>
        <Image src={trucking3} fluid />
        <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
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