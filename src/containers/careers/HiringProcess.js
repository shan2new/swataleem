import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const HiringProcess = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">how</span> we hire
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4}>
          <Card className="remove-border">
            <Card.Body>
              <Card.Title
                className="font-weight-bold theme-font"
                style={{ fontSize: '44px' }}>
                1.
              </Card.Title>
              <Card.Title className="font-weight-bold">
                Initial Screening
              </Card.Title>
              <Card.Text>
                Find a role that interests you and send in your resume
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card className="remove-border">
            <Card.Body>
              <Card.Title
                className="font-weight-bold theme-font"
                style={{ fontSize: '44px' }}>
                2.
              </Card.Title>
              <Card.Title className="font-weight-bold">
                Selection Process
              </Card.Title>
              <Card.Text>
                Depending upon the role, go through some tasks and interview
                process
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card className="remove-border">
            <Card.Body>
              <Card.Title
                className="font-weight-bold theme-font"
                style={{ fontSize: '44px' }}>
                3.
              </Card.Title>
              <Card.Title className="font-weight-bold">
                Welcome Aboard
              </Card.Title>
              <Card.Text>
                Join the team and be a part of the movement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default HiringProcess
