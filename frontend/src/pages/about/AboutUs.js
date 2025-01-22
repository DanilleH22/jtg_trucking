import React from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styles from "../../styles/Homepage.module.css";

const AboutUs = () => {
  return (
    <Container>
        <Row>
            <Col>
            <h3>About Us</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
            <Col>
            <Image src="holder.js/171x180" thumbnail />
            </Col>
        </Row>
        <Row>
            <Col>
            <Image src="holder.js/171x180" thumbnail />
            </Col>
            <Col>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
        </Row>
        <Row>
          <h4>Testimonials</h4>
        <Card style={{ width: '18rem' }} >
      <Card.Body >
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
      <Card.Body className={styles.Testimony}>
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
      <Card.Body>
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