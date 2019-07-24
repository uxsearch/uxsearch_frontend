import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faBell } from '@fortawesome/free-solid-svg-icons'

import NavbarExp from '../../components/utils/navbarExperimenter'

class Test extends React.Component {
  render() {
    return (
      <div>
        <NavbarExp />
        <h1>Test test page</h1>
        <a href='/experimenter'>
          <Button className='btn btn-success'>
            Start Experimenter
          </Button>
        </a>
        <FontAwesomeIcon icon={faUserAlt} size="lg" /> <br></br>
        <FontAwesomeIcon icon={faBell} size="9x" color='#00ffff' /> <br></br>

        <h1>Video Result</h1>
        <a href='/testing/VideoResult'>
          <Button className='btn btn-success'>
            Video Result
          </Button>
        </a>


        <h1>Experiment Page</h1>
        <a href='/testing/ExperPage'>
          <Button className='btn btn-success'>
            Experimenter Page
          </Button>
        </a>

        <h1>Project Page</h1>
        <a href='/testing/ProjectPage'>
          <Button className='btn btn-success'>
            Project Page
          </Button>
        </a>

      </div>
    )
  }
}

export default Test;