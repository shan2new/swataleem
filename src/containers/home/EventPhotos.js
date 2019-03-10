import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const EventPhotos = props => {
  const Gallery = () => {
    let responsive = {
      0: { items: 1 },
      1024: { items: 4 }
    }

    let stagePadding = {
      paddingLeft: '5px',
      paddingRight: '0px'
    }

    const handleOnDragStart = e => e.preventDefault()
    return (
      <AliceCarousel
        mouseDragEnabled
        responsive={responsive}
        stagePadding={stagePadding}
        buttonsDisabled={true}>
        <img
          src="holder.js/300x300"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/300x300"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/300x300"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/300x300"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="holder.js/300x300"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
      </AliceCarousel>
    )
  }

  return <div className="mt-5">{Gallery()}</div>
}

export default EventPhotos
