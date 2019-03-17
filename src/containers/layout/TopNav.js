import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import ValuesImages from '../../Images/icons/Basics/ConstitutionalValues.svg'

const TopNav = () => (
  <Navbar
    expand="lg"
    style={{
      fontSize: '20px',
      paddingTop: '24px',
      paddingBottom: '5px'
    }}>
    <Navbar.Brand href="/home">
      <img
        src={ValuesImages}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        style={{ transform: 'translateY(-15%)' }}
      />
      <span
        class="title-header"
        style={{ letterSpacing: '-3px', fontSize: '35px', fontWeight: '900' }}>
        <span class="title-header-initial">swa</span>taleem
      </span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/about">Work</Nav.Link>
        <Nav.Link href="/home">Resources</Nav.Link>
        <Nav.Link href="/home">Blog</Nav.Link>
        <Nav.Link href="/careers">Join</Nav.Link>
        <Nav.Link href="/donations" style={{ color: 'purple' }}>
          Donate
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TopNav
