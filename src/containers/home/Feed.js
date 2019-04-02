import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import storyImage1 from '../../Images/Display/storyImage1.jpg'
import storyImage3 from '../../Images/Display/storyImage3.jpg'

const Feed = () => {
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
    var display = []
    posts.map(post => {
      display.push(
        <Col xs={12} md={4} className="mb-20px pl-1 pr-1">
          <Card.Img
            variant="top"
            src={post.picUrl}
            style={{ borderRadius: 'none', height: '300px' }}
          />
          <Card style={{ borderRadius: '0px' }} className="padding-25">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted text-uppercase theme-font">
                Education
              </Card.Subtitle>
              <Card.Title style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                {post.title}
              </Card.Title>
              <Card.Text className="fz-16">
                Vaibhav Kumar, 18 Feb 2019
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })

    return display
  }

  return (
    <div className="mt-5">
      <Container>
        <Row className="mb-3">
          <Col>
            <div class="title-header">
              <span class="title-header-initial">our</span> stories of change
            </div>
          </Col>
        </Row>
        <Row>{displayPosts()}</Row>
        <Row className="pb-2 pt-2 mt-2">
          <Col xs={12}>
            <Button variant="outline-danger" className="left-centre-aligner">
              Read All
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feed
