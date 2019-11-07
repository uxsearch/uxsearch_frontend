import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { withStyles, TextField, Table } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Form } from 'react-final-form'
import { withRouter } from 'react-router-dom'

import NotSupport from "../../components/utils/notSupport";
import NavbarUXer from "../../components/utils/navbarUXer";
import SubNavbar from "../../components/utils/subNavbar";
import Question from "../../components/uxer/question";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import "../../static/sass/uxer/summarize.scss";

const SearchField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#28a1f2"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#28a1f2"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#28a1f2"
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

        <section id='summarize' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} uxerId={uxerId} />
          <SubNavbar uxerId={uxerId} projId={projectId} active={`summarize`} />
          <Container>
            <Row className="questionnaire-block no-gutters">
              <Col xs={12} md={12}>
                <Row>
                  <Col xs={12} md={12} lg={12} className="space-side ">
                    <h3>{`${project && project.name}`} Summarize</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={10} lg={12} >
                    <Row>
                      <Col xs={12} md={10} lg={4} >
                        <h3>Average Time Test : </h3>
                      </Col>
                      <Col xs={3} md={3} lg={3} className="showMultiple">
                        <div className="showMultiple ">
                          <p>{avgTime}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} md={1}></Col>
                </Row>
                <br />
                {resultSummarize.map(result => (
                  <>
                    <Row  >
                      <Col xs={10} md={10} lg={12} >
                        <h3>{result.question}</h3>
                        {result.type_form === 'textbox' ? (
                          <Table striped className="table table-fixed">
                            <tbody>
                              {result.answer.map(answer => (
                                <tr>
                                  <td>{answer}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        ) : (
                            <Row>
                              {result.options.map((option, index) => (
                                <Col xs={3} md={3} lg={3} className="showMultiple">
                                  <div className="showMultiple ">
                                    <p>{option} <span>{result.answer[index]}</span></p>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          )}
                      </Col>
                    </Row>
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