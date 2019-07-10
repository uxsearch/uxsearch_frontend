import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import '../../static/css/navbar.css'


class NavbarUXer extends React.Component {
    render() {
        return (
            <div>
               



                <Navbar className='nav-bgColor'>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                       <Nav.Link href="/testing/record">Active</Nav.Link> 
                    </Nav.Item>
                    <Nav.Item as="li">
                       <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                 
                </Nav>
                    
                    <img
                        src={require('../../static/img/Logo_White.png')}
                        width='55'
                        height='55px'
                        className="d-inline-block align-top"
                        alt="UX Search Logo"
                    />



                </Navbar>
               
            </div>
        )
    }
}

export default NavbarUXer