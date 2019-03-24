import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import AutonomyandGrowth from '../../Images/icons/Basics/AutonomyandGrowth.svg'
import Excellence from '../../Images/icons/Basics/Excellence.svg'
import Collaboration from '../../Images/icons/Basics/Collaboration.svg'

const Values = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">our</span> values
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{ background: '#f1f1f2' }}
            className="text-center remove-border h-100">
            <Card.Img
              variant="top"
              src={AutonomyandGrowth}
              style={{ width: '45%', height: '45%' }}
            />
            <Card.Body>
              <Card.Title
                className="font-weight-bold"
                style={{ fontSize: '24px' }}>
                Excellence with humility
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ background: '#f1f1f2' }}
            className="text-center remove-border h-100">
            <Card.Img
              variant="top"
              src={Excellence}
              style={{ width: '45%', height: '45%' }}
            />
            <Card.Body>
              <Card.Title
                className="font-weight-bold"
                style={{ fontSize: '24px' }}>
                Collaborative Mutual Transformation
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ background: '#f1f1f2' }}
            className="text-center remove-border h-100">
            <Card.Img
              variant="top"
              src={Collaboration}
              style={{ width: '45%', height: '45%' }}
            />
            <Card.Body>
              <Card.Title
                className="font-weight-bold"
                style={{ fontSize: '24px' }}>
                Education for Constitutional Values
              </Card.Title>
              <Card.Text>Equality, Justice, Freedom, Fraternity</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
