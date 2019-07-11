import React from 'react'
import { Navbar, Nav, NavDropdown, Row, Col, Container } from 'react-bootstrap'
import '../../static/css/utils/navbar.css'

class NavbarUXer extends React.Component {
    render() {
        return (
            <div>
                <Navbar className='nav-bgColoruxer'>
                    <Container className=' web-topleft' >
                        <Row>
                            <Col xs> <Nav.Link className='web-topleft' href="/testing/record">Projects</Nav.Link></Col>
                            <Col xs> <Nav.Link className='web-topleft' eventKey="link-1">Activities</Nav.Link></Col>
                        </Row>
                        <Row>
                            <Col className='web-dev' md={100}> <img src={require('../../static/img/Logo_White.png')} width='55' height='55px' className="d-inline-block align-top" alt="UX Search Logo" /></Col>
                            <Col md ><Nav.Link className='web-dev' href="/home" >Web Development</Nav.Link></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md >  <div className='bell-solid'>
                                <img src={require('../../static/img/bell-solid.svg')} width='20' height='20px' />
                            </div></Col>
                            <Col md={15}> <div className='web-topleft'>Wasin Wachirapusitanun</div></Col>
                            <Col md> <NavDropdown className='nav-dropdown' title=" " id="basic-nav-dropdown" bsPrefix='#css' >
                                <img src={require('../../static/img/user-solid.svg')} width='20' height='20px' />
                                <NavDropdown.Item href="#MyAccount">My Account</NavDropdown.Item>
                                <img src={require('../../static/img/sign-out-alt-solid.svg')} width='20' height='20px' />
                                <NavDropdown.Item href="#Signout">Sign out</NavDropdown.Item>
                            </NavDropdown></Col>
                        </Row>
                        <Row>
                            

                        </Row>
                    </Container>






                </Navbar>
            </div>
        )
    }
}

export default NavbarUXer