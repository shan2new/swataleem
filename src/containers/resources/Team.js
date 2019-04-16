import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Team = props => {
  const [allTestimonials, setAllTestimonials] = useState([
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'annual report',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'annual report',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'workshop module',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'workshop module',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    },
    {
      category: 'blog',
      title: 'The Need For School Education',
      date: '18 Feb 2019'
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState(1)
  const [testimonials, setTestimonials] = useState(null)

  let modifySelectedCategory = () => {
    if (selectedCategory === 1) {
      setTestimonials(allTestimonials)
      return
    }

    let categories = [
      'All Resources',
      'workshop module',
      'annual report',
      'newsletter',
      'experience'
    ]

    var filteredTestimonials = allTestimonials.filter(testimonial => {
      console.log(testimonial.category, categories[selectedCategory - 1])
      return testimonial.category === categories[selectedCategory - 1]
    })

    setTestimonials(filteredTestimonials)
  }

  useEffect(() => {
    displayTestimonials()
  }, [testimonials])

  useEffect(() => {
    modifySelectedCategory()
  }, [selectedCategory])

  let displayTestimonials = () => {
    if (!testimonials) {
      setTestimonials(allTestimonials)
      return
    }

    let theTestimonials = []
    testimonials.map((key, index) => {
      theTestimonials.push(
        <Col md={6} key={index} className="mb-2">
          <Card
            className="remove-border theme-border-hover"
            style={{
              background: '#f1f1f2',
              border: '3px solid transparent'
            }}>
            <Card.Body className="padding-25">
              <Card.Subtitle className="mb-4 text-muted title-header-initial fz-20 theme-font text-uppercase font-weight-bold">
                {key.category}
              </Card.Subtitle>
              <Card.Title className="h5 font-weight-bold lh-15">
                {key.title}
              </Card.Title>
              <Card.Text>{key.date}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })

    if (theTestimonials.length === 0) {
      theTestimonials.push(
        <Col key={1} className="mb-2">
          <Card
            className="remove-border theme-border-hover left-center-aligner"
            style={{
              background: '#f1f1f2',
              border: '3px solid transparent'
            }}>
            <Card.Body className="padding-25 mx-auto">
              <Card.Title className="h5 font-weight-bold lh-15">
                Sorry, nothing to show in this category!
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      )
    }

    return theTestimonials
  }

  return (
    <div className="mt-5 work-container">
      <Container>
        <Row style={{ marginBottom: '15px' }}>
          <Col>
            <div class="float-right">
              <DropdownButton
                id="dropdown-basic-button"
                title="Show All"
                variant="dropdown">
                <Dropdown.Item onClick={() => setSelectedCategory(1)}>
                  All Resources
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory(2)}>
                  Workshop Modules
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory(3)}>
                  Annual Reports
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory(4)}>
                  Newsletters
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory(5)}>
                  Experiences
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
        <Row>{displayTestimonials()}</Row>
      </Container>
    </div>
  )
}

export default Team
