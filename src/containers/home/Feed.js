import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Feed = () => {
  const [posts] = useState([
    {
      id: 1,
      area: 'Education',
      title: 'Creating holistic modules in Panipat Haryana',
      author: 'Vaibhav Kumar',
      date: '18 Feb 2019',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 2,
      area: 'Education',
      title: 'Creating holistic modules in Panipat Haryana',
      author: 'Vaibhav Kumar',
      date: '18 Feb 2019',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 3,
      area: 'Education',
      title: 'Creating holistic modules in Panipat Haryana',
      author: 'Vaibhav Kumar',
      date: '18 Feb 2019',
      picUrl: 'holder.js/200x200'
    }
  ])

  let displayPosts = () => {
    var display = []
    posts.map(() => {
      display.push(
        <Col xs={12} md={4}>
          <Card.Img
            variant="top"
            src="holder.js/100px300?auto=yes"
            style={{ borderRadius: 'none' }}
          />
          <Card style={{ borderRadius: '0px' }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted text-uppercase theme-font">
                {' '}
                Education{' '}
              </Card.Subtitle>
              <Card.Title style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                Creating holistic modules in Panipat Haryana
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
        <Row>
          <Col>
            <div class="title-header">
              <span class="title-header-initial">our</span> stories of change
            </div>
          </Col>
        </Row>
        <Row>{displayPosts()}</Row>
      </Container>
    </div>
  )
}

export default Feed
