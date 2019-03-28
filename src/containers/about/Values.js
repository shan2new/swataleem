import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ConstitutionalValues from '../../Images/icons/Basics/ConstitutionalValues.svg'
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
      <Row className="align-item justify-content-center text-center">
        <Col>
          <CardDeck>
            <Card style={{ background: '#f1f1f2' }} className="remove-border">
              <Card.Img
                variant="top"
                src={Excellence}
                style={{ width: '40%', height: '40%' }}
                className="mx-auto mt-5"
              />
              <Card.Body className="px-0">
                <Card.Title
                  className="font-weight-bold my-auto"
                  style={{ fontSize: '24px' }}>
                  Excellence with humility
                </Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ background: '#f1f1f2' }} className="remove-border">
              <Card.Img
                variant="top"
                src={Collaboration}
                style={{ width: '40%', height: '40%' }}
                className="mx-auto mt-5"
              />
              <Card.Body>
                <Card.Title
                  className="font-weight-bold"
                  style={{ fontSize: '24px' }}>
                  Collaborative Mutual Transformation
                </Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ background: '#f1f1f2' }} className="remove-border">
              <Card.Img
                variant="top"
                src={ConstitutionalValues}
                style={{ width: '40%', height: '40%' }}
                className="mx-auto mt-5"
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
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
