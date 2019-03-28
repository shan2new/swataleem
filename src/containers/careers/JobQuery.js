import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const JobQuery = () => (
  <Container
    style={{ paddingLeft: '300px', paddingRight: '300px' }}
    className="mt-5">
    <Row className="mt-2">
      <Col style={{ textAlign: 'center' }}>
        <div
          style={{ display: 'inline-block', fontSize: '1.2rem' }}
          class="font-weight-bold">
          Don't see your position listed?
        </div>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block' }}>
          Don't see your position listed but are interested in working with us
          anyway? Tell us how you can contribute.
        </div>
      </Col>
    </Row>
    <Row className="mt-1">
      <Col style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block' }}>
          Send your resumes to careers{' '}
          <span>
            <a
              class="theme-font font-weight-bold"
              href="mailto:careers@swataleem.com">
              careers@SwaTaleem.com
            </a>
          </span>
        </div>
      </Col>
    </Row>
  </Container>
)

export default JobQuery
