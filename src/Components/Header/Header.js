import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../img/logo.png'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Suparan Sharma
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        
          </Nav>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/about">ABOUT ME</Nav.Link>
            <Nav.Link href="/skills">SKILLS</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/experience">EXPERIENCE</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header