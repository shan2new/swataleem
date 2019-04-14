import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AboutBanner from '../../Images/Display/AboutBanner.jpg'

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
          <h2 class="font-weight-light"> Every child has access to</h2>
          <h2 class="font-weight-bold adjust-line-height">
            learner-centric quality education
          </h2>
          <p class="pt-3" style={{ color: '#ffffff' }}>
            Our Education
          </p>
        </Carousel.Caption>
        <img className="d-block w-100" src={AboutBanner} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner
