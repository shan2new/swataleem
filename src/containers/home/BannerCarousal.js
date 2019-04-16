import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BannerImage from '../../Images/Display/LandingPageBanner.jpg'

const BannerCarousal = props => (
  <div className="top-banner">
    <Carousel
      fade={true}
      controls={false}
      slide={true}
      wrap={true}
      indicators={false}
      interval={1500}>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Awake, Arise and Educate.</h2>
          <h2 class="font-weight-bold">Smash traditions, liberate.</h2>
          <p class="pt-3" style={{ color: '#ffffff' }}>
            Savitri Bai Phule
          </p>
        </Carousel.Caption>
        <img className="d-block w-100" src={BannerImage} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default BannerCarousal
