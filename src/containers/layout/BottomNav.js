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
                  className="theme-background remove-border fz-point-nine"
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
            <Col className="theme-font">Facebook</Col>
          </Row>
          <Row className="pb-2">
            <Col className="theme-font">Twitter</Col>
          </Row>
          <Row className="pb-2">
            <Col className="theme-font">Instagram</Col>
          </Row>
        </Col>
        <Col className="pt-5">
          <Row className="pb-2">
            <Col>About</Col>
          </Row>
          <Row className="pb-2">
            <Col>Work</Col>
          </Row>
          <Row className="pb-2">
            <Col>Resources</Col>
          </Row>
        </Col>
        <Col className="pt-5">
          <Row className="pb-2">
            <Col>Blog</Col>
          </Row>
          <Row className="pb-2">
            <Col>Join</Col>
          </Row>
          <Row className="pb-2">
            <Col>Donate</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Navbar>
)

export default BottomNav
