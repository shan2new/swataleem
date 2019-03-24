import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Vision = () => (
  <Jumbotron>
    <Container>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <div
            class="font-weight-light"
            style={{
              fontSize: '2rem',
              display: 'inline-block',
              lineHeight: '40px'
            }}>
            Our mission is to facilitate the creation of sustainable, equitable,
            learner-centric systems.
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }} class="font-weight-bold">
            Our Mission
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default Vision
