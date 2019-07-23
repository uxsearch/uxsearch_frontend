import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import swal from 'sweetalert'

import NavbarExp from '../../components/utils/navbarExperimenter'
import ProfileBlock from '../../components/experiment/profileBlock'

import '../../static/sass/experimenter/index.scss'

const modalSubmit = () => {
  swal({
    title: "Are you sure?",
    icon: "warning",
    buttons: true,
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

class IndexExperiment extends React.Component {
  render() {
    return (
      <section id='exper-index'>
        <NavbarExp />
        <Container>
          <Row>
            <Col xs={12}>
              <Row className='space-head-block'>
                <Col xs={12}>
                  <p className='title'>Welcome to <span className='bold-text'>"UX Search Prototype"</span></p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p>Hi, we are thank you for entry to make usability testing. In addition, every usability and recommends of you are very important for us.</p>
                </Col>
              </Row>
              <hr className='black-line' />
              <Row>
                <Col xs={12} className='profile-block'>
                  <ProfileBlock />
                </Col>
              </Row>
              <Row className='justify-content-center space-btn'>
                <Col xs={12} md={4} className='text-center'>
                  <Button className='btn-start-test' onClick={modalSubmit}>Start Usability Testing</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default IndexExperiment