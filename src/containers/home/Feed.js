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

// const Feed = () => {
//   const handleOnDragStart = e => e.preventDefault()
//   const [posts] = useState([
//     {
//       id: 1,
//       area: 'Education',
//       title: 'Establishment of Janmanch in KGBV Jalmana, Panipat',
//       author: 'Vaibhav Kumar',
//       date: '18 Feb 2019',
//       picUrl: storyImage1
//     },
//     {
//       id: 2,
//       area: 'Child Psychology',
//       title: 'First Science Exhibition at KGBV Jalmana, Panipat',
//       author: 'Vaibhav Kumar',
//       date: '18 Feb 2019',
//       picUrl: storyImage1
//     },
//     {
//       id: 3,
//       area: 'Policy',
//       title: 'Creating holistic modules in Panipat Haryana',
//       author: 'Vaibhav Kumar',
//       date: '18 Feb 2019',
//       picUrl: storyImage3
//     }
//   ])

//   let displayPosts = () => {
//     const handleOnDragStart = e => e.preventDefault()
//     var display = []
//     // posts.map(post => {
//     //   display.push(
//     //     <div class="w-100">
//     //       <Card.Img
//     //         variant="top"
//     //         src={post.picUrl}
//     //         style={{
//     //           borderRadius: 'none',
//     //           height: '300px',
//     //           objectFit: 'cover'
//     //         }}
//     //       />
//     //       <Card style={{ borderRadius: '0px' }} className="padding-25">
//     //         <Card.Body>
//     //           <Card.Subtitle className="mb-2 text-muted text-uppercase theme-font">
//     //             Education
//     //           </Card.Subtitle>
//     //           <Card.Title style={{ fontWeight: '700', fontSize: '1.1rem' }}>
//     //             {post.title}
//     //           </Card.Title>
//     //           <Card.Text className="fz-16">
//     //             Vaibhav Kumar, 18 Feb 2019
//     //           </Card.Text>
//     //         </Card.Body>
//     //       </Card>
//     //     </div>
//     //   )
//     // })

//     posts.map(post => {
//       display.push(
//         <Card class="remove-border" style={{ background: '#f1f1f2' }}>
//           <Card.Body className="padding-25">
//             <Card.Title className="h5 font-weight-bold lh-15">
//               Field Researcher
//             </Card.Title>
//             <hr class="hr-underliner" align="left" />
//             <Card.Text className="pt-3">
//               We are working with ‘Kasturba Gandhi Balika Vidyalayas’ of Panipat
//               and Mewat in Haryana to create thriving communities within
//               schools.
//             </Card.Text>
//             <Button variant="outline-danger" style={{ width: '100%' }}>
//               Know More
//             </Button>
//           </Card.Body>
//         </Card>
//       )
//     })

//     return display
//   }

//   return (
//     <div className="mt-5 home-feed">
//       <Container>
//         <Row className="mb-3">
//           <Col>
//             <div class="title-header">
//               <span class="title-header-initial">our</span> stories of change
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <AliceCarousel
//               mouseDragEnabled
//               responsive={{
//                 0: { items: 1 },
//                 1024: { items: 3 }
//               }}
//               autoPlay={false}
//               fadeOutAnimation={true}
//               dotsDisabled={true}
//               buttonsDisabled={true}>
//               {displayPosts()}
//             </AliceCarousel>
//           </Col>
//         </Row>
//         <Row className="pb-2 pt-2 mt-2">
//           <Col xs={12}>
//             <Button variant="outline-danger" className="left-centre-aligner">
//               Read All
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

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
      const handleOnDragStart = e => e.preventDefault()
      var display = []
      posts.map(post => {
        display.push(
          <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
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
                <Card.Subtitle className="mb-2 text-muted text-uppercase theme-font">
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
