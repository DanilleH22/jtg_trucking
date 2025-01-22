import React from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import example1 from "../../assets/example1.jpg";
import example2 from "../../assets/example2.jpg";

const AboutUs = () => {
  return (
    <Container>
        <Row className='my-2'>
            <Col>
            <h3 className="d-flex justify-content-center">About Us</h3>
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
          <h4 className="text-center">Testimonials</h4>
        <Card style={{ width: '18rem' }} >
      <Card.Body className="text-center">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          'Some quick example text to build on the card title and make up the
          bulk of the card's content.""
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          'Some quick example text to build on the card title and make up the
          bulk of the card's content.""
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          'Some quick example text to build on the card title and make up the
          bulk of the card's content.""
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-center">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          'Some quick example text to build on the card title and make up the
          bulk of the card's content.""
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Row>
    </Container>
  )
}

export default AboutUs