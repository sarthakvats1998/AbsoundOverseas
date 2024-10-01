import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';
import logo from '../assets/logo.jpeg';

function ColorSchemesExample() {
  const location = useLocation();

  return (
    <div id="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown" className={location.pathname.startsWith("/wallPanels") || location.pathname.startsWith("/acousticCeilings") || location.pathname.startsWith("/seatingSystems") || location.pathname.startsWith("/acousticDoors") ? "active" : ""}>
                <NavDropdown.Item as={Link} to="/wallPanels" className={location.pathname === "/wallPanels" ? "active" : ""}>Wall Panels</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/acousticCeilings" className={location.pathname === "/acousticCeilings" ? "active" : ""}>Acoustic Ceilings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/metalCeilings" className={location.pathname === "/metalCeiling" ? "active" : ""}>Metal Ceilings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/seatingSystems" className={location.pathname === "/seatingSystems" ? "active" : ""}>Seating Systems</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/acousticDoors" className={location.pathname === "/acousticDoors" ? "active" : ""}>Acoustic Doors</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/stageSystems" className={location.pathname === "/stageSystems" ? "active" : ""}>Stage Systems</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Nav.Link>
              <Nav.Link as={Link} to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;
