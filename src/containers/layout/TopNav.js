import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const TopNav = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="#home">SwaTaleem</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/about">Work</Nav.Link>
        <Nav.Link href="/home">Resources</Nav.Link>
        <Nav.Link href="/home">Blog</Nav.Link>
        <Nav.Link href="/careers">Join</Nav.Link>
        <Nav.Link href="/donations">Donate</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TopNav
