import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import NavbarUXer from '../../components/utils/navbarUXer'
import PlayVideo from '../../components/uxer/videoresult/video'
import ExperProfile from '../../components/uxer/videoresult/profileBlock'
import ResultQuestion from '../../components/uxer/videoresult/resultBlock'

import '../../static/sass/uxer/videoResult.scss'

class VideoResult extends React.Component {
  render() {
    return (
      <section id='video-result'>
        <NavbarUXer />
        <Container fluid>
          <PlayVideo />
        </Container>
        <Container fluid className='space-bottom-video'>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} sm={8} md={6} lg={5}>
              <Row className='align-items-center justify-content-center'>
                <Col xs={3} sm={4} xl={3}>
                  <div className='profile-block'>
                    <img
                      src='https://picsum.photos/200/300'
                      alt='Profile Picture'
                      className='profile-img'
                    />
                  </div>
                </Col>
                <Col xs={9} sm={8} xl={9}>
                  <Row>
                    <Col xs={12}>
                      <p className='no-margin exper-name'>Leroy Romero</p>
                    </Col>
                  </Row>
                  <Row className='d-sm-none space-btn-mobile'>
                    <Col xs={12}>
                      <Button href='#' className='btn-usability-test'>Usability Test Note</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={3} xl={4} className='d-none d-md-block' />
            <Col xs={12} sm={4} md={3} xl={2} className='d-none d-sm-block'>
              <Button href='#' className='btn-usability-test w-100'>Usability Test Note</Button>
            </Col>
          </Row>
        </Container>
        <Container className='space-block'>
          <ExperProfile />
          <br />
          <ResultQuestion />
        </Container>
      </section>
    )
  }
}

export default VideoResult;