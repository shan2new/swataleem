import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Feed = () => {
  const [posts, setPosts] = useState([
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
    posts.map((item, key) => {
      display.push(
        <Col>
          <Card.Img variant="top" src="holder.js/336x280" />
          <Card style={{ width: '21rem' }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {' '}
                Education{' '}
              </Card.Subtitle>
              <Card.Title>
                Creating holistic modules in Panipat Haryana
              </Card.Title>
              <Card.Text>Vaibhav Kumar</Card.Text>
              <Card.Text>01/01/2019</Card.Text>
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
          <Col>our stories of change</Col>
        </Row>
        <Row>{displayPosts()}</Row>
      </Container>
    </div>
  )
}

export default Feed
