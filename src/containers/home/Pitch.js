import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import Infographic1 from '../../Images/Display/Infographic/1.jpg'
import Infographic2 from '../../Images/Display/Infographic/2.jpg'
import Infographic3 from '../../Images/Display/Infographic/3.jpg'
import Infographic4 from '../../Images/Display/Infographic/4.jpg'
import WhatWeDo from '../../Images/icons/Basics/WhatWeDo.svg'
import HowWeWork from '../../Images/icons/Basics/HowWeWork.svg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Card from 'react-bootstrap/Card'

const Pitch = props => {
  const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
    let responsive = {
      0: { items: 1 },
      1024: { items: 4 }
    }
    return (
      <AliceCarousel
        mouseDragEnabled
        responsive={responsive}
        autoPlay={false}
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}>
        {/* <Card className="remove-border" onDragStart={handleOnDragStart}>
          <Card.Img
            variant="top"
            src={Infographic1}
            style={{ width: '100%', height: '35%' }}
          />
          <Card.Body>
            <Card.Text>
              In India, 4.5 Crores children are out of school
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="remove-border" onDragStart={handleOnDragStart}>
          <Card.Img
            variant="top"
            src={Infographic2}
            style={{ width: '100%', height: '35%' }}
          />
          <Card.Body>
            <Card.Text>
              In India, 32% of the girls get unenrolled by the age of 18 years
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="remove-border" onDragStart={handleOnDragStart}>
          <Card.Img
            variant="top"
            src={Infographic3}
            style={{ width: '100%', height: '35%' }}
          />
          <Card.Body>
            <Card.Text>
              52.2% of grade 5 children in rural India can’t read grade 2 text
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="remove-border" onDragStart={handleOnDragStart}>
          <Card.Img
            variant="top"
            src={Infographic4}
            style={{ width: '100%', height: '35%' }}
          />
          <Card.Body>
            <Card.Text>
              57% of grade 8 children in rural India can’t do arithmetic of
              grade 5
            </Card.Text>
          </Card.Body>
        </Card> */}
        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Card className="remove-border" onDragStart={handleOnDragStart}>
            <Card.Img
              variant="top"
              src={Infographic1}
              style={{ width: '100%', height: '35%' }}
            />
            <Card.Body>
              <Card.Text>
                In India, 4.5 Crores children are out of school
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Card className="remove-border" onDragStart={handleOnDragStart}>
            <Card.Img
              variant="top"
              src={Infographic2}
              style={{ width: '100%', height: '35%' }}
            />
            <Card.Body>
              <Card.Text>
                In India, 32% of the girls get unenrolled by the age of 18 years
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Card className="remove-border" onDragStart={handleOnDragStart}>
            <Card.Img
              variant="top"
              src={Infographic3}
              style={{ width: '100%', height: '35%' }}
            />
            <Card.Body>
              <Card.Text>
                52.2% of grade 5 children in rural India can’t read grade 2 text
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Card className="remove-border" onDragStart={handleOnDragStart}>
            <Card.Img
              variant="top"
              src={Infographic4}
              style={{ width: '100%', height: '35%' }}
            />
            <Card.Body>
              <Card.Text>
                57% of grade 8 children in rural India can’t do arithmetic of
                grade 5
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </AliceCarousel>
    )
  }
  return (
    <div className="mt-5 home-pitch">
      <Container>
        <Row className={'pb-3'}>
          <Col sm={12} md={6}>
            <div class="title-header">
              <span class="title-header-initial">why</span> we care
            </div>
          </Col>
        </Row>
        <Row className={'pb-5'}>
          <Col sm={12} className="pt-2">
            <p>
              It’s a harsh reality that quality education is still a privilege
              for a major chunk of our society. The chance of getting it reduces
              manifolds with each layer of existing oppressive structure be it
              through gender, caste or economy. As per CASEL, 92% of surveyed
              executive said skills such as problem solving and communication
              are equally or more important skills than technical skills.
            </p>
          </Col>
          <Col sm={12}>{Gallery()}</Col>
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
                      Facilitating Cross - Functional groups of teachers,
                      government officials and students working together to
                      solve local problems with accountability.
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
                      Creating in-school platforms and Cluster platforms aimed
                      at solving school level problems driven by the community.
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
}

export default Pitch
