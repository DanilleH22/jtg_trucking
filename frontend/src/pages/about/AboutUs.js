import React from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import example1 from "../../assets/example1.jpg";
import example2 from "../../assets/example2.jpg";


const AboutUs = () => {
  return (
    <Container>
        <Row className='my-2'>
            <Col>
            <h1 className="d-flex justify-content-center">About Us</h1>
            </Col>
        </Row>
        <Row className='my-2'>
            <Col className='d-flex align-items-center justify-content-center'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
            <Col>
            <Image src={example2} thumbnail />
            </Col>
        </Row>
        <Row className='my-3'>
            <Col>
            <Image src={example1} thumbnail />
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
            <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
        </Row>
        <Row className='d-flex justify-content-evenly my-3'>
          <h2 className="text-center">Testimonials</h2>
        <Card style={{ width: '18rem' }} >
      <Card.Body className="text-center">
      <span style={{color: 'Gold'}}>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      </span>
        <Card.Title>Amazing!</Card.Title>
        <Card.Text>
          'The service was great and the owner was very communicative. I would definitely recommend this service.'
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <span style={{color: 'Gold'}}>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      </span>
        <Card.Title>Use them!!</Card.Title>
        <Card.Text>
          'They are the type of service you're looking for. They are professional and very helpful.'
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <span style={{color: 'Gold'}}>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      </span>
        <Card.Title>Phenomenal</Card.Title>
        <Card.Text>
          'Brilliant service, as always. Any thing you need they will help you with.'
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <span style={{color: 'Gold'}}>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      <i class="fa-solid fa-star" ></i>
      </span>
        <Card.Title>Fast!!</Card.Title>
        <Card.Text>
          'They are organised and quick, exactly what you need in a company.'
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Row>
    </Container>
  )
}

export default AboutUs