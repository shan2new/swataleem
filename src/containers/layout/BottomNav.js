import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './../../index.css'

const BottomNav = () => (
  <Navbar bg="light" expand="lg" className="pb-5 pt-5 bottom-nav">
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <p>
            <span class="title-header-initial">Let's</span>{' '}
            <span class="title-header">stay connected</span>
            <br />
            Be a part of SwaTaleem’s journey. Subscribe to our quarterly
            newsletter to stay updated of the work.
          </p>

          <Form>
            <Form.Row>
              <Col className="remove-padding">
                <Form.Control
                  type="email"
                  placeholder="Enter your email id"
                  className="remove-border fz-point-nine subscription-input"
                  style={{ background: '#f8f9fa' }}
                />
              </Col>
              <Col className="remove-padding">
                <Button
                  variant="primary"
                  className="theme-background remove-border fz-point-nine subscribe-btn"
                  style={{ width: '150px', height: '47px' }}
                  type="submit">
                  Subscribe
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col className="pt-5">
          <Row className="pb-2">
            <Col className="theme-font">
              <a
                className="theme-font"
                href="https://www.facebook.com/swataleem/"
                target="_blank">
                Facebook
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col className="theme-font">
              <a className="theme-font" href="">
                Twitter
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col className="theme-font">
              <a
                className="theme-font"
                href="https://www.instagram.com/swataleem_ngo"
                target="_blank">
                Instagram
              </a>
            </Col>
          </Row>
        </Col>
        <Col className="pt-5">
          <Row className="pb-2">
            <Col>
              {' '}
              <a
                className="white-font"
                href="/about"
                style={{ color: '#302e2f !important' }}>
                {' '}
                About
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col>
              <a
                className="white-font"
                href="/work"
                style={{ color: '#302e2f !important' }}>
                Work
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col>
              <a
                className="white-font"
                href="/resources"
                style={{ color: '#302e2f !important' }}>
                Resources
              </a>
            </Col>
          </Row>
        </Col>
        <Col className="pt-5">
          <Row className="pb-2">
            <Col>
              {' '}
              <a
                className="white-font"
                href="https://swataleem.org/"
                style={{ color: '#302e2f !important' }}>
                Blog
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col>
              {' '}
              <a
                className="white-font"
                href="/careers"
                style={{ color: '#302e2f !important' }}>
                Join
              </a>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col>
              <a
                className="white-font"
                href="/donations"
                style={{ color: '#302e2f !important' }}>
                Donate
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Navbar>
)

export default BottomNav
