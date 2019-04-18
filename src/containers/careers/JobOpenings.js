import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// const JobOpenings = () => (
//   <div className="mt-5">
//     <Container>
//       <Row>
//         <Col>
//           <div class="title-header">
//             <span class="title-header-initial">we are</span> looking for
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={12} sm={4} className="pb-2">
//           <Card class="remove-border" style={{ background: '#f1f1f2' }}>
//             <Card.Body className="padding-25">
//               <Card.Title className="h5 font-weight-bold lh-15">
//                 Field Researcher
//               </Card.Title>
//               <hr class="hr-underliner" align="left" />
//               <Card.Text className="pt-3">
//                 We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
//                 Panipat and Mewat in Haryana to create thriving communities
//                 within schools.
//               </Card.Text>
//               <Button variant="outline-danger" style={{ width: '100%' }}>
//                 Know More
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} sm={4} className="pb-2">
//           <Card class="remove-border" style={{ background: '#f1f1f2' }}>
//             <Card.Body className="padding-25">
//               <Card.Title className="h5 font-weight-bold lh-15">
//                 Primary School Teacher
//               </Card.Title>
//               <hr class="hr-underliner" align="left" />
//               <Card.Text className="pt-3">
//                 We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
//                 Panipat and Mewat in Haryana to create thriving communities
//                 within schools.
//               </Card.Text>
//               <Button variant="outline-danger" style={{ width: '100%' }}>
//                 Know More
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} sm={4} className="pb-2">
//           <Card class="remove-border" style={{ background: '#f1f1f2' }}>
//             <Card.Body className="padding-25">
//               <Card.Title className="h5 font-weight-bold lh-15">
//                 Accountant
//               </Card.Title>
//               <hr class="hr-underliner" align="left" />
//               <Card.Text className="pt-3">
//                 We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of
//                 Panipat and Mewat in Haryana to create thriving communities
//                 within schools.
//               </Card.Text>
//               <Button variant="outline-danger" style={{ width: '100%' }}>
//                 Know More
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// )

const JobOpenings = () => {
  const Gallery = () => {
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
        <Card class="remove-border" style={{ background: '#f1f1f2' }}>
          <Card.Body className="padding-25">
            <Card.Title className="h5 font-weight-bold lh-15">
              Field Researcher
            </Card.Title>
            <hr class="hr-underliner" align="left" />
            <Card.Text className="pt-3">
              We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of Panipat
              and Mewat in Haryana to create thriving communities within
              schools.
            </Card.Text>
            <Button variant="outline-danger" style={{ width: '100%' }}>
              Know More
            </Button>
          </Card.Body>
        </Card>
        <Card class="remove-border" style={{ background: '#f1f1f2' }}>
          <Card.Body className="padding-25">
            <Card.Title className="h5 font-weight-bold lh-15">
              Primary School Teacher
            </Card.Title>
            <hr class="hr-underliner" align="left" />
            <Card.Text className="pt-3">
              We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of Panipat
              and Mewat in Haryana to create thriving communities within
              schools.
            </Card.Text>
            <Button variant="outline-danger" style={{ width: '100%' }}>
              Know More
            </Button>
          </Card.Body>
        </Card>
        <Card class="remove-border" style={{ background: '#f1f1f2' }}>
          <Card.Body className="padding-25">
            <Card.Title className="h5 font-weight-bold lh-15">
              Accountant
            </Card.Title>
            <hr class="hr-underliner" align="left" />
            <Card.Text className="pt-3">
              We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of Panipat
              and Mewat in Haryana to create thriving communities within
              schools.
            </Card.Text>
            <Button variant="outline-danger" style={{ width: '100%' }}>
              Know More
            </Button>
          </Card.Body>
        </Card>
      </AliceCarousel>
    )
  }

  return (
    <div class="mt-5 careers-pitch">
      <Container>
        <Row>
          <Col>
            <p class="title-header">
              <span class="title-header-initial">we are</span> looking for
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

export default JobOpenings
