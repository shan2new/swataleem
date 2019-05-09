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
    <Container className="h-100">
      <Row className="pb-2">
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">our</span> resources
          </div>
        </Col>
      </Row>
      <Row className={'pb-4'}>
        <Col className="pt-2">
          <p>
            With the philosophy that knowledge should be shared and open for
            all, please feel free to use the reousrces here. All we expect in
            return from you is to give credit, where it's due and share with us
            any feedback on the materal.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
