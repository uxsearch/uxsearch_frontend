import React from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy, faShare } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarUxer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';
import ExperBlock from '../../components/uxer/experimentBlock'
import Summarize from '../../components/uxer/summarize'

import '../../static/sass/uxer/experPage.scss'

const SearchField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#28a1f2',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#28a1f2',
      },
    },
  },
})(TextField);

class ExperPage extends React.Component {
  constructor(props) {
    super(props)
    const { computedMatch } = props
    this.state = {
      uxerId: computedMatch.params.id,
      projectId: computedMatch.params.projId,
      project: undefined,
      experList: [],
      avgTime: undefined,
      resultSummarize: undefined,
      resultOption: 'video'
    }
  }

  async componentDidMount() {
    await this.getAllExperiment()
    await this.getProject()
    await this.getResultAnswer()
    await this.getAvgTime()
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

  getAllExperiment = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/experimenters`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET ALL EXPERIMENT OF THIS PROJECT')
      }
      this.setState({ experList: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  getResultAnswer = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/summarize-note`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET RESULT ANSWER')
      }
      this.setState({ resultSummarize: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  getAvgTime = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/summarize-recordTime`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET RESULT')
      }
      this.setState({ avgTime: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  handleResultOption = async option => {
    await this.setState({ resultOption: option })
    const videoOption = document.getElementById('videoOption')
    const summarizeOption = document.getElementById('summarizeOption')
    if (this.state.resultOption === 'video') {
      videoOption.classList.add('active')
      summarizeOption.classList.remove('active')
    } else if (this.state.resultOption === 'summarize') {
      summarizeOption.classList.add('active')
      videoOption.classList.remove('active')
    }
  }

  render() {
    const { project, experList, uxerId, projectId, resultSummarize, avgTime, resultOption } = this.state

    return (
      <section id='exper-page'>
        <NavbarUxer title={`${project && project.name}`} uxerId={uxerId} />
        <SubNavbar uxerId={uxerId} projId={projectId} active={`result`} />
        <Container>
          <Row className='space-head-block justify-content-center align-items-end'>
            <Col xs={10} md={4}>
              <form autoComplete='on'>
                <Row className='align-items-end no-gutters'>
                  <Col xs={2} sm={1} md={2} className='text-center'>
                    <FontAwesomeIcon icon={faSearch} size='1x' color='#303030' />
                  </Col>
                  <Col xs={10} sm={11} md={10}>
                    <SearchField
                      id='standard-search'
                      label='Search Experiment'
                      type='search'
                      className='w-100 search-form no-margin'
                      margin='normal'
                    />
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xs={2} sm={1} className='d-md-none no-padding'>
              <div className='share-block'>
                <FontAwesomeIcon icon={faShare} size="1x" color='#fff' className='share-icon' />
              </div>
            </Col>
            <Col md={2} className='d-none d-md-block' />
            <Col md={6} className='d-none d-md-block'>
              <Row className='justify-content-end align-items-center'>
                <Col md={5} lg={4} className='text-right'>
                  <p className='no-margin'>Share Test: </p>
                </Col>
                <Col md={5} lg={6} className='no-padding'>
                  <Label className='no-margin w-100' >
                    <Input type='text' id='share' name='share_url' value={`${project && project.link_url}`} className='share' alt={`${project && project.link_url}`} readOnly />
                  </Label>
                </Col>
                <Col md={1} className='no-padding'>
                  <div className='copy-block'>
                    <FontAwesomeIcon icon={faCopy} size="1x" color='#fff' className='copy-icon' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row className='justify-content-center'>
            <Col xs={5} sm={4} md={3} lg={2}
              id='videoOption'
              className='text-center option-block active'
              onClick={() => this.handleResultOption('video')}
            >
              <p className='no-margin'>Video</p>
            </Col>
            <Col xs={5} sm={4} md={3} lg={2}
              id='summarizeOption'
              className='text-center option-block'
              onClick={() => this.handleResultOption('summarize')}
            >
              <p className='no-margin'>Summarize</p>
            </Col>
          </Row>
        </Container>
        <br />
        {resultOption === 'video' &&
          <Container>
            <Row>
              {experList.map(experiment => (
                <>
                  <Col xs={12} sm={6} md={4} lg={3} key={experiment.id}>
                    <ExperBlock
                      link={`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/${experiment.data.experimenter_key}/result`}
                      firstname={experiment.data.firstname}
                      lastname={experiment.data.lastname}
                    />
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        }
        {resultOption === 'summarize' &&
          <Container>
            <Summarize
              uxerId={uxerId}
              projId={projectId}
              projectName={`${project && project.name}`}
              avgTime={avgTime}
              result={resultSummarize}
            />
          </Container>

        }
      </section>
    )
  }
}

export default ExperPage;