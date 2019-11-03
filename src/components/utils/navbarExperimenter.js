import React from 'react'

import '../../static/sass/navbar.scss'

import { Navbar } from 'reactstrap'

class NavbarExp extends React.Component {
  render() {
    return (
      <section id='exper-navbar'>
        <Navbar className='nav-bgColor'>
          <img
            src={require('../../static/img/full_logo.png')}
            className="d-inline-block align-top logo-icon"
            alt="UX Search Logo"
          />
        </Navbar>
      </section>
    )
  }
}

export default NavbarExp