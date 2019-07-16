import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import NavbarExp from '../../components/utils/navbarExperimenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt,faBell } from '@fortawesome/free-solid-svg-icons'


class Test extends React.Component {
  render() {
    return (
      <div>
        <NavbarExp />
        <h1>Test test page</h1>
        <a href='/testing/record'>
          <Button className='btn btn-success'>
            Start Record
          </Button>
        </a>
        <FontAwesomeIcon icon={faUserAlt} size="lg"/> <br></br>
        <FontAwesomeIcon icon={faBell} size="9x" color='#00ffff'/> <br></br>


        <h1>Video Result</h1>
        <a href='/testing/VideoResult'>
          <Button className='btn btn-success'>
            Video Result
          </Button>
          
        </a>
      </div>
    )
  }
}

export default Test;