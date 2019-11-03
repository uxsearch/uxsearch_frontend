import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'

import logo from '../../static/img/Logo_White.png'
import axios from '../../utils/axios';
import MyAccount from '../../pages/uxer/myAccount'

import '../../static/sass/navbar.scss'

class NavbarUxer extends React.Component {
  constructor(props) {
    super(props);
    const { computedMatch } = props
    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,

    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logout = async () => {
    localStorage.removeItem('token')
    window.location.assign('/login')
  }

  render() {
    const experiment = this.state.experiment
    return (
      <section id='uxer-navbar'>
        <Navbar dark className='nav-bgColoruxer-mobile d-md-none'>
          <NavbarBrand href='/' className='mr-auto'>
            <img className='logo-icon' src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href={`/uxer/${this.props.uxerId}/projects`} className='link-text'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' className='link-text'>Activity</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='link-text'>
                  UXer1
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href={`/uxer/${this.props.uxerId}/account`}>
                    <FontAwesomeIcon icon={faUserAlt} size='sm' className='space-icon' />
                    <span>My Account</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FontAwesomeIcon icon={faSignOutAlt} size='sm' className='space-icon' />
                    <span>Sign out</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Navbar expand='md' dark className='nav-bgColoruxer d-none d-md-block'>
          <Row>
            <Col md={1}></Col>
            <Col md={5}>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href={`/uxer/${this.props.uxerId}/projects`} className='link-text'>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#' className='link-text'>Activity</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={5} className='account-box'>
              <Nav>
                <UncontrolledDropdown nav inNavbar className='dropdown-position'>
                  <DropdownToggle nav caret className='link-text'>
                    UXer1
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href={`/uxer/${this.props.uxerId}/account`}>
                      <FontAwesomeIcon icon={faUserAlt} size='sm' className='space-icon' />
                      <span>My Account</span>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => this.logout()}>
                      <FontAwesomeIcon icon={faSignOutAlt} size='sm' className='space-icon' />
                      <span>Sign out</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Col>
          </Row>
          <Row className='space-title'>
            <Col md={1} className='text-center border-right-logo'>
              <NavbarBrand href='#'>
                <img className='logo-icon' src={logo} />
              </NavbarBrand>
            </Col>
            <Col md={10}>
              <h1>{this.props.title}</h1>
            </Col>
          </Row>
        </Navbar>
      </section>
    );
  }
}

export default withRouter(NavbarUxer)