import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, Label, Input } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import NotSupport from '../../components/utils/notSupport'
import NavbarUXer from '../../components/utils/navbarUXer'

import '../../static/sass/experimenter/answer.scss'
import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import ExperProfile from '../../components/uxer/videoresult/profileBlock'

import '../../static/sass/uxer/videoResult.scss'

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
})(props => <Checkbox color='default' className='MuiFormControlLabel-root no-margin-right' {...props} />)

const CheckboxGroup = ({ fields, options }) => {
  const toggle = (event, option) => {
    if (event.target.checked) fields.push(option);
    else fields.remove(option);
  }

  return (
    <div>
      <>
        {options.map(option => (
          <div key={option.id} className=''>
            <Label className='no-margin w-100'>
              <CheckboxButton value={option.data.option} onChange={event => toggle(event, option.data.option)} />
              <span className='text-checkbox'>{option.data.option}</span>
            </Label>
          </div>
        ))}
      </>
    </div>
  );
}

class AnswerTestnote extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props
    this.state = {
      uxerId: match.params.id,
      projectId: match.params.projId,
      experId: match.params.experId,
      experiment: undefined,
      answer: [],
      answerId: '934DlGsmzBo8JlZWoDRL',
      project: undefined,
      testnote: [],
      experList: [],
    }
  }

  async componentDidMount() {
    this.getProject()
    this.getTestnote()
    this.getExperimenter()
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
    console.log(values)
    console.log('test123')
    // try {
    //   const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}/${APIURI.ANSWER}${this.state.answerId}/update/`, values)
    //   if (response.status !== 200) {
    //     throw new Error('CANNOT SUBMIT TESTNOTE')
    //   }
    //   this.props.history.push(`/experimenter/${this.state.experId}/thanks`)
    // } catch (e) {
    //   console.error(e)
    // }
  }

  getTestnote = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/test-note`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET TESTNOTE')
      }
      this.setState({ testnote: response.data })
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

  render(props) {
    const { testnote, project, experList, uxerId, projId } = this.state
    const experiment = this.state.experiment
    return (
      <div>
        <section id='video-result' className='d-none d-md-block'>
          <NavbarUXer title={`${project && project.name}`} />
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
                        <FontAwesomeIcon
                          icon={faTimes}
                          size='3x'
                          color='#303030'
                          className='plus'
                          link={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiment/answertestnote`}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={3} xl={4} className='d-none d-md-block' />
              <Col xs={12} sm={4} md={3} xl={2} className='d-none d-sm-block'>
                <FontAwesomeIcon
                  icon={faTimes}
                  size='3x'
                  color='#303030'
                  className='plus'
                  link={`/uxer/${this.props.uxerId}/project/${this.props.projId}/experiment/answertestnote`}
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
        </section>

        <NotSupport className='d-md-none' />
        <section id='answer' className='d-none d-md-block'>
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
                                <h2 className='title'>'{project && `${project.name}`}' <span>Testnote</span></h2>
                              </Col>
                            </Row>
                            <br />
                            {testnote.map((question, index) => (
                              <>
                                <Row key={question.id}>
                                  <Col xs={12}>
                                    <Label className='no-margin w-100'>
                                      <Row>
                                        <Col xs={12}>
                                          <Field component='input' type='hidden' name={`answers[${index}][question_key]`} initialValue={question.id} />
                                          <p className='question'>{question.data.question.question}</p>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={12}>
                                          {question.data.question.type_form === 'textbox' &&
                                            <Field name={`answers[${index}][answer]`} type='textarea'>
                                              {({ input, meta }) => (
                                                <>
                                                  <Row className='align-items-center'>
                                                    <Col xs={12}>
                                                      <Label className=' w-100'>
                                                        <Input {...input} rows='4' className='text-style' />
                                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                                      </Label>
                                                    </Col>
                                                  </Row>
                                                </>
                                              )}
                                            </Field>
                                          }
                                          {question.data.question.type_form === 'multiple' &&
                                            <>
                                              <RadioGroup
                                                aria-label='answer'
                                                name={`answers[${index}][answer]`}
                                              >
                                                {question.data.options.map(option => (
                                                  <>
                                                    <Field name={`answers[${index}][answer]`} type='text' key={option.id}>
                                                      {({ input, meta }) => (
                                                        <>
                                                          <FormControlLabel {...input} value={option.data.option} control={<RadioButton />} label={option.data.option} />
                                                          {meta.touched && meta.error && <span>{meta.error}</span>}
                                                        </>
                                                      )}
                                                    </Field>
                                                  </>
                                                ))}
                                              </RadioGroup>
                                            </>
                                          }
                                          {question.data.question.type_form === 'checkbox' &&
                                            <>
                                              <FieldArray
                                                name={`answers[${index}][answer]`}
                                                component={CheckboxGroup}
                                                options={question.data.options}
                                                className='MuiFormControlLabel-root'
                                              />
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
                          <Col xs={12} md={4} className='text-center'>
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