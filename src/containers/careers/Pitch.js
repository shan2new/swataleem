import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Pitch = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">let's</span> work together
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/30px110" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/30px110  " />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img variant="top" src="holder.js/30px110  " />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Pitch
