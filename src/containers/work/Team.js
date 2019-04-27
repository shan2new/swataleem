import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import WorkPagePic from '../../Images/Display/workPagePic.jpg'
import WorkPagePicMobile from '../../Images/Display/WorkImage_Mobile.png'

const Team = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col
          style={{ paddingLeft: '100px', paddingRight: '100px' }}
          className="d-none d-md-block">
          <img src={WorkPagePic} />
        </Col>
        <Col className="d-block d-xs-block d-sm-block">
          <img src={WorkPagePicMobile} style={{ maxWidth: '100%' }} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
