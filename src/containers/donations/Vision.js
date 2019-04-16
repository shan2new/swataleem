import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Vision = () => (
  <Container className="h-100">
    <Row className="pb-2 pt-5">
      <Col sm={12} md={6}>
        <div class="title-header">
          <span class="title-header-initial">every</span> drop counts
        </div>
      </Col>
    </Row>
    <Row className={'pb-4'}>
      <Col className="pt-2">
        <p>
          Everyone deserves the right to quality education. Do your bit to make
          it possible. Donate to be a partner in this movement. We have
          partnered with Mantra Social Services to create this platform and all
          your donation goes into the cause. You will also get 80G tax benefit
          for this contribution.
        </p>
      </Col>
    </Row>
    <Row className="pb-2 pt-2">
      <Col xs={12}>
        <Button
          variant="primary"
          className="theme-background remove-border fz-point-nine left-centre-aligner"
          style={{ width: '150px', height: '47px' }}
          type="submit">
          Subscribe
        </Button>
      </Col>
    </Row>
  </Container>
)

export default Vision
