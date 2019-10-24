import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { withStyles, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'

import NotSupport from "../../components/utils/notSupport";
import NavbarUXer from "../../components/utils/navbarUXer";
import SubNavbar from "../../components/utils/subNavbar";
import Question from "../../components/uxer/question";

import { DEFAULT_QUESTION } from './const'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import "../../static/sass/uxer/createQuestion.scss";

const QuestionField = withStyles({
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

class CreateQuestion extends Component {
  constructor(props) {
    super(props)
    const { match } = props
    this.state = {
      questions: [
        DEFAULT_QUESTION.TEXTBOX
      ],
      uxerId: match.params.id,
      projectId: match.params.projId,
      project: undefined,
    }
  }

  componentDidMount() {
    this.getProject()
    // this.getTestnote()
  }

  setQuestion(index, question) {
    const newQuestions = [...this.state.questions]
    newQuestions[index] = question
    this.setState({
      questions: newQuestions
    })
  }

  addQuestion() {
    if (this.state.questions.length < 15) {
      const questions = this.state.questions;
      questions.push(DEFAULT_QUESTION.TEXTBOX);
      this.setState({ questions: [...questions] });
    }
  }

  submitCreateQuestionnaire = async () => {
    try {
      const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/updatequestionnaire`, this.state.questions)
      console.log('>>>response', this.state.response)
      if (response.status !== 200) {
        throw new Error('CANNOT CREATE QUESTIONNAIRE')
      }
      // this.props.history.push(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/experiment/question`)
      this.props.history.push(`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/question`)
      console.log('>>>back', this.props.history)
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

  // getQuestionnaire = async (props) => {
  //   try {
  //     const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/test-note`)
  //     if (response.status !== 200) {
  //       throw new Error('CANNOT GET PROJECT')
  //     }
  //     this.setState({ questions: response.data ? response.data : DEFAULT_QUESTION.TEXTBOX })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  render() {
    const { uxerId, project, questions, projectId } = this.state

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='questionnaire' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} />
          <SubNavbar uxerId={uxerId} projId={projectId} />
          <Container>
            <Form
              onSubmit={this.submitCreateQuestionnaire}
              render={({
                handleSubmit, form, submitting, pristine
              }) => (
                  <form onSubmit={handleSubmit}>
                    <Row className="questionnaire-block no-gutters">
                      <Col xs={12} md={12}>
                        <Row>
                          <Col xs={12} md={12} lg={12} className="space-side ">
                            <h2>Web Development Questionnaire </h2>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={1} md={1}></Col>
                          <Col xs={12} md={10} lg={10}>
                            <QuestionField
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
                        {questions.map((question, index) => (
                          <>
                            <Question
                              question={question}
                              setQuestion={(index, question) => this.setQuestion(index, question)}
                              index={index}
                              key={index}
                            />
                          </>
                        ))}
                        <br />
                        <Row className="justify-content-center">
                          <Col xs={12} md={4} className="text-center">
                            <span
                              className="btn-add-question"
                              href="/uxer/project/experiment/question"
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
                        <Button type="submit" className='btn-save-questionnaire'>Save Questionnaire</Button>
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

export default withRouter(CreateQuestion);
