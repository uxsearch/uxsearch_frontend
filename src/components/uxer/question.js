import React from 'react'
import { Row, Col, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Label } from 'reactstrap'
import { withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faGripLines, faTextHeight, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Field } from 'react-final-form'

import '../../static/sass/uxer/createQuestion.scss'

const QuestionField = withStyles({
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

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      type: '',
      statusRemove: undefined,
      index: null,
      questionId: props.questionId,
      file: null,
    }
  }

  componentDidMount() {
    this.setState({
      type: this.props.question.type_form,
    })

  }

  changeQuestion(e) {
    const { question, setQuestion } = this.props
    setQuestion({
      ...question,
      question: e.target.value
    })
  }

  changeType(type) {
    const { setQuestion } = this.props
    this.setState({ type })
    switch (type) {
      case "multiple":
        setQuestion({
          questionId: '',
          question: '',
          type_form: 'multiple',
          options: [
            {
              optionId: '',
              option: 'option',
            }
          ]
        })
        break;
      case "checkbox":
        setQuestion({
          questionId: '',
          question: '',
          type_form: 'checkbox',
          options: [
            {
              optionId: '',
              option: 'option',
            }
          ]
        })
        break
      default:
        setQuestion({
          questionId: '',
          question: '',
          value: '',
          type_form: 'textbox'
        })
        break;
    }
  }

  changeOption(option, index) {
    const { question, setQuestion } = this.props
    const newQuestion = { ...question }
    newQuestion.options[index].option = option
    setQuestion(newQuestion)
  }


  addOption() {
    const { question, setQuestion, index } = this.props
    const newQuestion = { ...question }
    newQuestion.options.push({
      optionId: '',
      option: 'option',
    })
    setQuestion(newQuestion)
  }

  blockRemoveOption = (optionId, questionId, optionIndex) => {
    const option = { optionId: optionId }
    this.props.deleteOption(option, questionId)

    const { question, setQuestion, index } = this.props
    const newQuestion = { ...question }
    newQuestion.options.splice(optionIndex, 1)
    setQuestion(newQuestion)
    console.log(">>>questionId222", questionId)

  }

  blockRemoveQuestion = (questionId) => {
    const question = { questionId: questionId }
    const statusRemove = true
    this.props.removeQuestion(question, statusRemove)
    console.log(">>>questionId small", questionId)
  }

  render() {
    const { type, index } = this.state
    const { projectId, projectLink, projectName, projectDescription, projectCover, questionId } = this.state
    return (
      <Row className='question-block' >
        <Col xs={12}>
          <Form>
            <FormGroup>
              <Row className='justify-content-center'>
                <Col xs={12} className='text-end' onClick={() => this.blockRemoveQuestion(this.props.question.questionId)}>
                  {/* <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' /> */}
                  {/* <img
                    src={require('../../static/img/close.svg')}
                    className="close_btn"
                    alt="close button"
                  /> */}
                  <FontAwesomeIcon icon={faTimes} color='#efefef' size='2x' className='close_btn' />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12}>
                  <Row className='no-margin w-100'>
                    <Field name={`questions[${index}][question]`} type='text'>
                      {({ input, meta }) => (
                        <>
                          <Col xs={12} md={6} lg={8}>
                            <QuestionField
                              {...input}
                              label='Question'
                              type='search'
                              className='w-100 no-margin'
                              margin='normal'
                              value={this.props.question.question}
                              onChange={e => this.changeQuestion(e)}
                            />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                          </Col>
                        </>
                      )}
                    </Field>
                    <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                      <Dropdown
                        isOpen={this.state.isOpen}
                        toggle={() => { this.setState({ isOpen: !this.state.isOpen }); }}
                      >
                        <DropdownToggle
                          tag='Dropdown'
                          onClick={this.toggleSort}
                          data-toggle='dropdown'
                          aria-expanded={this.state.isOpen}
                        >
                          <Col xs={12} md={12}>
                            <Dropdown className='btn-multiple'>
                              {type === 'textbox' && (
                                <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />
                              )}
                              {type === 'multiple' && (
                                <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />
                              )}
                              {type === 'checkbox' && (
                                <FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />
                              )}
                              {type}
                              <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                            </Dropdown>
                          </Col>
                        </DropdownToggle>
                        <DropdownMenu className='btn-secondary indropdown text-center '>
                          <DropdownItem onClick={() => this.changeType('multiple')}>
                            <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                          </DropdownItem>
                          <DropdownItem onClick={() => this.changeType('checkbox')}>
                            <FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />Check Box
                          </DropdownItem>
                          <DropdownItem onClick={() => this.changeType('textbox')}>
                            <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />Text box
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <br />
                  {type === 'textbox' && (
                    <Row>
                      <Col xs={12} md={12}>
                        <Form>
                          <FormGroup>
                            <Input type='textbox' name='answer1' rows='5' className='text-style ' />
                            <Field component='input' type='hidden' name={`answers[0][options]`} initialValue={[]} />
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  )}
                  {type === 'multiple' &&
                    <>
                      {this.props.question.options.map((option, index) => (
                        <Row className='no-margin w-100' key={index}>
                          <Col xs={1}>
                            <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                          </Col>
                          <Col xs={10} className='choice'>
                            <Form>
                              <FormGroup>
                                <Input
                                  className='font'
                                  type='multiple'
                                  placeholder='AddOption'
                                  value={option.option}
                                  onChange={e => {
                                    this.changeOption(e.target.value, index)
                                  }} />
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col xs={1}>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size='2x'
                              color='#909090'
                              className='icon-delete'
                              onClick={() => {
                                this.blockRemoveOption(option.optionId, this.props.question.questionId, index)
                              }}
                            />
                          </Col>
                        </Row>
                      ))}
                      <Row className='no-margin w-100 '>
                        <Col xs={1}>
                          <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                        </Col>
                        <Col xs={10}>
                          <Form>
                            <FormGroup>
                              <span onClick={() => this.addOption()} className='underline'>AddOption</span>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </>
                  }
                  {type === 'checkbox' && (
                    <>
                      {this.props.question.options.map((option, index) => (
                        <Row className='no-margin w-100' key={index}>
                          <Col xs={1}>
                            <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                          </Col>
                          {type === 'checkbox' && (
                            <>
                              <Col xs={10} className='choice'>
                                <Form>
                                  <FormGroup>
                                    <Input
                                      type='multiple'
                                      placeholder='AddOption'
                                      value={option.option}
                                      onChange={e => {
                                        this.changeOption(e.target.value, index)
                                      }} />
                                  </FormGroup>
                                </Form>
                              </Col>
                            </>
                          )}
                          <Col xs={1}>
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size='2x'
                              color='#909090'
                              className='icon-delete'
                              onClick={() => {
                                this.blockRemoveOption(option.optionId, this.props.question.questionId, index)
                              }}
                            />
                          </Col>
                        </Row>
                      ))}
                      <Row className='no-margin w-100'>
                        <Col xs={1}>
                          <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                        </Col>
                        <Col xs={10} >
                          <Form>
                            <FormGroup>
                              <span onClick={() => this.addOption()} className='underline'>AddOption</span>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </>
                  )
                  }
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Question