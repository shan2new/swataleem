import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const TopNav = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="#home">Let's stay connected</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/about-us">Work</Nav.Link>
        <Nav.Link href="/about-us">Resources</Nav.Link>
        <Nav.Link href="/about-us">Blog</Nav.Link>
        <Nav.Link href="/about-us">Join</Nav.Link>
        <Nav.Link href="/about-us">Donate</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TopNav
