import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          JTG Trucking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
