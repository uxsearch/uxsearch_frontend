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
        <a href='/uxer/8t6UN47Z749qacrEvZ8O/projects'>
          <Button className='btn btn-success'>
            Project Page
          </Button>
        </a>
      </div>
    )
  }
}

export default Test;