import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from "reactstrap";
import { Form } from 'react-final-form'
import { withStyles, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import NotSupport from "../../components/utils/notSupport";
import NavbarUXer from "../../components/utils/navbarUXer";
import SubNavbar from "../../components/utils/subNavbar";
import Question from "../../components/uxer/question";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import "../../static/sass/uxer/createQuestion.scss";

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

class CreateTestnote extends Component {
  constructor(props) {
    super(props)
    const { computedMatch } = props
    this.state = {
      questions: [
        {
          questionId: '',
          question: '',
          value: '',
          type_form: 'textbox'
        }
      ],
      uxerId: computedMatch.params.id,
      projectId: computedMatch.params.projId,
      project: undefined,
      loading: false
    }
  }

  async componentDidMount() {
    await this.getProject()
    await this.getTestnote()
    this.setState({ loading: true })
  }

  setQuestion(index) {
    return (question) => {
      const newQuestions = [...this.state.questions]
      newQuestions[index] = { ...question }
      this.setState({
        questions: newQuestions
      })
    }
  }

  addQuestion() {
    if (this.state.questions.length < 15) {
      const questions = [...this.state.questions];
      questions.push({
        questionId: '',
        question: '',
        value: '',
        type_form: 'textbox'
      });
      this.setState({ questions });
    }
  }

  submitCreateTestnote = async () => {
    try {
      const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/updatenote`, this.state.questions)
      if (response.status !== 200) {
        throw new Error('CANNOT CREATE TESTNOTE')
      }
      await this.getProject()
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

  getTestnote = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/test-note`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET TESTNOTE')
      }
      const { data } = response
      if (data.length !== 0) {
        const questions = data.map(d => {
          if (d.data.question.type_form === "textbox") {
            return {
              questionId: d.id,
              question: d.data.question.question,
              value: '',
              type_form: d.data.question.type_form
            }
          } else {
            const options = d.data.options.map(option => {
              return {
                optionId: option.id,
                option: option.data.option
              }
            })
            return {
              questionId: d.id,
              question: d.data.question.question,
              type_form: d.data.question.type_form,
              options: options
            }
          }
        })
        this.setState({ questions })
      }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { uxerId, projectId, project, questions, loading } = this.state

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='questionnaire' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} uxerId={uxerId} />
          <SubNavbar uxerId={uxerId} projId={projectId} active={`note`} />
          <Container>
            <Form
              onSubmit={this.submitCreateTestnote}
              render={({
                handleSubmit, form, submitting, pristine
              }) => (
                  <form onSubmit={handleSubmit}>
                    <Row className="questionnaire-block no-gutters">
                      <Col xs={12} md={12}>
                        <Row>
                          <Col xs={12} md={12} lg={12} className="space-side ">
                            <h2>Usability Test Note : {`${project && project.name}`} </h2>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={1} md={1}></Col>
                          <Col xs={12} md={10} lg={10}>
                            <SearchField
                              id="standard-search"
                              label="Form Description"
                              type="search"
                              className="w-100 no-margin"
                              margin="normal"
                            />
                          </Col>
                          <Col xs={1} md={1}></Col>
                        </Row>
                        <br />
                        <Col xs={12} md={12}>
                          <hr className="black-line" />
                        </Col>
                        <br />
                        {loading && questions.map((question, index) => (
                          <Question
                            question={question}
                            setQuestion={(question) => this.setQuestion(index)(question)}
                            setOption={options => this.setOption(index)(options)}
                            index={index}
                            key={index}
                          />
                        ))}
                        <br />
                        <Row className="justify-content-center">
                          <Col xs={12} md={4} className="text-center">
                            <span
                              className="btn-add-question"
                              href="/uxer/project/experiment/testnote"
                              onClick={() => this.addQuestion()}
                            >
                              {" "}
                              <FontAwesomeIcon
                                icon={faPlusCircle}
                                size="1x"
                                color="#303030"
                              />{" "}
                              Add Question
                   				 	</span>
                            <br />
                          </Col>
                        </Row>
                      </Col>
                    </Row >
                    <Row className='justify-content-center space-btn'>
                      <Col xs={12} md={4} className='text-center'>
                        <Button type="submit" className='btn-save-questionnaire'>Save Usability Test Note</Button>
                      </Col>
                    </Row>
                  </form>
                )}
            />
          </Container>
        </section>
      </div>
    );
  }
}

export default withRouter(CreateTestnote);