import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Pitch = props => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">why</span> we care
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Image src="https://www.filemakerprogurus.com/wp-content/uploads/2015/12/Glyph.svg" />
        </Col>
        <Col>
          <p>
            It’s a harsh reality that quality education is still a privilege for
            a major chunk of our society. The chance of getting it reduces
            manifolds with each layer of existing oppressive structure be it
            through gender, caste or economy.
          </p>
          <ul>
            <li>
              Drop out rate at secondary level - 17.06% for SCs - 19.36%, for
              STs - 24.68%
            </li>
            <li>Out of School children - 4.5 crore</li>
            <li>
              In rural India, the latest edition of the "Annual State of
              Education report" (ASER) shows that only 47.8% of class V students
              can read a class II-level text and only 43% of class VIII students
              can do class V-level arithmetic.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">what</span> we do
          </div>
        </Col>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">how</span> we work
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Pitch
