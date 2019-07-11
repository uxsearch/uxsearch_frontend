import React from 'react'
import NavbarUXer from '../../components/utils/NavbarUXer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../static/css/uxer/videoresult.css'
import Camera from '../../components/record/camera'
import Screen from '../../components/record/screen'



class VideoResult extends React.Component {
  render() {
    return (
      <div>
        <NavbarUXer />
      
        <Container className='container-block'>
          <Row className='video-block'>
            <Col xs={12}>
              <Row>
                <Col xs={12} md={6} className='text-center'>
                  <Camera />
                </Col>
                <Col xs={12} md={6} className='text-center'>
                  <Screen />
                </Col>
              </Row>
              <br />
              <Row className='justify-content-center'>
                <Col xs={12} md={3} className='text-center'>
                  <Button type='submit' className='btn-Usability-Test-Note' >Pause</Button>
                </Col>      
              </Row>
            </Col>
          </Row>
        </Container>

        <experimenterProfile />




        
      </div>
      
    )
  }
}

export default VideoResult