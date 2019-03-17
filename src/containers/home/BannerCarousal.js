import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstSlide from '../../Images/FirstSlide.jpg'
import SecondSlide from '../../Images/SecondSlide.jpg'
import ThirdSlide from '../../Images/ThirdSlide.jpg'

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
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="holder.js/100px514?theme=sky&text=."
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="holder.js/100px514?theme=vine&text=."
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="holder.js/100px514?theme=industrial&text=."
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3> Awake, Arise and Educate.</h3>
          <h2>Smash traditions, liberate. </h2>
          <p>Savitri Bai Phule</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="holder.js/100px514?theme=social&text=."
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default BannerCarousal
