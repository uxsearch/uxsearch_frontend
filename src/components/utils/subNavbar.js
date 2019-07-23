import React from 'react'
import { Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

class SubNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='sub-navbar'>
        <Container fluid className='nav-bgColoruxer'>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Nav navbar className='menu-line'>
                <NavItem className='menu-block' active>
                  <NavLink href='#' className='link-text'>Video Results</NavLink>
                </NavItem>
                <NavItem className='menu-block'>
                  <NavLink href='#' className='link-text'>Create Questionnaire</NavLink>
                </NavItem>
                <NavItem className='menu-block'>
                  <NavLink href='#' className='link-text'>Create Usability Test Note</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SubNavbar