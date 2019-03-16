import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstSlide from '../../Images/FirstSlide.jpg'
import SecondSlide from '../../Images/SecondSlide.jpg'
import ThirdSlide from '../../Images/ThirdSlide.jpg'

const BannerCarousal = props => (
  <div>
    <Carousel fade="true">
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={FirstSlide} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
      </Carousel.Item>
      <img className="d-block w-100" src={SecondSlide} alt="Third slide" />
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default BannerCarousal
