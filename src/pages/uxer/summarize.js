import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withStyles, TextField, Table } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-final-form'
import { withRouter } from 'react-router-dom'

import NotSupport from '../../components/utils/notSupport';
import NavbarUXer from '../../components/utils/navbarUXer';
import SubNavbar from '../../components/utils/subNavbar';
import Question from '../../components/uxer/question';

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import '../../static/sass/uxer/summarize.scss';

const SearchField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#28a1f2'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#28a1f2'
      }
    }
  }
})(TextField);

class Summarize extends React.Component {
  constructor(props) {
    super(props)
    const { computedMatch } = props
    this.state = {
      questions: [

      ],
      uxerId: computedMatch.params.id,
      projectId: computedMatch.params.projId,
      project: undefined,
      loading: false,
      question: undefined,
      avgTime: undefined,
      resultSummarize: []
    }
  }

  async componentDidMount() {
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
      console.log(response)
      this.setState({ avgTime: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { uxerId, projectId, project, resultSummarize, avgTime } = this.state
    return (
      <div>
        <section id='summarize'>
          <NavbarUXer title={`${project && project.name}`} uxerId={uxerId} />
          <SubNavbar uxerId={uxerId} projId={projectId} active={`summarize`} />
          <Container>
            <Row className='summary-block'>
              <Col xs={12} md={12}>
                <br />
                <Row className='justify-content-center'>
                  <Col xs={10} className='space-side '>
                    <h1>{`${project && project.name}`} Summarize</h1>
                  </Col>
                </Row>
                <br />
                <Row className='justify-content-center'>
                  <Col xs={10}>
                    <Row className='align-items-center'>
                      <Col xs={12} md={4} lg={3} >
                        <p className='title-head'>Average Time Test : </p>
                      </Col>
                      <Col xs={12} md={8} lg={9}>
                        <p className='avg-time'>{avgTime}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                {resultSummarize.map(result => (
                  <>
                    <Row className='justify-content-center'>
                      <Col xs={10}>
                        <p className='title-head'>{result.question}</p>
                        {result.type_form === 'textbox' ? (
                          <Row>
                            <Col xs={12}>
                              <Table className='table table-fixed'>
                                <tbody>
                                  {result.answer.map(answer => (
                                    <tr>
                                      <td className='table-col'>{answer}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        ) : (
                            <Row className='justify-content-start align-items-center'>
                              {result.options.map((option, index) => (
                                <Col xs={12} md={6} lg={4}>
                                  <div className='block-result'>
                                    <Row className='align-items-center'>
                                      <Col xs={10} >
                                        <p className='no-margin'>{option}</p>
                                      </Col>
                                      <Col xs={2} className='no-padding text-center'>
                                        <p className='no-margin count-text'>{result.answer[index]}</p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          )}
                      </Col>
                    </Row>
                    <br />
                  </>
                ))}
              </Col>
            </Row >
          </Container>
        </section>
      </div>
    );
  }
}

export default withRouter(Summarize)