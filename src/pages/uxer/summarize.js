import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Table } from '@material-ui/core'
import { Pie } from 'react-chartjs-2'

import NavbarUXer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import '../../static/sass/uxer/summarize.scss'

class Summarize extends React.Component {
  constructor(props) {
    super(props)
    const { computedMatch } = props
    this.state = {
      questions: [],
      uxerId: computedMatch.params.id,
      projectId: computedMatch.params.projId,
      project: undefined,
      loading: false,
      question: undefined,
      avgTime: undefined,
      resultSummarize: undefined
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
      this.setState({ avgTime: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  data = (option, results) => {
    const data = {
      labels: option,
      datasets: [{
        data: results,
        backgroundColor: [
          '#FF6384', '#ff8364', '#FFCE56', '#36A2EB', '#7f78d2',
          '#e8647c', '#ff8080', '#ffd369', '#52de97', '#51dacf',
          '#4BC0C0', '#2d3561', '#540e33', '#de356a', '#fc7fb2',
        ],
      }],
    }
    return data
  }

  render() {
    const { uxerId, projectId, project, resultSummarize, avgTime } = this.state
    return (
      <div>
        <section id='summarize'>
          <NavbarUXer title={`${project && project.name}`} uxerId={uxerId} />
          <SubNavbar uxerId={uxerId} projId={projectId} active={`summarize`} />
          <Container>
            {resultSummarize &&
              <>
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
                            <p className='avg-time'>{resultSummarize.allExper <= 1 ? 'No Average' : avgTime}</p>
                          </Col>
                        </Row>
                        <Row className='align-items-center'>
                          <Col xs={12} md={4} lg={3} >
                            <p className='title-head'>Number of Note : </p>
                          </Col>
                          <Col xs={12} md={8} lg={9}>
                            {resultSummarize.allExper <= 1 ? (
                              <p>{`${resultSummarize.takeNoteExper} / ${resultSummarize.allExper} person`}</p>
                            ) : (
                                <p>{`${resultSummarize.takeNoteExper} / ${resultSummarize.allExper} persons`}</p>
                              )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                    {resultSummarize.summary.map(result => (
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
                                <Row className='justify-content-start'>
                                  <Col xs={12}>
                                    <Pie
                                      data={this.data(result.options, result.answer)}
                                      legend={{
                                        position: 'bottom',
                                      }}
                                      width={100}
                                      height={35}
                                    />
                                  </Col>
                                </Row>
                              )}
                          </Col>
                        </Row>
                        <br />
                      </>
                    ))}
                  </Col>
                </Row>
              </>
            }
          </Container>
        </section>
      </div>
    )
  }
}

export default Summarize