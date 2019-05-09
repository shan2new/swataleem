import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import storyImage1 from '../../Images/Display/storyImage1.jpg'
import storyImage3 from '../../Images/Display/storyImage3.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Feed = () => {
  const Gallery = () => {
    const [posts] = useState([
      {
        id: 1,
        area: 'Education',
        title: 'Establishment of Janmanch in KGBV Jalmana, Panipat',
        author: 'Vaibhav Kumar',
        date: '18 Feb 2019',
        picUrl: storyImage1
      },
      {
        id: 2,
        area: 'Child Psychology',
        title: 'First Science Exhibition at KGBV Jalmana, Panipat',
        author: 'Vaibhav Kumar',
        date: '18 Feb 2019',
        picUrl: storyImage1
      },
      {
        id: 3,
        area: 'Policy',
        title: 'Creating holistic modules in Panipat Haryana',
        author: 'Vaibhav Kumar',
        date: '18 Feb 2019',
        picUrl: storyImage3
      }
    ])

    let displayPosts = () => {
      const goToBlog = () => {
        window.open('https://www.swataleem.org', '_blank')
      }
      const handleOnDragStart = e => e.preventDefault()
      var display = []
      posts.map(post => {
        display.push(
          <div
            style={{ paddingLeft: '5px', paddingRight: '5px' }}
            className="theme-border-hover"
            onClick={goToBlog}>
            <Card.Img
              variant="top"
              src={post.picUrl}
              style={{
                borderRadius: 'none',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <Card style={{ borderRadius: '0px' }}>
              <Card.Body className="padding-25">
                <Card.Subtitle className="mb-2 text-muted text-uppercase theme-font fz-18">
                  {post.area}
                </Card.Subtitle>
                <Card.Title style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                  {post.title}
                </Card.Title>
                <Card.Text className="fz-16">
                  {post.author + ', ' + post.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })

      return display
    }

    const handleOnDragStart = e => e.preventDefault()
    let responsive = {
      0: { items: 1 },
      1024: { items: 3 }
    }
    return (
      <AliceCarousel
        mouseDragEnabled
        responsive={responsive}
        autoPlay={false}
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}>
        {displayPosts()}
      </AliceCarousel>
    )
  }

  return (
    <div class="mt-5 home-feed">
      <Container>
        <Row>
          <Col>
            <p class="title-header">
              <span class="title-header-initial">our</span> stories of change
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>{Gallery()}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feed
