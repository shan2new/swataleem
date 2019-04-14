import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import JoinBanner from '../../Images/Display/JoinBanner.jpg'

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
          <h2 class="font-weight-light"> Together</h2>
          <h2 class="font-weight-bold adjust-line-height">
            we can do great things.
          </h2>
          <p class="pt-3" style={{ color: 'inherit' }}>
            Mother Teresa
          </p>
        </Carousel.Caption>
        <img className="d-block w-100" src={JoinBanner} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner
