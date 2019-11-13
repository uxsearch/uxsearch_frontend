import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, Label, Input } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { Checkbox, Radio, RadioGroup, FormGroup, FormControlLabel, withStyles } from '@material-ui/core'
import swal from 'sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'
import NotSupport from '../../components/utils/notSupport'
import NavbarUXer from '../../components/utils/navbarUXer'
import ExperProfile from '../../components/uxer/videoresult/profileBlock'

import '../../static/sass/uxer/answerTestnote.scss'

const RadioButton = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#28a1f2',
    },
    fontFamily: 'Muli'
  },
  checked: {},
})(props => <Radio color='default' {...props} />);

const CheckboxButton = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#28a1f2',
    },
    fontFamily: 'Muli'
  },
  checked: {},
})(props => <Checkbox color='default' {...props} />)

class AnswerTestnote extends React.Component {
  constructor(props) {
    super(props);
    const { computedMatch } = props
    this.state = {
      uxerId: computedMatch.params.id,
      projectId: computedMatch.params.projId,
      experId: computedMatch.params.experId,
      experiment: undefined,
      project: undefined,
      noteAndAnswer: [],
      checkboxState: {},
      multipleState: {},
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await this.getProject()
    await this.getExperimenter()
    await this.formatData()
  }

  getExperimenter = async () => {
    try {
      const response = await axios.get(`${APIURI.EXPERIMENTER}${this.state.experId}/`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET EXPERIMENT PROFILE')
      }
      this.setState({ experiment: response.data.data })
    } catch (error) {
      console.error(error)
    }
  }

  getAge(birthdate) {
    const today = new Date()
    const age = today.getFullYear() - birthdate.getFullYear()
    return age + ' years'
  }

  submitTestnote = async (values) => {
    let form = []
    this.state.noteAndAnswer.forEach((qNA, index) => {
      if (qNA.question.type_form === 'textbox') {
        form.push({
          question_key: qNA.question.questionId,
          answerId: qNA.answer.answerId,
          answer: values.answers[index].answer
        })
      }

      if (qNA.question.type_form === 'checkbox') {
        let allAns = qNA.question.options.filter((option, index) => {
          return this.state.checkboxState[qNA.question.questionId][index]
        }).map(option => {
          return option.data.option
        })
        form.push({
          question_key: qNA.question.questionId,
          answerId: qNA.answer.answerId,
          answer: allAns
        })
      }

      if (qNA.question.type_form === 'multiple') {
        form.push({
          question_key: qNA.question.questionId,
          answerId: qNA.answer.answerId,
          answer: this.state.multipleState[qNA.question.questionId]
        })
      }
    })

    let answerForm = {
      answers: form
    }

    try {
      const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}/answer-note/update `, answerForm)
      if (response.status !== 200) {
        throw new Error('CANNOT CREATE TESTNOTE')
      }
      this.props.history.push(`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/${this.state.experId}/answertestnote`)
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
      const testnote = response.data
      return testnote
    } catch (e) {
      console.error(e)
    }
  }

  getAnswerTestnote = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}/answer-note`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET ANSWER TESTNOTE')
      }
      const answers = response.data
      return answers
    } catch (e) {
      console.error(e)
    }
  }

  formatData = async () => {
    const questions = await this.getTestnote()
    const answers = await this.getAnswerTestnote()
    let questionAndAnswer = []
    var checkboxState = {}
    var multipleState = {}

    if (questions.length !== 0) {
      for (let i = 0; i < questions.length; i++) {
        if (answers.length !== 0) {
          // MARK: beware idex out of bounds
          questionAndAnswer.push({
            question: {
              questionId: questions[i].id,
              question: questions[i].data.question.question,
              type_form: questions[i].data.question.type_form,
              options: questions[i].data.options
            },
            answer: {
              answerId: answers[i].answer.id,
              answer: answers[i].answer.answer
            }
          })
          if (questions[i].data.question.type_form === 'checkbox') {
            questions[i].data.options.forEach(({ data }) => {
              const { option } = data
              if (checkboxState[questions[i].id] !== undefined) {
                checkboxState[questions[i].id] = [
                  ...checkboxState[questions[i].id],
                  answers[i].answer.answer.includes(option),
                ]
              } else {
                checkboxState[questions[i].id] = [answers[i].answer.answer.includes(option)]
              }
            })
          }
          if (questions[i].data.question.type_form === 'multiple') {
            multipleState[questions[i].id] = answers[i].answer.answer
          }
        } else {
          if (checkboxState[questions[i].id] === undefined) {
            checkboxState[questions[i].id] = [false]
          } else {
            checkboxState[questions[i].id] = [...checkboxState[questions[i].id], false]
          }
        }
        if (answers.length === 0) {
          questionAndAnswer.push({
            question: {
              questionId: questions[i].id,
              question: questions[i].data.question.question,
              type_form: questions[i].data.question.type_form,
              options: questions[i].data.options
            },
            answer: {
              answerId: undefined,
              answer: undefined
            }
          })
        }
      }
      this.setState({
        noteAndAnswer: questionAndAnswer,
        checkboxState,
        multipleState,
      })
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

  handleChange = questionId => event => {
    let { noteAndAnswer } = this.state
    noteAndAnswer.map(e => {
      if (e.question.type_form === "multiple") {
        e.answer.answer = event.target.value
        let multipleState = { ...this.state.multipleState }
        multipleState[questionId] = event.target.value
        this.setState({ multipleState })
      }
    })
  }

  handleChangeCheckbox = (name, questionId, indexOption) => event => {
    let checkboxState = [...this.state.checkboxState[questionId]]
    checkboxState[indexOption] = event.target.checked
    this.setState({
      checkboxState: {
        ...this.state.checkboxState,
        [questionId]: checkboxState
      }
    })
  }

  render() {
    const { uxerId, project, experiment, noteAndAnswer } = this.state

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='answerTestnote' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name} Test Note`} uxerId={uxerId} />
          <Container className='space-top'>
            <Row className=' align-items-center'>
              <Col xs={12} sm={8} md={6} lg={7}>
                <Row className='align-items-center justify-content-center'>
                  <Col xs={1} sm={4} xl={3}>
                    <div className='profile-block'>
                      <FontAwesomeIcon icon={faUserCircle} size='6x' />
                    </div>
                  </Col>
                  <Col xs={12} sm={8} xl={9}>
                    <Row>
                      <Col xs={12}>
                        <p className='no-margin exper-name'>{experiment && `${experiment.firstname} ${experiment.lastname}`}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={3} xl={4} className='d-none d-md-block' />
              <Col xs={12} sm={4} md={1} xl={1} className='d-none d-sm-block'>
                <img
                  src={require('../../static/img/close.svg')}
                  className="close_btn"
                  alt="close button"
                />
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
          </Container>

          <Container>
            <Row>
              <Col xs={12}>
                <Form
                  onSubmit={this.submitTestnote}
                  mutators={{ ...arrayMutators }}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12} className='answer-block'>
                            <Row className='space-head-block'>
                              <Col xs={12}>
                                <h2 className='title'> <span>Test Note Form</span></h2>
                              </Col>
                            </Row>
                            <br />
                            {noteAndAnswer.map((qNa, index) => (
                              <>
                                <Row key={qNa.question.id}>
                                  <Col xs={12}>
                                    <Label className='no-margin w-100' >
                                      <Row>
                                        <Col xs={12}>
                                          <Field component='input' type='hidden' name={`answers[${index}][question_key]`} initialValue={qNa.question.questionId} />
                                          <p className='question'>{qNa.question.question}</p>
                                        </Col>
                                      </Row>
                                      <Field component='input' type='hidden' name={`answers[${index}][answerId]`} initialValue={qNa.answer.answerId ? qNa.answer.answerId : ''} />
                                      <Row>
                                        <Col xs={12}>
                                          {qNa.question.type_form === 'textbox' &&
                                            <Field name={`answers[${index}][answer]`} type='textarea' initialValue={qNa.answer.answer}>
                                              {({ input, meta }) => (
                                                <>
                                                  <Row className='align-items-center'>
                                                    <Col xs={12}>
                                                      <Label className=' w-100'>
                                                        <Input {...input} rows='4' className='text-style'/>
                                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                                      </Label>
                                                    </Col>
                                                  </Row>
                                                </>
                                              )}
                                            </Field>
                                          }
                                          {qNa.question.type_form === 'multiple' &&
                                            <>
                                              <RadioGroup
                                                aria-label='answer'
                                                name={`answers[${index}][answer]`}
                                                value={qNa.answer.answer}
                                                onChange={this.handleChange(qNa.question.questionId)}
                                              >
                                                {qNa.question.options.map(option => (
                                                  <>
                                                    <Field name={`answers[${index}][answer]`} type='text' key={option.id}>
                                                      {({ input, meta }) => (
                                                        <>
                                                          <FormControlLabel {...input}
                                                            value={option.data.option}
                                                            control={<RadioButton />}
                                                            label={option.data.option}
                                                          />
                                                          {meta.touched && meta.error && <span>{meta.error}</span>}
                                                        </>
                                                      )}
                                                    </Field>
                                                  </>
                                                ))}
                                              </RadioGroup>
                                            </>
                                          }
                                          {qNa.question.type_form === 'checkbox' &&
                                            <>
                                              <FormGroup>
                                                {qNa.question.options.map((option, indexOption) => (
                                                  <Field name={`answers[${index}][answer]`} type='text' key={option.id}>
                                                    {({ input, meta }) => (
                                                      <>
                                                        <>
                                                          <FormControlLabel {...input}
                                                            value={option.data.option}
                                                            control={
                                                              <CheckboxButton
                                                                checked={this.state.checkboxState[qNa.question.questionId][indexOption]}
                                                                onChange={this.handleChangeCheckbox(option.data.option, qNa.question.questionId, indexOption)}
                                                              />
                                                            }
                                                            label={option.data.option}
                                                          />
                                                          {meta.touched && meta.error && <span>{meta.error}</span>}
                                                        </>

                                                      </>
                                                    )}
                                                  </Field>
                                                ))}
                                              </FormGroup>
                                            </>
                                          }
                                        </Col>
                                      </Row>
                                    </Label>
                                  </Col>
                                </Row>
                                <br />
                              </>
                            ))}
                          </Col>
                        </Row>
                        <Row className='justify-content-center space-btn'>
                          <Col xs={12} md={4} >
                            <Button className='btn-submit-test'>Submit</Button>
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

export default withRouter(AnswerTestnote)