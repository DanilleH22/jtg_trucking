import React from 'react';
import { Container, Row, Col, Stack, Image, Nav, Navbar } from 'react-bootstrap';
import trucking1 from "../assets/trucking1.jpg";
import { Link } from 'react-router-dom';


function Footer (){
  return (
    <footer>
    <Container fluid className='pt-3'> 
    <Row className='bg-secondary text-white p-4'>
        <Col className='mx-5'>
        <Stack>
            <Image src={trucking1} rounded width={150} height={150}/>
            <h2>JTG Trucking</h2>
            <p>Reliable Transport Solutions</p>
        </Stack>
        </Col>
        <Col>
        <Nav className='flex-column fs-5'>
            Useful Links
            <Nav.Link as={Link} to="#" className='text-white'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='text-white'>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className='text-white'>Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='text-white'>Contact us</Nav.Link>
        </Nav>
        </Col>
        <Col>
        <h3>Contact Us</h3>
        <p>Tel: +1 212 555 1212</p>
        <p>Email: jtgtrucking@email.com</p>
        </Col>

    </Row>
    </Container>
    </footer>
  )
}

export default Footer