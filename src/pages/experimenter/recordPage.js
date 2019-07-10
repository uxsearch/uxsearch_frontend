import React from 'react'
import Camera from '../../components/record/camera'
import Screen from '../../components/record/screen'
import NavbarExp from '../../components/utils/navbarExperimenter'
import { Container, Row, Col } from 'react-bootstrap'

class RecordPage extends React.Component {

  render() {
    return (
      <div>
        <NavbarExp />
        <Container className='container-block'>
          <Row className='video-block'>
            <Col xs={12} md={6} className='text-center'>
              <Camera />
            </Col>
            <Col xs={12} md={6} className='text-center'>
              <Screen />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RecordPage