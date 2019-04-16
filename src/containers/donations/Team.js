import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Team = () => (
  <div className="mt-5 d-none">
    <Container>
      <Row className="pb-2 pt-5">
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">the</span> financials
          </div>
        </Col>
      </Row>
      <Row className={'pb-5'}>
        <Col sm={12} md={6} className="pt-2">
          <p>
            The Annual Reports of the organization could be find below: Annual
            Report 2018-19
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
