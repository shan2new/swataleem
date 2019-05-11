import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import DonateBanner from '../../Images/Display/DonateBanner.jpg'

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
          <h2 class="font-weight-light"> Every one deserves</h2>
          <h2 class="font-weight-bold adjust-line-height">
            the right to education.
          </h2>
          <p class="pt-3" style={{ color: 'inherit' }}>
            Donate to be a part of the change.
          </p>
        </Carousel.Caption>
        <img className="d-block w-100" src={DonateBanner} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner
