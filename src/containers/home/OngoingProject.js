import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import OngoingProjectImage from '../../Images/Display/OngoingProject.jpg'

const OngoingProject = () => (
  <div className="mt-5">
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${OngoingProjectImage})`,
        backgroundSize: '100% 577px',
        height: '577px'
      }}>
      <Container className="home-page-project">
        <Row>
          <Col xs={0} md={3} />
          <Col xs={0} md={3} />
          <Col>
            <Card className="remove-border ongoing-project">
              <Card.Body>
                <Card.Subtitle className="text-muted title-header-initial fz-20">
                  ongoing project
                </Card.Subtitle>
                <Card.Title className="h5 font-weight-bold lh-15">
                  Kasturba Gandhi Balika Vidyalya
                </Card.Title>
                <Card.Text className="pt-3" style={{ marginBottom: '1.8rem' }}>
                  We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
                  Panipat and Mewat in Haryana to create thriving communities
                  within schools.
                </Card.Text>
                <Button
                  variant="outline-danger"
                  className="padding-x-50-web-only">
                  Know More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
)

export default OngoingProject
