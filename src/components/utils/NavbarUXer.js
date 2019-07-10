import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../../static/css/utils/navbar.css'

class NavbarUXer extends React.Component {
    render() {
        return (
            <div>
                <Navbar className='nav-bgColor'>


                    <img
                        src={require('../../static/img/Logo_White.png')}
                        width='55'
                        height='55px'
                        className="d-inline-block align-top"
                        alt="UX Search Logo"
                    />

                    <Nav.Link className='web-dev' href="/home" >Web Development</Nav.Link>

                    <div className='bell-solid'>
                        <img src={require('../../static/img/bell-solid.svg')} width='20' height='20px' />
                    </div>
                    <Nav.Link className='web-topleft' href="/testing/record">Projects</Nav.Link>
                    <Nav.Link className='web-topleft' eventKey="link-1">Activities</Nav.Link>

                    <h3>Wasin Wachirapusitanun</h3>

                    <NavDropdown className='nav-dropdown' title=" " id="basic-nav-dropdown" bsPrefix='#css' >
                        <img src={require('../../static/img/user-solid.svg')} width='20' height='20px' />
                        <NavDropdown.Item href="#MyAccount">My Account</NavDropdown.Item>
                        <img src={require('../../static/img/sign-out-alt-solid.svg')} width='20' height='20px' />
                        <NavDropdown.Item href="#Signout">Sign out</NavDropdown.Item>

                    </NavDropdown>


                </Navbar>
            </div>
        )
    }
}

export default NavbarUXer