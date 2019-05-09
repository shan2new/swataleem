import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../Images/Logo.jpg'
import { slide as Menu } from 'react-burger-menu'

const TopNav = props => {
  let curPath = window.location.href.split('/')[3]

  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          fontSize: '20px',
          paddingTop: '24px',
          paddingBottom: '5px'
        }}>
        <Navbar.Brand href="/home">
          <img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ transform: 'translateY(-15%)', marginRight: '15px' }}
          />
          <span
            className="title-header"
            style={{
              letterSpacing: '-2px',
              fontSize: '35px',
              fontWeight: '900'
            }}>
            <span className="title-header-initial">swa</span>taleem
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="/about"
              className={{ 'current-link': curPath === 'about' }}>
              About
            </Nav.Link>
            <Nav.Link
              href="/work"
              className={{ 'current-link': curPath === 'work' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="/resources"
              className={{ 'current-link': curPath === 'resources' }}>
              Resources
            </Nav.Link>
            <Nav.Link
              onClick={() => window.open('https://swataleem.org/', '_blank')}
              className={{ 'current-link': curPath === 'blog' }}>
              Blog
            </Nav.Link>
            <Nav.Link
              href="/careers"
              className={{ 'current-link': curPath === 'careers' }}>
              Join
            </Nav.Link>
            <Nav.Link
              href="/donations"
              style={{ color: 'purple' }}
              className={{ 'current-link': curPath === 'donations' }}>
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Menu right {...props} className="d-block d-md-none">
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/resources">Resources</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Join</a>
        <a href="/donations">Donate</a>
      </Menu>
    </div>
  )
}

export default TopNav
