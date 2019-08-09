import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import swal from 'sweetalert'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarExp from '../../components/utils/navbarExperimenter'
import ProfileBlock from '../../components/experiment/profileBlock'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/index.scss'

const modalSubmit = () => {
  swal({
    title: 'Are you sure?',
    icon: 'warning',
    buttons: {
      cancel: {
        text: 'Cancel',
        value: null,
        visible: true,
      },
      confirm: {
        text: 'Confirm',
        value: true,
        visible: true,
      }
    },
    dangerMode: false,
  }).then((willSubmit) => {
    if (willSubmit) {
      swal({
        title: 'Thank you very much',
        text: 'If you complete test, press button to complete, please.',
        icon: 'success',
        timer: 2500,
        buttons: false
      });
    }
  });
}

class IndexExperiment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async submitProfile(values) {
    try {
      const newValue = {...values}
      const prepareEducate = newValue.educate ? newValue.educate : ''
      const prepareJob = newValue.job ? newValue.job : ''
      const prepareLifestyle = newValue.lifestyle ? newValue.lifestyle : ''
      newValue.educate = prepareEducate
      newValue.job = prepareJob
      newValue.lifestyle = prepareLifestyle
      const response = await axios.post(`${APIURI.EXPERIMENTER}add/`, newValue)
      if(response.status !== 201) {
        throw new Error('CANNOT CREATE EXPERIMENTER')
      }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='exper-index' className='d-none d-md-block'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <Row className='space-head-block'>
                  <Col xs={12}>
                    <p className='title'>Welcome to <span className='bold-text'>'UX Search Prototype'</span></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <p>Hi, we are thank you for entry to make usability testing. In addition, every usability and recommends of you are very important for us.</p>
                  </Col>
                </Row>
                <hr className='black-line' />
                <Form
                  onSubmit={this.submitProfile}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12}>
                            <ProfileBlock />
                          </Col>
                        </Row>
                        <Row className='justify-content-center space-btn'>
                          <Col xs={12} md={4} className='text-center'>
                            <Button className='btn-start-test' type='submit'>Start Usability Testing</Button>
                          </Col>
                        </Row>
                      </form>
                    )}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default IndexExperiment