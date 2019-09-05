import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap'
import { withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faPlusCircle, faGripLines, faTextHeight } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import NotSupport from '../../components/utils/notSupport'
import NavbarUXer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar'

import '../../static/sass/uxer/createQuestion.scss'

const SearchField = withStyles({
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

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerType: 'Text box',
      questions: []
    };
  }

  addQuestion() {
    if (this.state.questions.length < 10) {
      const question = 'Text box'
      const questions = this.state.questions
      questions.push(question)
      this.setState({ question })
    }
  }

  render() {
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='questionnaire' className='d-none d-md-block'>
          <NavbarUXer />
          <SubNavbar />
          <Container>
            <Row>
            </Row>
            <Row className='questionnaire-block no-gutters'>
              <Col xs={12} md={12}>
                <Row>
                  <Col xs={12} md={12} lg={12} className='space-side '>
                    <h2>Web Development Questionnaire </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} md={1}>
                  </Col>
                  <Col xs={12} md={10} lg={10}>
                    <SearchField
                      id='standard-search'
                      label='Form Description'
                      type='search'
                      className='w-100 no-margin'
                      margin='normal'
                    />
                  </Col>
                  <Col xs={1} md={1}>
                  </Col>
                </Row>
                <br />
                <Col xs={12} md={12}>
                  <hr className='black-line' />
                </Col>
                <br />
                <br />

                {this.state.questions.map(question => (
                  <Row>
                    <Col>
                      {this.state.answerType === 'Text box' && (
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
                                        <Col xs={12} md={6} lg={8}>
                                          <SearchField
                                            id='standard-search'
                                            label='Question'
                                            type='search'
                                            className='w-100 no-margin'
                                            margin='normal'
                                          />
                                        </Col>
                                        <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                          <Dropdown
                                            isOpen={this.state.dropdownTextbox}
                                            toggle={() => { this.setState({ dropdownTextbox: !this.state.dropdownTextbox }); }}
                                            onChange={() => { this.setState({ DropdownItem: !this.state.DropdownItem }); }}
                                          >
                                            <DropdownToggle
                                              tag="Dropdown"
                                              onClick={this.toggleSort}
                                              data-toggle="dropdown"
                                              aria-expanded={this.state.dropdownTextbox}
                                            >
                                              <Col xs={12} md={12}>
                                                <Dropdown className='btn-multiple'>
                                                  <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />
                                                  {this.state.answerType}
                                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                                </Dropdown>
                                              </Col>
                                            </DropdownToggle>
                                            <DropdownMenu className='btn-secondary indropdown text-center '>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Multiple Choice' })}>
                                                <Dropdown >Multiple Choice</Dropdown>
                                              </DropdownItem>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Check box' })}>
                                                <Dropdown>Check box</Dropdown>
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </Dropdown>
                                        </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                        <Col xs={12} md={12}>
                                          <Input type='textbox' name='answer1' rows="5" className='text-style ' />
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

                      {this.state.answerType === 'Multiple choice' &&
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
                                          <SearchField
                                            id='standard-search'
                                            label='Question'
                                            type='search'
                                            className='w-100 no-margin'
                                            margin='normal'
                                          />
                                        </Col>
                                        <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                          <Dropdown
                                            isOpen={this.state.dropdownMultiple}
                                            toggle={() => { this.setState({ dropdownMultiple: !this.state.dropdownMultiple }); }}
                                          >
                                            <DropdownToggle
                                              tag="Dropdown"
                                              onClick={this.toggleSort}
                                              data-toggle="dropdown"
                                              aria-expanded={this.state.dropdownMultiple}
                                            >
                                              <Col xs={12} md={12}>
                                                <Dropdown className='btn-multiple'>
                                                  <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-mul' />
                                                </Dropdown>
                                              </Col>
                                            </DropdownToggle>
                                            <DropdownMenu className='btn-secondary indropdown text-center '>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Text box' })}>
                                                <Dropdown>Text box</Dropdown>
                                              </DropdownItem>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Check box' })}>
                                                <Dropdown>Check box</Dropdown>
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </Dropdown>
                                        </Col>
                                      </Row>
                                      <br />
                                      <Row className='no-margin w-100'>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                                        </Col>
                                        <Col xs={10} className='choice'>
                                          <Form>
                                            <FormGroup>
                                              <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="Option1" />
                                            </FormGroup>
                                          </Form>
                                        </Col>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                        </Col>
                                      </Row>
                                      <Row className='no-margin w-100'>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                                        </Col>
                                        <Col xs={10} className='choice'>
                                          <Form>
                                            <FormGroup>
                                              <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="AddOption" />
                                            </FormGroup>
                                          </Form>
                                        </Col>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
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

                      {this.state.answerType === 'Check box' && (
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
                                          <SearchField
                                            id='standard-search'
                                            label='Question'
                                            type='search'
                                            className='w-100 no-margin'
                                            margin='normal'
                                          />
                                        </Col>
                                        <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                          <Dropdown
                                            isOpen={this.state.dropdownCheckbox}
                                            toggle={() => { this.setState({ dropdownCheckbox: !this.state.dropdownCheckbox }); }}
                                          >
                                            <DropdownToggle
                                              tag="Dropdown"
                                              onClick={this.toggleSort}
                                              data-toggle="dropdown"
                                              aria-expanded={this.state.dropdownCheckbox}
                                            >
                                              <Col xs={12} md={12}>
                                                <Dropdown className='btn-multiple'><FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />CheckBox
                                                <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-check' />
                                                </Dropdown>
                                              </Col>
                                            </DropdownToggle>
                                            <DropdownMenu className='btn-secondary indropdown text-center '>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Text box' })}>
                                                <Dropdown>Text box</Dropdown>
                                              </DropdownItem>
                                              <DropdownItem onClick={() => this.setState({ answerType: 'Multiple Choice' })}>
                                                <Dropdown>Multiple Choice</Dropdown>
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </Dropdown>
                                        </Col>
                                      </Row>
                                      <br />
                                      <Row className='no-margin w-100'>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                                        </Col>
                                        <Col xs={10} className='choice'>
                                          <Form>
                                            <FormGroup>
                                              <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="Choice1" />
                                            </FormGroup>
                                          </Form>
                                        </Col>

                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                        </Col>
                                      </Row>
                                      <Row className='no-margin w-100'>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                                        </Col>
                                        <Col xs={10} className='choice'>
                                          <Form>
                                            <FormGroup>
                                              <Input type="multiple" name="choice5" id="exampleMultiple" placeholder="AddOption" />
                                            </FormGroup>
                                          </Form>
                                        </Col>
                                        <Col xs={1}>
                                          <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
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
                    </Col>
                  </Row>
                ))}


                {/* textbox */}
                {this.state.answerType === 'Text box' &&
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
                                  <Col xs={12} md={6} lg={8}>
                                    <SearchField
                                      id='standard-search'
                                      label='Question'
                                      type='search'
                                      className='w-100 no-margin'
                                      margin='normal'
                                    />
                                  </Col>
                                  <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                    <Dropdown
                                      isOpen={this.state.dropdownTextbox}
                                      toggle={() => { this.setState({ dropdownTextbox: !this.state.dropdownTextbox }); }}
                                    >
                                      <DropdownToggle
                                        tag="Dropdown"
                                        onClick={this.toggleSort}
                                        data-toggle="dropdown"
                                        aria-expanded={this.state.dropdownTextbox}
                                      >
                                        <Col xs={12} md={12}>
                                          <Dropdown className='btn-multiple'>
                                            <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />
                                            {this.state.answerType}
                                            <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                          </Dropdown>
                                        </Col>
                                      </DropdownToggle>
                                      <DropdownMenu className='btn-secondary indropdown text-center '>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Multiple Choice' })}>
                                          <Dropdown >Multiple Choice</Dropdown>
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Check box' })}>
                                          <Dropdown>Check box</Dropdown>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                                <br />
                                <Row>
                                  <Col xs={12} md={12}>
                                    <Input type='textbox' name='answer1' rows="5" className='text-style ' />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <br />
                  </>
                }

                {this.state.answerType === 'Multiple Choice' &&
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
                                    <SearchField
                                      id='standard-search'
                                      label='Question'
                                      type='search'
                                      className='w-100 no-margin'
                                      margin='normal'
                                    />
                                  </Col>
                                  <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                    <Dropdown
                                      isOpen={this.state.dropdownMultiple}
                                      toggle={() => { this.setState({ dropdownMultiple: !this.state.dropdownMultiple }); }}
                                    >
                                      <DropdownToggle
                                        tag="Dropdown"
                                        onClick={this.toggleSort}
                                        data-toggle="dropdown"
                                        aria-expanded={this.state.dropdownMultiple}
                                      >
                                        <Col xs={12} md={12}>
                                          <Dropdown className='btn-multiple'>
                                            <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-mul' />
                                          </Dropdown>
                                        </Col>
                                      </DropdownToggle>
                                      <DropdownMenu className='btn-secondary indropdown text-center '>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Text box' })}>
                                          <Dropdown>Text box</Dropdown>
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Check box' })}>
                                          <Dropdown>Check box</Dropdown>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                                <br />
                                <Row className='no-margin w-100'>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                                  </Col>
                                  <Col xs={10} className='choice'>
                                    <Form>
                                      <FormGroup>
                                        <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="Option1" />
                                      </FormGroup>
                                    </Form>
                                  </Col>

                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                  </Col>
                                </Row>
                                <Row className='no-margin w-100'>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                                  </Col>
                                  <Col xs={10} className='choice'>
                                    <Form>
                                      <FormGroup>
                                        <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="AddOption" />
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <br />
                  </>
                }

                {this.state.answerType === 'Check box' &&
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
                                    <SearchField
                                      id='standard-search'
                                      label='Question'
                                      type='search'
                                      className='w-100 no-margin'
                                      margin='normal'
                                    />
                                  </Col>
                                  <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                                    <Dropdown
                                      isOpen={this.state.dropdownCheckbox}
                                      toggle={() => { this.setState({ dropdownCheckbox: !this.state.dropdownCheckbox }); }}
                                    >
                                      <DropdownToggle
                                        tag="Dropdown"
                                        onClick={this.toggleSort}
                                        data-toggle="dropdown"
                                        aria-expanded={this.state.dropdownCheckbox}
                                      >
                                        <Col xs={12} md={12}>
                                          <Dropdown className='btn-multiple'><FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />CheckBox
                                          <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-check' />
                                          </Dropdown>
                                        </Col>
                                      </DropdownToggle>
                                      <DropdownMenu className='btn-secondary indropdown text-center '>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Text box' })}>
                                          <Dropdown>Text box</Dropdown>
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.setState({ answerType: 'Multiple Choice' })}>
                                          <Dropdown>Multiple Choice</Dropdown>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </Col>
                                </Row>
                                <br />
                                <Row className='no-margin w-100'>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                                  </Col>
                                  <Col xs={10} className='choice'>
                                    <Form>
                                      <FormGroup>
                                        <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="Choice1" />
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                  </Col>
                                </Row>
                                <Row className='no-margin w-100'>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                                  </Col>
                                  <Col xs={10} className='choice'>
                                    <Form>
                                      <FormGroup>
                                        <Input type="multiple" name="choice5" id="exampleMultiple" placeholder="AddOption" />
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col xs={1}>
                                    <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <br />
                  </>
                }

                <Row className='justify-content-center'>
                  <Col xs={12} md={4} className='text-center'>
                    <span className='btn-add-question' href='/uxer/project/experiment/question' onClick={() => this.addQuestion()}> <FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</span>
                  </Col>
                </Row>
              </Col>
            </Row >
            <Row className='justify-content-center space-btn'>
              <Col xs={12} md={4} className='text-center'>
                <Button className='btn-save-questionnaire' size='lg'>Save Questionnaire</Button>
              </Col>
            </Row>
          </Container >
        </section >
      </div>
    )
  }
}

export default CreateQuestion;

