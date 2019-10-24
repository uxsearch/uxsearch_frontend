
import React from 'react'
import { Row, Col, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Label } from 'reactstrap'
import { withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faGripLines, faTextHeight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Field } from 'react-final-form'
import { DEFAULT_QUESTION } from '../../pages/uxer/const'

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

class Testnote extends React.Component {
  constructor(props) {
    super(props)
    const { index } = this.props
    this.state = {
      indexQuestion: index,
      isOpen: false,
      type: props.type || 'textbox',
    }
  }

  changeQuestion(e) {
    const { question, setQuestion, index } = this.props
    setQuestion(index, {
      ...question,
      question: e.target.value
    })
  }

  changeType(type) {
    const { setQuestion, index } = this.props
    this.setState({ type })
    setQuestion(index, DEFAULT_QUESTION[type.toUpperCase()])
  }

  changeOption(option, index) {
    const { question, setQuestion, index: questionIndex } = this.props
    const newQuestion = { ...question }
    newQuestion.options[index].option = option
    setQuestion(questionIndex, newQuestion)
  }

  deleteOption(optionIndex) {
    const { question, setQuestion, index } = this.props
    const newQuestion = { ...question }
    newQuestion.options.splice(optionIndex, 1)
    setQuestion(index, newQuestion)
  }

  addOption() {
    const { question, setQuestion, index } = this.props
    const newQuestion = { ...question }
    newQuestion.options.push({
      optionId: '',
      option: 'option',
    })
    setQuestion(index, newQuestion)
  }

  render() {
    const { type, index } = this.state

    return (
      <>
        {type === 'textbox' && (
          <>
            <Row className='question-block' >
              <Col xs={12}>
                <Form>
                  <FormGroup>
                    <Row className='justify-content-center'>
                      <Col xs={12} className='text-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
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
                                    <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />
                                    {type}
                                    <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                  </Dropdown>
                                </Col>
                              </DropdownToggle>
                              <DropdownMenu className='btn-secondary indropdown text-center '>
                                <DropdownItem onClick={() => this.changeType('multiple')}>
                                  <Dropdown >Multiple Choice</Dropdown>
                                </DropdownItem>
                                <DropdownItem onClick={() => this.changeType('checkbox')}>
                                  <Dropdown>Check box</Dropdown>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs={12} md={12}>
                            <Form>
                              <FormGroup>
                                <Input type='textbox' name='answer1' rows='5' className='text-style ' />
                                <Field component='input' type='hidden' name={`answers[${index}][options]`} initialValue={[]} />
                              </FormGroup>
                            </Form>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </>
        )}

        {type === 'multiple' &&
          <>
            <Row className='question-block'>
              <Col xs={12}>
                <Form>
                  <FormGroup>
                    <Row className='justify-content-center'>
                      <Col xs={12} className='text-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={12}>
                        <Row className='no-margin w-100'>
                          <Col xs={12} md={6} lg={8}>
                            <QuestionField
                              label='Question'
                              type='search'
                              className='w-100 no-margin'
                              margin='normal'
                              value={this.props.question.question}
                              onChange={e => this.changeQuestion(e)}
                            />
                          </Col>
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
                                    <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                                    <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-mul' />
                                  </Dropdown>
                                </Col>
                              </DropdownToggle>
                              <DropdownMenu className='btn-secondary indropdown text-center '>
                                <DropdownItem onClick={() => this.changeType('textbox')}>
                                  <Dropdown>Text box</Dropdown>
                                </DropdownItem>
                                <DropdownItem onClick={() => this.changeType('checkbox')}>
                                  <Dropdown>Check box</Dropdown>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <br />

                        {this.props.question.options.map((option, index) => (
                          <Row className='no-margin w-100' key={index}>
                            <Col xs={1}>
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                            </Col>
                            {type === 'multiple' && (
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
                                  this.deleteOption(index)
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
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </>
        }

        {
          type === 'checkbox' && (
            <>
              <Row className='question-block'>
                <Col xs={12}>
                  <Form>
                    <FormGroup>
                      <Row className='justify-content-center'>
                        <Col xs={12} className='text-center'>
                          <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col xs={12}>
                          <Row className='no-margin w-100'>
                            <Col xs={12} md={6} lg={8}>
                              <QuestionField
                                label='Question'
                                type='search'
                                className='w-100 no-margin'
                                margin='normal'
                                value={this.props.question.question}
                                onChange={e => this.changeQuestion(e)}
                              />
                            </Col>
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
                                    <Dropdown className='btn-multiple'><FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />CheckBox
                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-check' />
                                    </Dropdown>
                                  </Col>
                                </DropdownToggle>
                                <DropdownMenu className='btn-secondary indropdown text-center '>
                                  <DropdownItem onClick={() => this.changeType('textbox')}>
                                    <Dropdown>Text box</Dropdown>
                                  </DropdownItem>
                                  <DropdownItem onClick={() => this.changeType('multiple')}>
                                    <Dropdown>Multiple Choice</Dropdown>
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </Col>
                          </Row>
                          <br />

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
                                    this.deleteOption(index)
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
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </>
          )
        }
      </>
    )
  }
}

export default Testnote