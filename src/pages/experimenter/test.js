import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

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



        <h1>Project Page</h1>
        <a href='/uxer/projects'>
          <Button className='btn btn-success'>
            Project Page
          </Button>
        </a>


        <h1>MyProject</h1>
        <a href='/uxer/project/experiment/home'>
          <Button className='btn btn-success'>
            MyProject
          </Button>
        </a>

        <h1>modals</h1>
        <a href='/uxer/project/experiment/modal'>
          <Button className='btn btn-success'>
          modals
          </Button>
        </a>

      </div>
    )
  }
}

export default Test;