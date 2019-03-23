import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EventPhotos = () => {
  const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
    let responsive = {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 4 }
    }
    return (
      <AliceCarousel
        mouseDragEnabled
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={2000}
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}>
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/98px300?auto=yes"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </AliceCarousel>
    )
  }

  return (
    <div class="pb-5">
      <Container>
        <Row>
          <Col>
            <p class="title-header">
              <span class="title-header-initial">#</span>SwaTaleem
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>{Gallery()}</Container>
    </div>
  )
}

export default EventPhotos
