import React, { useState } from 'react'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Testimonials = props => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      author:
        '      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 2,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      author:
        '      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      picUrl: 'holder.js/200x200'
    },
    {
      id: 3,
      name: 'Ayushi Chaurasia',
      company: 'Bain Capital',
      author:
        '      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      picUrl: 'holder.js/200x200'
    }
  ])

  let displayTestimonials = () => {
    let theTestimonials = []

    testimonials.map((key, index) => {
      theTestimonials.push(
        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
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
        <Row style={{ marginBottom: '40px' }} />
      </Container>
    </div>
  )
}

export default Testimonials
