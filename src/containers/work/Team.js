import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import WorkPagePic from '../../Images/Display/workPagePic.jpg'
import WorkPagePicMobile from '../../Images/Display/WorkImage_Mobile.png'

import KGBVIntro from '../../Images/Display/Work_Pics/KGBV.png'
import Problem from '../../Images/Display/Work_Pics/Problem.png'
import Solution1 from '../../Images/Display/Work_Pics/Solution1.png'
import Solution2 from '../../Images/Display/Work_Pics/Solution2.png'

// const Team = () => (
//   <div className="mb-3">
//     <Container>
//       <Row>
//         <Col
//           style={{ paddingLeft: '100px', paddingRight: '100px' }}
//           className="d-none d-md-block">
//           <img src={WorkPagePic} />
//         </Col>
//         <Col className="d-sm-none">
//           <img src={WorkPagePicMobile} style={{ maxWidth: '100%' }} />
//         </Col>
//       </Row>
//     </Container>
//   </div>
// )

const Team = () => (
  <div className="mb-3">
    <Container>
      <Row className={'pb-1'}>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">context</span> of KGBVs
          </div>
        </Col>
      </Row>
      <Row className={'pb-2'}>
        <Col sm={12} className="pt-2">
          <p>
            It’s important to understand the ecosystem of KGBV, the picture
            below depicts the same.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img style={{ maxWidth: '100%' }} src={KGBVIntro} />
        </Col>
      </Row>
      <Row className={'pb-1'}>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">challenges</span> of KGBV
          </div>
        </Col>
      </Row>
      <Row className={'pb-2'}>
        <Col sm={12} className="pt-2">
          <p>
            The KGBVs, though started with a vision of providing quality
            education to the minority girls but currently face challenges on
            multiple levels as depicted below:
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img style={{ maxWidth: '100%' }} src={Problem} />
        </Col>
      </Row>
      <Row className={'pb-1'}>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">solution</span> 1
          </div>
        </Col>
      </Row>
      <Row className={'pb-2'}>
        <Col sm={12} className="pt-2">
          <p>
            These challenges can be solved by working with teachers of the
            school and support them to develop professionally. This should be
            accompanied with a focus on socio-emotional skills and cognitive
            skills of girls studying in schools.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img style={{ maxWidth: '100%' }} src={Solution1} />
        </Col>
      </Row>
      <Row className={'pb-1'}>
        <Col sm={12} md={6}>
          <div class="title-header">
            <span class="title-header-initial">solution</span> 2
          </div>
        </Col>
      </Row>
      <Row className={'pb-5'}>
        <Col sm={12} className="pt-2">
          <p>
            No sustainable change can take place in isolation and hence it
            becomes important to ensure officials, teachers and girls studying
            in the school work coherently for a common goal.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img style={{ maxWidth: '100%' }} src={Solution2} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
