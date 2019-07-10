import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import NavbarUXer from '../../components/utils/NavbarUXer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'


class VideoResult extends React.Component {
  render() {
    return (
      <div>
        <NavbarUXer />
        <h1>Leroy Romero</h1> 
        <FontAwesomeIcon icon={faUserAlt} size="lg"/> <br></br>

        
      
      </div>
    )
  }
}

export default VideoResult