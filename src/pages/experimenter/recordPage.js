import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import swal from 'sweetalert'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import Camera from '../../components/experiment/record/camera'
import Screen from '../../components/experiment/record/screen'
import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/record.scss'
import { delay } from '../../utils/delay'

class RecordPage extends React.Component {
  constructor(props) {
    super(props)
    const { match } = props
    this.state = {
      uxerId: '3Am80mAF4zOSzxrXbsFlDZTRq202',
      projectId: match.params.projId,
      experId: match.params.experId,
      experiment: undefined,
      project: undefined,
      stopStatus: false,
      cameraBlob: {
        timeDuration: null,
        blob: null
      },
      screenBlob: {
        timeDuration: null,
        blob: null
      },
    }
  }

  async componentDidMount() {
    this.getProject()
    this.getExperimenter()
  }

  setParentCameraState = (cameraBlob, timeDuration) => {
    const Childcamera = {
      timeDuration: timeDuration,
      blob: cameraBlob
    }
    this.setState({ cameraBlob: Childcamera })
  }

  setParentScreenState = (screenBlob, timeDuration) => {
    const Childscreen = {
      timeDuration: timeDuration,
      blob: screenBlob
    }
    this.setState({ screenBlob: Childscreen })
  }

  async uploadVideo(blob) {
    var formData = new FormData();
    formData.append('file', blob, blob.name);
    try {
      const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/upload`, formData)
      if (response.status !== 201) {
        throw new Error('CANNOT UPLOAD VIDEO FILE')
      }
      return response.data.video_url
    } catch (e) {
      console.error(e)
    }
  }

  submitResult = async (value) => {
    await delay(100)
    const cameraUploadURL = await this.uploadVideo(this.state.cameraBlob.blob)
    const screenUploadURL = await this.uploadVideo(this.state.screenBlob.blob)
    const newValue = {
      ...value,
      video_time: this.state.cameraBlob.timeDuration,
      video_url: cameraUploadURL,
      screen_time: this.state.screenBlob.timeDuration,
      screen_url: screenUploadURL,
    }
    try {
      const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/record`, newValue)
      if (response.status !== 201) {
        throw new Error('CANNOT CREATE FORM RECORD')
      }
      const willSubmit = await this.modalSubmit()
      if (willSubmit) {
        this.props.history.push(`/${this.state.projectId}/experimenter/${this.state.experId}/answer`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  getExperimenter = async (props) => {
    try {
      const response = await axios.get(`${APIURI.EXPERIMENTER}${this.state.experId}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET EXPERIMENTER')
      }
      this.setState({ experiment: response.data.data })
    } catch (e) {
      console.error(e)
    }
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

  stopRecord = async (value) => {
    const confirm = await this.modalSubmit()
    if (confirm) {
      this.setState({ stopStatus: value })
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
        title: 'Thank you for your test',
        text: 'Next, Please answer the questionnaire for further program development. Thank you .',
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

  render() {
    const project = this.state.project
    const swal = require('sweetalert')

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='video-record' className='d-none d-md-block'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <Row className='space-head-block'>
                  <Col xs={12}>
                    <p className='title'><span className='bold-text'>'{project && `${project.name}`}'</span> Usability Test Record</p>
                  </Col>
                </Row>
                <Form
                  onSubmit={this.submitResult}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12} className='video-block'>
                            <Field component='input' type='hidden' name='experimenter_key' initialValue={this.state.experId} />
                            <Field component='input' type='hidden' name='firstname' initialValue={this.state.experiment ? this.state.experiment.firstname : undefined} />
                            <Field component='input' type='hidden' name='lastname' initialValue={this.state.experiment ? this.state.experiment.lastname : undefined} />
                            <Row>
                              <Col xs={12} md={6} className='text-center'>
                                <Camera uxerId={`${this.state.uxerId}`} projectId={`${this.state.projectId}`} stopStatus={this.state.stopStatus} setParentCameraState={this.setParentCameraState} />
                              </Col>
                              <Col xs={12} md={6} className='text-center'>
                                <Screen uxerId={`${this.state.uxerId}`} projectId={`${this.state.projectId}`} stopStatus={this.state.stopStatus} setParentScreenState={this.setParentScreenState} />
                              </Col>
                            </Row>
                            <br />
                            <Row className='justify-content-center'>
                              <Col xs={12} md={3} className='text-center'>
                                <Button onClick={() => this.stopRecord(true)} type='submit' className='btn-finish-test'>Finish Testing</Button>
                              </Col>
                            </Row>
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

export default withRouter(RecordPage)