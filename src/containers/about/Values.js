import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ConstitutionalValues from '../../Images/Display/Careers_Values/Value1.svg'
import Excellence from '../../Images/Display/Careers_Values/Value2.svg'
import Collaboration from '../../Images/Display/Careers_Values/Value3.svg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Values = () => {
  const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
    let responsive = {
      0: { items: 1 },
      1024: { items: 3 }
    }
    return (
      <AliceCarousel
        mouseDragEnabled
        responsive={responsive}
        autoPlay={false}
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}>
        <div
          style={{ paddingLeft: '5px', paddingRight: '5px' }}
          onDragStart={handleOnDragStart}>
          <img
            src={ConstitutionalValues}
            style={{ width: '100%', maxWidth: '100%' }}
          />
        </div>
        <div
          style={{ paddingLeft: '5px', paddingRight: '5px' }}
          onDragStart={handleOnDragStart}>
          <img
            src={Excellence}
            style={{ width: '100%', maxWidth: '100% !important' }}
          />
        </div>
        <div
          style={{ paddingLeft: '5px', paddingRight: '5px' }}
          onDragStart={handleOnDragStart}>
          <img
            src={Collaboration}
            style={{ width: '100%', maxWidth: '100% !important' }}
          />
        </div>
      </AliceCarousel>
    )
  }

  return (
    <div class="mt-5 careers-pitch">
      <Container>
        <Row>
          <Col>
            <p class="title-header">
              <span class="title-header-initial">let's</span> work together
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>{Gallery()}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Values
