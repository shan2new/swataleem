import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InternshipBanner from '../../Images/Display/InternshipBanner.jpg'

const OngoingProject = () => (
  <div className="mt-5">
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${InternshipBanner})`,
        backgroundSize: '100% 577px'
      }}>
      <Container>
        <Row>
          <Col xs={0} md={3} />
          <Col xs={0} md={3} />
          <Col>
            <Card className="remove-border">
              <Card.Body className="padding-25">
                <Card.Subtitle className="mb-2 text-muted title-header-initial fz-20">
                  Get Involved
                </Card.Subtitle>
                <Card.Title className="h5 font-weight-bold lh-15">
                  Volunteers / Internships
                </Card.Title>
                <Card.Text className="pt-3">
                  Come become a partner in SwaTaleem’s Journey and wish
                  contribute through your time and skills by
                  volunteering/interning with us.
                </Card.Text>
                <Button variant="outline-danger">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
)

export default OngoingProject
