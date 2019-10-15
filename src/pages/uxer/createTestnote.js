import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { withStyles, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Form, Field } from 'react-final-form'

import NotSupport from "../../components/utils/notSupport";
import NavbarUXer from "../../components/utils/navbarUXer";
import SubNavbar from "../../components/utils/subNavbar";
import Testnote from "../../components/uxer/testnote";

import {DEFAULT_QUESTION} from './const'

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
      this.setState({ questions: [...questions]});
    }
  }

  submitCreateTestnote = async (values) => {
    console.log(">>> Submit")
    // try {
    //   const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}add/`, values)
    //     .then(result => {
    //       this.setState({ redirect: true })
    //       return result
    //       console.log('test CreateTestnote')
    //     })
    //   if (response.status !== 201) {
    //     throw new Error('CANNOT CREATE TESTNOTE')
    //   }
    //   this.props.history.push(`/${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${response.data.projects.id}/experiments`)
    // } catch (e) {
    //   console.error(e)
    // }
  }

  render() {
    const project = this.state.project
    const uxerId = this.state.uxerId
    const projId = this.state.projectId

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='questionnaire' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} />
          <SubNavbar uxerId={`${uxerId}`} projId={`${projId}`} />
          <Container>
            <Row></Row>
            <Row className="questionnaire-block no-gutters">
              <Col xs={12} md={12}>
                <Row>
                  <Col xs={12} md={12} lg={12} className="space-side ">
                    <h2>Usability Test Note : Web Development </h2>
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
                <Form
                  onSubmit={this.submitCreateTestnote}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit} id="test-note">
                        {this.state.questions.map((question, index) => (
                          <Testnote
                            question={question}
                            setQuestion={(index, question) => this.setQuestion(index, question)}
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
                      </form>
                    )}
                />
              </Col>
            </Row >
            <Row className='justify-content-center space-btn'>
              <Col xs={12} md={4} className='text-center'>
                <Button type="submit" form="test-note" className='btn-save-questionnaire' size='lg'>Save Usability Test Note</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default CreateTestnote;
