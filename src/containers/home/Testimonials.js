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
      name: 'Daya Kori',
      company: 'Mentor',
      description:
        'An extraordinary idea along with a passionate and determined team  – the result is this fine journey of SwaTaleem! I am honoured to be associated with this organization and believe in the  impact it will bring to the area of school education, specially girl education. The KGBV schools are a great place to begin this journey. Creating a support system for these schools will go a long way in building  self-sustaining communities that can then thrive on their own.',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 2,
      name: 'Prof. Mona Yadav',
      company: 'Mentor',
      description:
        'The girls studying in KGBV have a lot of potential and it’s heart-warming to see SwaTaleem, led by a young and determined team working together on the learning environment of these schools. The team have a good mix of intent, experience and enthusiasm. My best wishes to the team SwaTaleem',
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
                  className="pb-2 pt-4"
                  style={{ borderBottom: '2px solid #dee2e6' }}>
                  <Col xs={6} md={2} className="testimonial-image">
                    <img
                      src="holder.js/100px120"
                      alt="Generic placeholder"
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col
                    md={2}
                    xs={6}
                    style={{ fontSize: '20px', paddingRight: '0px' }}>
                    {key.name} <br /> {key.company}
                    <div
                      style={{
                        width: '40px',
                        height: '0px',
                        border: '1.5px solid #ec3766',
                        marginTop: '10px'
                      }}
                    />
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
    <div className="mt-5 mb-5">
      <Container>
        <Row style={{ marginBottom: '15px' }}>
          <Col>
            <div class="title-header">
              <span class="title-header-initial">supporters</span> speak
            </div>
          </Col>
        </Row>
        {displayTestimonials()}
        {/* <Row className="pb-2 pt-2 mt-2">
          <Col xs={12}>
            <Button variant="outline-danger" className="left-centre-aligner">
              Read All
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '40px' }} /> */}
      </Container>
    </div>
  )
}

export default Testimonials
