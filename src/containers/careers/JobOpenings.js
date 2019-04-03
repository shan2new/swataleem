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
        <Col xs={12} sm={4} className="pb-2">
          <Card class="remove-border" style={{ background: '#f1f1f2' }}>
            <Card.Body className="padding-25">
              <Card.Title className="h5 font-weight-bold lh-15">
                Field Researcher
              </Card.Title>
              <hr class="hr-underliner" align="left" />
              <Card.Text className="pt-3">
                We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
                Panipat and Mewat in Haryana to create thriving communities
                within schools.
              </Card.Text>
              <Button variant="outline-danger" style={{ width: '100%' }}>
                Know More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4} className="pb-2">
          <Card class="remove-border" style={{ background: '#f1f1f2' }}>
            <Card.Body className="padding-25">
              <Card.Title className="h5 font-weight-bold lh-15">
                Primary School Teacher
              </Card.Title>
              <hr class="hr-underliner" align="left" />
              <Card.Text className="pt-3">
                We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
                Panipat and Mewat in Haryana to create thriving communities
                within schools.
              </Card.Text>
              <Button variant="outline-danger" style={{ width: '100%' }}>
                Know More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4} className="pb-2">
          <Card class="remove-border" style={{ background: '#f1f1f2' }}>
            <Card.Body className="padding-25">
              <Card.Title className="h5 font-weight-bold lh-15">
                Accountant
              </Card.Title>
              <hr class="hr-underliner" align="left" />
              <Card.Text className="pt-3">
                We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
                Panipat and Mewat in Haryana to create thriving communities
                within schools.
              </Card.Text>
              <Button variant="outline-danger" style={{ width: '100%' }}>
                Know More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default JobOpenings
