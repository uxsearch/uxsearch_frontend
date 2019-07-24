import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import swal from 'sweetalert'

import Camera from '../../components/experiment/record/camera'
import Screen from '../../components/experiment/record/screen'
import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/record.scss'

const modalSubmit = () => {
  swal({
    title: "Are you sure?",
    text: `You won't be able to reverse this!`,
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: null,
        visible: true,
      },
      confirm: {
        text: "Confirm",
        value: true,
        visible: true,
      }
    },
    dangerMode: false,
  }).then((willSubmit) => {
    if (willSubmit) {
      swal("Thank you very much", {
        icon: "success",
        timer: 1000,
        buttons: false
      });
    }
  });
}

class RecordPage extends React.Component {
  render() {
    return (
      <div>
        <NotSupport className='d-md-block' />
        <section id='video-record' className='d-none d-md-block'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <Row className='space-head-block'>
                  <Col xs={12}>
                    <p className='title'><span className='bold-text'>"UX Search Prototype"</span> Usability Test Record</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className='video-block'>
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
                        <Button type='submit' className='btn-finish-test' onClick={modalSubmit}>Finish Testing</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default RecordPage