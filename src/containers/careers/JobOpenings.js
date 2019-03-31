import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const JobOpenings = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">we are</span> looking for
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default JobOpenings
