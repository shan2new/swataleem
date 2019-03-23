import React, { useState } from 'react'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Testimonials = props => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      description:
        'Anaya was a student when he started his Facebook page Photography. His declining interest in his curriculum led him to follow his passion. The idea of capturing every moment was always at the back of his mind, and he finally quit his college to follow his instincts.',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 2,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      description:
        'Anaya was a student when he started his Facebook page Photography. His declining interest in his curriculum led him to follow his passion. The idea of capturing every moment was always at the back of his mind, and he finally quit his college to follow his instincts.',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 3,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      description:
        'Anaya was a student when he started his Facebook page Photography. His declining interest in his curriculum led him to follow his passion. The idea of capturing every moment was always at the back of his mind, and he finally quit his college to follow his instincts.',
      picUrl: 'holder.js/200x200'
    }
  ])

  let displayTestimonials = () => {
    let theTestimonials = []

    testimonials.map((key, index) => {
      theTestimonials.push(
        <Row key={key.id}>
          <Col>
            <Media>
              <Media.Body>
                <Row
                  className="pb-2 pt-2"
                  style={{ borderBottom: '1px solid #f8f9fa' }}>
                  <Col md={2}>
                    <img src="holder.js/160x120" alt="Generic placeholder" />
                  </Col>
                  <Col md={2} style={{ fontSize: '20px', paddingRight: '0px' }}>
                    {key.name} <br /> {key.company}
                  </Col>
                  <Col>
                    <p>{key.description}</p>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      )
    })

    return theTestimonials
  }

  return (
    <div className="mt-5">
      <Container>
        <Row style={{ marginBottom: '15px' }}>
          <Col>
            <div class="title-header">
              <span class="title-header-initial">people</span> are saying
            </div>
          </Col>
        </Row>
        {displayTestimonials()}
        <Row className="pb-2 pt-2 mt-2">
          <Col xs={12}>
            <Button variant="outline-danger" className="left-centre-aligner">
              Read All
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '40px' }} />
      </Container>
    </div>
  )
}

export default Testimonials
