import React from 'react'
import { Container, Row, Col, Button, ButtonToolbar } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

import NavbarUXer from '../../components/utils/navbarUXer'
import PlayVideo from '../../components/uxer/videoresult/video'
import ExperProfile from '../../components/uxer/videoresult/profileBlock'
import ResultQuestion from '../../components/uxer/videoresult/resultQuestionnaire'

import '../../static/sass/uxer/videoResult.scss'


class VideoResult extends React.Component {
  render() {
    return (
      <section id='video-result'>
        <NavbarUXer />
        <PlayVideo />
        <Container fluid>
          <Row>
            <Col xs={2}>
              <img
                src='https://picsum.photos/200/300'
                width='auto'
                height='40px'
                className="d-inline-block align-top"
                alt="UX Search Logo"
              />
            </Col>
            <Col xs={3}>
              <h3> Leroy Romero</h3>
            </Col>
            <Col xs={2}>
              <Row>
                <Button size='lg' href="/testing/record" className='btn-usability-test'>Usability Test note </Button>
              </Row >

            </Col>
          </Row>
        </Container>
        <Container>
          <ExperProfile />
          <ResultQuestion />
        </Container>
      </section>
    )
  }
}

export default VideoResult;