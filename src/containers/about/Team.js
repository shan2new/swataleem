import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Ananya from '../../Images/Display/About_Images/AnanyaTiwari.jpg'
import Vaibhav from '../../Images/Display/About_Images/Vaibhav.jpg'
import Arzoo from '../../Images/Display/About_Images/Arzoo.jpg'

import AnanyaMobile from '../../Images/Display/About_Images_Mobile/ananya.jpg'
import VaibhavMobile from '../../Images/Display/About_Images_Mobile/vaibhav.jpg'
import ArzooMobile from '../../Images/Display/About_Images_Mobile/arzoo.jpg'

const Team = () => (
  <div className="mt-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">our</span> team
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card className="remove-border">
              <Card.Img
                variant="top"
                className="d-none d-md-block"
                src={Ananya}
              />
              <Card.Img
                variant="top"
                className="d-sm-none"
                src={AnanyaMobile}
              />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Ananya Tiwari
                </Card.Title>
                <Card.Subtitle className="mb-1">Co-Anchor</Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text className="fz-16">
                  Ananya studied Chemistry, Neuroscience and Liberal Arts before
                  switching to Education. She has been a teacher in a rural
                  schools, opened a school in a village, designed and
                  implemented and evaluated at-scale interventions. She is
                  driven by interdisciplinary educational approaches aimed to
                  reduce social inequalities. She is a regular swimmer and an
                  occasional runner.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="remove-border">
              <Card.Img
                variant="top"
                className="d-none d-md-block"
                src={Arzoo}
              />
              <Card.Img variant="top" className="d-sm-none" src={ArzooMobile} />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Arzoo Shakir
                </Card.Title>
                <Card.Subtitle className="mb-1">Program Lead</Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text className="fz-16">
                  Born and raised in Kolkata, Arzoo has her bachelor's degree in
                  Urdu.Through her volunteering experience at Play for Peace
                  since 2016, she has lived through the benefits and success of
                  cooperative games in building peace and resolving conflict in
                  communities, classrooms and organizations. She is a certified
                  Master Coach from Quest Alliance and has volunteered with
                  World Vision since 2012 as a life skill education facilitator
                  with individuals suffering from HIV AIDS. She has also worked
                  as a district project manager for an year with Project
                  Potential. She likes to travel and explore about having
                  communities beyond walls.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="remove-border">
              <Card.Img
                variant="top"
                className="d-none d-md-block"
                src={Vaibhav}
              />
              <Card.Img
                variant="top"
                className="d-sm-none"
                src={VaibhavMobile}
              />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Vaibhav Kumar
                </Card.Title>
                <Card.Subtitle className="mb-1">Co-Anchor</Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text className="fz-16">
                  A Mechanical Engineer by degree and a teacher at heart, he
                  believes that quality education to every child can bring
                  equality in society. Since 2013, he has worked as a Teacher,
                  Volunteer, Education Leader, Mentor to an after-school
                  program, Content developer and Designer of teacher
                  professional development program. He believes in finding
                  answers internally and draws inspiration from running.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
