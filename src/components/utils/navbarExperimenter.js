import React from 'react'
import { Navbar } from 'react-bootstrap'
import '../../static/css/utils/navbar.css'

class NavbarExp extends React.Component {
  render() {
    return (
      <Navbar className='nav-bgColor'>
        <img
          src={require('../../static/img/full_logo.png')}
          width='auto'
          height='40px'
          className="d-inline-block align-top"
          alt="UX Search Logo"
        />
      </Navbar>
    )
  }
}

export default NavbarExp