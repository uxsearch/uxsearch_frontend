import React from 'react'
import { Button, ButtonToolbar } from 'reactstrap'


import NavbarProject from '../../components/utils/navbarEachProject'
import EachExpPro from '../../components/EachExperimentProfile/eachExpProfile'



import '../../static/sass/uxer/videoResult.scss'


class ExperPage extends React.Component {
  render() {
    return (
      <section id='video-result'>
        <NavbarProject />
      <EachExpPro/>
      </section>
    )
  }
}

export default ExperPage;