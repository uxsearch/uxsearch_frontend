import React from 'react'
import { withRouter } from "react-router"
import { Container, Row, Col, Button } from 'reactstrap'
import { Form } from 'react-final-form'
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
    const { match } = props
    this.state = {
      uxerId: 'Ra5yR8oqRlP0Inxx1BJYzuupjoV2',
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
      console.log(response.data.data)
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
      const prepareLifestyle = newValue.lifestyle ? newValue.lifestyle : ''

      newValue.country = this.state.country
      newValue.educate = prepareEducate
      newValue.job = prepareJob
      newValue.lifestyle = prepareLifestyle
      const response = await axios.post(`${APIURI.EXPERIMENTER}add/`, newValue)
      if (response.status !== 201) {
        throw new Error('CANNOT CREATE EXPERIMENTER')
      }
      this.props.history.push(`/${this.state.projectId}/experimenter/${response.data.experimenter.id}/record`)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const project = this.state.project
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

export default withRouter(IndexExperiment)