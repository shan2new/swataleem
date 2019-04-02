import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import LearnAndDo from '../../Images/icons/Basics/LearnAndDo.svg'
import ChallengeYourself from '../../Images/icons/Basics/ChallengeYourself.svg'
import AutonomyAndGrowth from '../../Images/icons/Basics/AutonomyAndGrowth.svg'

const Pitch = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">let's</span> work together
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="remove-border">
            <Card.Img
              variant="top"
              src={LearnAndDo}
              style={{ width: '35%', height: '35%' }}
            />
            <Card.Body>
              <Card.Title>Co-Create</Card.Title>
              <Card.Text>
                Come, learn and co-create beautiful things with the children,
                team members and teachers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img
              variant="top"
              src={ChallengeYourself}
              style={{ width: '35%', height: '35%' }}
            />
            <Card.Body>
              <Card.Title>Mutually transform</Card.Title>
              <Card.Text>
                Transform self and society through your work.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="remove-border">
            <Card.Img
              variant="top"
              src={AutonomyAndGrowth}
              style={{ width: '35%', height: '35%' }}
            />
            <Card.Body>
              <Card.Title>Autonomy and Growth</Card.Title>
              <Card.Text>
                We are a young team so join us and play an important role in
                shaping SwaTaleem.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Pitch
