import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import WorkPagePic from '../../Images/Display/workPagePic.jpg'

const Team = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <img src={WorkPagePic} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
