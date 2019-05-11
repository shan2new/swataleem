import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ResourcesBanner from '../../Images/Display/ResourcesBanner.jpg'

const Banner = () => (
  <div className="top-banner">
    <Carousel
      fade={true}
      controls={false}
      slide={true}
      wrap={true}
      interval={1500}
      indicators={false}>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Happy to share our</h2>
          <h2 class="font-weight-bold adjust-line-height">resources</h2>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ResourcesBanner}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner
