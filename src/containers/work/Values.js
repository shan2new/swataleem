import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Values = () => (
  <div>
    <Container className="h-100">
      <Row className="pb-2 pt-3">
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">project</span> KGBV
          </div>
        </Col>
      </Row>
      <Row className={'pb-4'}>
        <Col className="pt-2">
          <p>
            With the intent of making KGBVs a thriving community, we are working
            in 6 KGBVs in Haryana. 1 KGBV in Panipat and 5 in Mewat.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Values
