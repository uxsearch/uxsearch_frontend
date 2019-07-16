import React from 'react'
import NavbarUXer from '../../components/utils/navbarUXer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

//import '../../static/css/uxer/videoresult.css'
import PlayVideo from '../../components/videoresult/video'

import '../../static/css/uxer/videoresult.css'


//import ExperProfile from '../../components/videoresult/experimenterProfile'

class VideoResult extends React.Component {
  render() {
    return (
      <div>
        <NavbarUXer />

       <PlayVideo/>


      </div>

    )
  }
}

export default VideoResult;