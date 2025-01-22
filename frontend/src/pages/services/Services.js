import React from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import trucking2 from "../../assets/trucking2.jpg";

const Services = () => {
  return (
    <Container>

<Card className="my-3 shadow-sm">
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center my-auto'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Service</Card.Title>
              <Card.Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Services