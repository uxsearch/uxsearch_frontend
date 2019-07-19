import React from 'react'
import { Button, ButtonToolbar } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

import NavbarUXer from '../../components/utils/navbarUXer'
import PlayVideo from '../../components/videoresult/video'
import ExperProfile from '../../components/videoresult/experimenterProfile'

import '../../static/sass/uxer/videoResult.scss'


class VideoResult extends React.Component {
  render() {
    return (
      <section id='video-result'>
        <NavbarUXer />
        <PlayVideo />
        <ExperProfile />
      </section>
    )
  }
}

export default VideoResult;