import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import WhatWeDo from '../../Images/icons/Basics/WhatWeDo.svg'
import HowWeWork from '../../Images/icons/Basics/HowWeWork.svg'

const Pitch = props => (
  <div className="mt-5">
    <Container>
      <Row className={'pb-3'}>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">why</span> we care
          </div>
        </Col>
      </Row>
      <Row className={'pb-5'}>
        <Col sm={12} md={6}>
          <Image src="holder.js/98px380?auto=yes&text=infographic&size=20&font=Muli" />
        </Col>
        <Col sm={12} md={6} className="pt-2">
          <p>
            It’s a harsh reality that quality education is still a privilege for
            a major chunk of our society. The chance of getting it reduces
            manifolds with each layer of existing oppressive structure be it
            through gender, caste or economy.
          </p>
          <ul class="d-none d-md-block">
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
      <Row className={'pb-2'}>
        <Col xs={12} md={6}>
          <Row>
            <Col>
              <div class="title-header">
                <span class="title-header-initial">what</span> we do
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Media>
                <img
                  className="mr-3"
                  height={100}
                  width={100}
                  src={HowWeWork}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <p>
                    We aim to facilitate the community-driven transformation by
                    bringing holistic changes in education.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col>
              <div class="title-header">
                <span class="title-header-initial">how</span> we work
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Media>
                <img
                  className="mr-3"
                  height={100}
                  width={100}
                  src={WhatWeDo}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <p>
                    We intend to do it by facilitating dialogues on improving
                    education between different stakeholders across levels.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Pitch
