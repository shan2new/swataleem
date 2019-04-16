import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Mentor = () => (
  <div className="mt-5 mb-5">
    <Container>
      <Row>
        <Col>
          <div class="title-header">
            <span class="title-header-initial">our</span> mentors
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card className="remove-border">
              <Card.Img variant="top" src="holder.js/100px400" />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Ms. Daya Kori
                </Card.Title>
                <Card.Subtitle className="mb-1">
                  Managing Director - Software R&D Center, Evive India
                </Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text>
                  Daya has around 30 Years of experience in Corporate space with
                  Accenture, Customer Asset, Evive Motorola and Zyme. She has an
                  immense experience in organization building and has been a
                  constant support for SwaTaleem.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="remove-border">
              <Card.Img variant="top" src="holder.js/100px400" />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Prof. Mona Yadav
                </Card.Title>
                <Card.Subtitle className="mb-1">
                  Department of Gender Studies, NCERT
                </Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text>
                  Prof. Mona Yadav has an experience of over 2 decades on Gender
                  and Girl Education. She has conducted researches and Teacher
                  Professional Development pertaining to KGBVs across 6 states
                  in India. She was instrumental in preparing Bridge course for
                  KGBVs and was also a part of National Focus Group Position
                  Paper on “Gender Issues in Education” (2006). She has been
                  supporting us through her academic expertise.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="remove-border">
              <Card.Img variant="top" src="holder.js/100px400" />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Mr. Ravi Gulati
                </Card.Title>
                <Card.Subtitle className="mb-1">
                  Founder, Manzil & Co-Founder, Safe in India
                </Card.Subtitle>
                <hr class="hr-underliner" align="left" />
                <Card.Text>
                  Being a Social Activist, Educator with over 20 years of
                  experience in this space Mr. Ravi Gulati has been a constant
                  support and mentor through his valuable inputs since the
                  inception of idea
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Mentor
