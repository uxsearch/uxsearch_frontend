import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

class SubNavbar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render(props) {
    return (
      <section id='sub-navbar-account'>
        <Container fluid className='nav-bgColoruxer d-none d-md-block'>
          <Row>
            <Col md={1}></Col>
            <Col md={10} className='text-center'>
              <Nav navbar className='menu-line'>
                <NavItem className='menu-block active'>
                  <NavLink href={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiments`} className='link-text'>Profile</NavLink>
                </NavItem>
                <NavItem className='menu-block'>
                  <NavLink href={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiment/question`} className='link-text'>Password</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container className='nav-bgColoruxer d-md-none'>
          <Nav navbar className='menu-line text-center'>
            <NavItem className='menu-block'>
              <NavLink href={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiments`} className='link-text'>Profile</NavLink>
            </NavItem>
            <NavItem className='menu-block' active>
              <NavLink href={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiment/question`} className='link-text'>Password</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </section>
    )
  }
}

export default SubNavbar