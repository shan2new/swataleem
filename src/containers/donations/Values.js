import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Values = () => (
  <div className="mt-5">
    <Container>
      <Row className="pb-2 pt-5">
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">forever</span> grateful
          </div>
        </Col>
      </Row>
      <Row className={'pb-5'}>
        <Col sm={12} md={6} className="pt-2">
          <p>
            We are deeply grateful to our partners for supporting us in our
            endeavour.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
