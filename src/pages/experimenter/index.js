import React from 'react'
import { withRouter } from "react-router"
import { Container, Row, Col, Button } from 'reactstrap'
import { Form } from 'react-final-form'
import swal from 'sweetalert'
import { isEmpty, isNull } from 'lodash'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarExp from '../../components/utils/navbarExperimenter'
import ProfileBlock from '../../components/experiment/profileBlock'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/index.scss'

class IndexExperiment extends React.Component {
  constructor(props) {
    super(props)
    const { match } = props
    this.state = {
      uxerId: '3Am80mAF4zOSzxrXbsFlDZTRq202',
      projectId: match.params.projId,
      project: undefined,
      country: '',
      university: ''
    }
  }

  setCountry(value) {
    this.setState({
      country: value
    })
  }

  setUniversity(value) {
    this.setState({
      university: value
    })
  }

  async componentDidMount() {
    this.getProject()
  }

  getProject = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET PROJECT')
      }
      this.setState({ project: response.data.data })
    } catch (e) {
      console.error(e)
    }
  }

  submitProfile = async (values) => {
    try {
      const newValue = { ...values }
      const prepareEducate = newValue.educate ? newValue.educate : ''
      const prepareJob = newValue.job ? newValue.job : ''
      if (this.state.country === '') {
        newValue.province = ''
      }

      newValue.country = this.state.country
      newValue.educate = prepareEducate
      newValue.job = prepareJob
      const response = await axios.post(`${APIURI.EXPERIMENTER}add/`, newValue)
      if (response.status !== 201) {
        throw new Error('CANNOT CREATE EXPERIMENTER')
      }
      const confirm = await this.modalSubmit()
      if (confirm) {
        this.props.history.push(`/${this.state.projectId}/experimenter/${response.data.experimenter.id}/record`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  modalSubmit = async () => {
    let willSubmit = await swal({
      title: 'Are you sure?',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancel',
          value: false,
          visible: true,
        },
        confirm: {
          text: 'Confirm',
          value: true,
          visible: true,
        }
      },
      dangerMode: false,
    })
    if (willSubmit) {
      willSubmit = await swal({
        title: 'Thank you very much',
        text: 'Next, Please share your screen and Click share button. If you complete test, press "Finish Testing" Thankyou.',
        icon: 'success',
        buttons: {
          cancel: {
            text: 'Cancel',
            value: false,
            visible: false
          },
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
          }
        },
      });
    }
    return willSubmit
  }

  isEmptyValue() {
    const firstname = document.querySelector('#firstname')
    const lastname = document.querySelector('#lastname')
    const birthdate = document.querySelector('#birthdate')
    const gender = document.querySelector('#gender')
    const tel = document.querySelector('#tel')
    const email = document.querySelector('#email')

    return isNull(firstname) || isNull(lastname) || isNull(birthdate) || isNull(gender) || isNull(tel) || isNull(email)
      || isEmpty(firstname.value) || isEmpty(lastname.value) || isEmpty(birthdate.value) || isEmpty(gender.value)
      || isEmpty(tel.value) || isEmpty(email.value) 
  }

  render() {
    const project = this.state.project
    const swal = require('sweetalert')

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
                    <p className='title'>Welcome to <span className='bold-text'>'{project && `${project.name}`}'</span></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <p>{project && `${project.description}`}</p>
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
                            <ProfileBlock
                              country={this.state.country}
                              setCountry={value => this.setCountry(value)}
                            />
                          </Col>
                        </Row>
                        <Row className='justify-content-center space-btn'>
                          <Col xs={12} md={4} className='text-center'>
                            <Button className='btn-start-test' type='submit' disabled={this.isEmptyValue()}>Start Usability Testing</Button>
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

export default withRouter(IndexExperiment)