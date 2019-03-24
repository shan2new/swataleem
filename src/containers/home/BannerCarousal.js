import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BannerImage from '../../Images/Display/LandingPageBanner.jpg'

const BannerCarousal = props => (
  <div>
    <Carousel
      fade={true}
      controls={false}
      slide={true}
      wrap={true}
      interval={1500}>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Awake, Arise and Educate.</h2>
          <h2 class="font-weight-bold adjust-line-height">
            Smash traditions, liberate.
          </h2>
          <p class="pt-3">Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={BannerImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Awake, Arise and Educate.</h2>
          <h2 class="font-weight-bold adjust-line-height">
            Smash traditions, liberate.
          </h2>
          <p class="pt-3">Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={BannerImage} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Awake, Arise and Educate.</h2>
          <h2 class="font-weight-bold adjust-line-height">
            Smash traditions, liberate.
          </h2>
          <p class="pt-3">Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={BannerImage} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h2 class="font-weight-light"> Awake, Arise and Educate.</h2>
          <h2 class="font-weight-bold adjust-line-height">
            Smash traditions, liberate.
          </h2>
          <p class="pt-3">Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={BannerImage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default BannerCarousal
