import React from 'react'
import { Navbar, Nav, Row, Col, Container, Form, FormControl, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import '../../static/css/utils/navbar.css'

class NavbarUXer extends React.Component {
	render() {
		return (
			<div>
				<Navbar className='nav-bgColoruxer'>
					<Container>
						<Nav className="web-topleft">
							<Nav.Link href="/testing/record">Projects</Nav.Link>
							<Nav.Link eventKey="link-1">Activities</Nav.Link>
						</Nav>
					</Container>

					<div className='web-dev'>

						<Col md={100}> <img src={require('../../static/img/Logo_White.png')}
							width='55' height='55px' className="d-inline-block align-top" alt="UX Search Logo" /></Col>
						<Col>   <Nav.Link className='web-dev' href="/home" >Web Development</Nav.Link></Col>

					</div>

					<FontAwesomeIcon icon={faBell} size="x" color='#efefef' />
					{/* <NavDropdown className='web-user'title="Wasin Wachirapusitanun" id="basic-nav-dropdown">

                        <img src={require('../../static/img/user-solid.svg')} width='20' height='20px' />
                        <NavDropdown.Item href="#MyAccount">My Account</NavDropdown.Item>

                        <img src={require('../../static/img/sign-out-alt-solid.svg')} width='20' height='20px' />
                        <NavDropdown.Item href="#Signout">Sign out</NavDropdown.Item>
                    </NavDropdown> */}
				</Navbar>
			</div>
		)
	}
}

export default NavbarUXer
