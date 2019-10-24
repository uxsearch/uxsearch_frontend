import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarUXer from '../../components/utils/navbarUXer'
import PlayVideo from '../../components/uxer/videoresult/video'
import ExperProfile from '../../components/uxer/videoresult/profileBlock'
import ResultQuestion from '../../components/uxer/videoresult/resultBlock'

import '../../static/sass/uxer/videoResult.scss'

class VideoResult extends React.
Component {
  constructor(props) {
    super(props);
    const { match } = props
    this.state = {
      experId: match.params.experId,
      experiment: undefined,
      uxerId: match.params.id,
      projectId: match.params.projId,
      project: undefined,
      questions: [],
      records: undefined
    }
  }

  componentDidMount() {
    this.getExperimentProfile()
    this.getProject()
    this.getResultAnswer()
    this.getResultRecord()
  }

  getExperimentProfile = async () => {
    try {
      const response = await axios.get(`${APIURI.EXPERIMENTER}${this.state.experId}/`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET EXPERIMENT PROFILE')
      }
      this.setState({ experiment: response.data.data })
    } catch (error) {
      console.error(error)
    }
    // this.getProject()
  }

  getAge(birthdate) {
    const today = new Date()
    const age = today.getFullYear() - birthdate.getFullYear()
    return age + ' years'
  }

  getProject = async () => {
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

  getResultAnswer = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}/answers-questionnaire`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET RESULT')
      }
      this.setState({ questions: response.data })
    } catch (e) {
      console.error(e)
    }
}

  getResultRecord = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET RESULT')
      }
      this.setState({ records: response.data.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const experiment = this.state.experiment
    const project = this.state.project
    const questions = this.state.questions
    const records = this.state.records

    console.log('questions', questions)
    return (
      <section id='video-result'>
        <NavbarUXer title={`${project && project.name}`}/>
        <Container fluid>
          {records &&
            <PlayVideo 
              faceVideo={records.video_url}
              faceVideoTime= {records.video_time}
              screenVideo= {records.screen_url}
              screenVideoTime= {records.screen_time}
            />
          }
        </Container>
        <Container fluid className='space-bottom-video'>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} sm={8} md={6} lg={5}>
              <Row className='align-items-center justify-content-center'>
                <Col xs={3} sm={4} xl={3}>
                  <div className='profile-block'>
                    <img src='https://picsum.photos/200/300' alt='Profile Picture' className='profile-img' />
                  </div>
                </Col>
                <Col xs={9} sm={8} xl={9}>
                  <Row>
                    <Col xs={12}>
                      <p className='no-margin exper-name'>{experiment && `${experiment.firstname} ${experiment.lastname}`}</p>
                    </Col>
                  </Row>
                  <Row className='d-sm-none space-btn-mobile'>
                    <Col xs={12}>
                      <Button href={`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/answertestnote`} className='btn-usability-test'>Usability Test Note</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={3} xl={4} className='d-none d-md-block' />
            <Col xs={12} sm={4} md={3} xl={2} className='d-none d-sm-block'>
              <Button href={`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/${this.state.experId}/answertestnote`} className='btn-usability-test w-100'>Usability Test Note</Button>
            </Col>
          </Row>
        </Container>
        <Container className='space-block'>
          {experiment &&
            <>
              <ExperProfile
                name={`${experiment.firstname} ${experiment.lastname}`}
                age={this.getAge(new Date(experiment.birthdate.seconds * 1000))}
                gender={`${experiment.gender}`}
                tel={`${experiment.tel}`}
                email={`${experiment.email}`}
                city={`${experiment.province}`}
                country={`${experiment.country}`}
                educate={`${experiment.educate}`}
                job={`${experiment.job}`}
                lifestyle={`${experiment.lifestyle}`}
              />
            </>
          }
          <br />
          <ResultQuestion  
            questions={questions && questions}  
          />
        </Container>
      </section>
    )
  }
}

export default VideoResult;