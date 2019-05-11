import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EventPhotos = () => {
  const Gallery = () => {
    const [pics, setPics] = useState([
      'holder.js/98px300?auto=yes',
      'holder.js/98px300?auto=yes',
      'holder.js/98px300?auto=yes',
      'holder.js/98px300?auto=yes'
    ])

    const [requestSent, setRequestSent] = useState(false)

    if (!requestSent) {
      window.localStorage.setItem('requestSent', 1)
      fetch(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=10638813309.4f1b685.41761218e902489fbd3841b10bfe2ec5&count=20'
      )
        .then(data => {
          return data.json()
        })
        .then(images => {
          console.log(images)
          let imagesList = images.data
          let imageUrlsList = []

          if (imagesList) {
            imagesList.forEach(imageObj => {
              if (!imageObj.videos) {
                imageUrlsList.push(imageObj.images.low_resolution.url)
              }
            })
            setPics(imageUrlsList)
          }

          setRequestSent(true)
        })
    }

    const displayImages = () => {
      let imagesToDisplay = []
      pics.forEach(picUrl => {
        imagesToDisplay.push(
          <img
            src={picUrl}
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            style={{ width: '272px !important', height: '300px' }}
          />
        )
      })

      return imagesToDisplay
    }

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
        {displayImages()}
      </AliceCarousel>
    )
  }

  return (
    <div class="pb-5">
      <Container>
        <Row>
          <Col>
            <p
              class="title-header"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/swataleem_ngo/',
                  '_blank'
                )
              }>
              <span class="title-header-initial">#</span>SwaTaleem
            </p>
          </Col>
        </Row>
      </Container>
      <Container>{Gallery()}</Container>
    </div>
  )
}

export default EventPhotos
