import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PartnerImage1 from '../../Images/Display/Donation_Partners/1.png'
import PartnerImage2 from '../../Images/Display/Donation_Partners/2.png'
import PartnerImage3 from '../../Images/Display/Donation_Partners/3.png'
import PartnerImage4 from '../../Images/Display/Donation_Partners/4.jpg'

const Values = () => (
  <div className="mt-5 mb-3">
    <Container>
      <Row className="pb-2 pt-5">
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">forever</span> grateful
          </div>
        </Col>
      </Row>
      <Row className={'pb-5'}>
        <Col sm={12} md={6} className="pt-2">
          <p>
            We are deeply grateful to our partners for supporting us in our
            endeavour.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={3}>
          <img
            src={PartnerImage1}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src={PartnerImage2}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src={PartnerImage3}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src={PartnerImage4}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
