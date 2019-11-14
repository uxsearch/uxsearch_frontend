import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Form } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert'

import NotSupport from "../../components/utils/notSupport";
import NavbarUXer from "../../components/utils/navbarUXer";
import SubNavbar from "../../components/utils/subNavbar";
import Question from "../../components/uxer/question";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import "../../static/sass/uxer/createQuestion.scss";

class CreateQuestion extends React.Component {
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
      redirect: false,
      file: null,
      defaultQuestion: {
        questionId: '',
        question: '',
        value: '',
        type_form: 'textbox'
      }
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  async componentDidMount() {
    await this.getProject()
    await this.getQuestionnaire()
    if (this.state.questions.length === 0) {
      this.setState({
        questions: [this.state.defaultQuestion]
      })
    } else {

    }
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
    if (this.state.questions) {
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

  submitCreateQuestionnaire = async () => {
    try {
      const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/updatequestionnaire`, this.state.questions)
      if (response.status !== 200) {
        throw new Error('CANNOT CREATE TESTNOTE')
      }
      await this.getQuestionnaire()
    } catch (e) {
      console.error(e)
    }
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

  getQuestionnaire = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/questionnaire`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET QUESTIONNAIRE')
      }
      const { data } = response
      if (data.length === 0) {
        const questions = [];
        this.setState({ questions })
      }
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

  deleteQuestion(index) {
    const newQuestions = [...this.state.questions]
    newQuestions.splice(index, 1)
    this.setState({
      questions: newQuestions
    })
  }

  deleteOption = async (optionId, questionId) => {
    try {
      const response = await axios.delete(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.QUESTION}${questionId}/delete-option`, optionId)
      if (response.status !== 200) {
        throw new Error('CANNOT DELETE OBJECT')
      }
      this.getQuestionnaire()
    } catch (e) {
      console.error(e)
    }
  }

  removeQuestion = async (questionId, statusRemove) => {
    try {
      if (statusRemove === true) {
        const response = await axios.delete(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/delete-question`, questionId)
        if (response.status !== 200) {
          throw new Error('CANNOT DELETE QUESTION')
        }
        this.getQuestionnaire()
      }
    } catch (e) {
      console.error(e)
    }
  }

  modalSubmit = () => {
    swal("Save Questionnaire Successful", {
      icon: "success",
      timer: 1000,
      buttons: false
    });
  }

  render() {
    const { uxerId, projectId, project, questions, loading } = this.state
    const swal = require('sweetalert')

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='questionnaire' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} uxerId={uxerId} />
          <SubNavbar uxerId={uxerId} projId={projectId} active={`questionnaire`} />
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
                            <h2>{`${project && project.name}`} Questionnaire</h2>
                          </Col>
                        </Row>
                        {/* <Row>
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
                        </Row> */}
                        {/* <br /> */}
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
                            deleteOption={this.deleteOption}
                            removeQuestion={(questionId, statusRemove) => this.removeQuestion(questionId, statusRemove)}
                            deleteQuestion={() => this.deleteQuestion(index)}
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
                        <Button type="submit" className='btn-save-questionnaire' onClick={() => this.modalSubmit()}>Save Questionnaire</Button>

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