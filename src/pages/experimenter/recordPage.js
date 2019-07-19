import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import Camera from '../../components/record/camera'
import Screen from '../../components/record/screen'
import NavbarExp from '../../components/utils/navbarExperimenter'

import '../../static/css/experimenter/record.css'

class RecordPage extends React.Component {

  render() {
    return (
      <div>
        <NavbarExp />
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
                  <Button type='submit' className='btn-finish-test'>Finish Testing</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default RecordPage