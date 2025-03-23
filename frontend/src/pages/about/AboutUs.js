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
                <p>"At JTG Trucking, we are committed to providing dependable, efficient, and high-quality transportation services that help businesses move forward. With a strong foundation built on reliability and professionalism, we have grown into a trusted name in the trucking industry. Our fleet of well-maintained trucks and skilled drivers ensures that every load is delivered safely, securely, and on time, no matter the distance. From local hauls to long-distance freight, we take pride in offering customized logistics solutions that meet the diverse needs of our clients. We understand that transportation is a critical part of any business, and we work tirelessly to ensure seamless deliveries that keep supply chains running smoothly.."</p>
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
            <p >"Customer satisfaction is at the heart of everything we do at JTG Trucking. We believe in building long-term relationships based on trust, transparency, and exceptional service. Our team is dedicated to providing tailored solutions, competitive pricing, and responsive communication to meet the unique demands of every client. Whether you're a small business looking for local deliveries or a large enterprise needing nationwide freight services, we have the expertise and resources to handle your logistics with care and precision. At JTG Trucking, we don’t just transport goods—we deliver peace of mind, ensuring that your cargo arrives safely and efficiently, every time."</p>
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