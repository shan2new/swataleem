import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './../../index.css'

const TopNav = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <p class="title-header">
          <span class="title-header-initial">Let's</span> stay connected
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/about">Work</Nav.Link>
          <Nav.Link href="/home">Resources</Nav.Link>
          <Nav.Link href="/home">Blog</Nav.Link>
          <Nav.Link href="/careers">Join</Nav.Link>
          <Nav.Link href="/donations">Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default TopNav
