import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, ButtonDropdown, handleClick } from 'reactstrap'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faPlusCircle, faGripLines, faTextHeight } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare } from '@fortawesome/free-regular-svg-icons'

import NavbarUXer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';

import '../../static/sass/uxer/createQuestion.scss'

// const RadioButton = withStyles({
//   root: {
//     color: 'rgba(0, 0, 0, 0.54)',
//     '&$checked': {
//       color: '#28a1f2',
//     },
//     fontFamily: 'Muli'
//   },
//   checked: {},
// })(props => <Radio color="default" {...props} />);

// const CheckboxButton = withStyles({
//   root: {
//     color: 'rgba(0, 0, 0, 0.54)',
//     '&$checked': {
//       color: '#28a1f2',
//     },
//   },
//   checked: {},
// })(props => <Checkbox color="default" classes='radio-text' {...props} />);

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

// function myFunction() {
//   document.getElementById("questionnaire").innerHTML = "Hello questionnaire!";
// }

// function click() {
//   alert("Great Shot!");
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML ='id(textbox)'
// }

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: [
        //  { type: 'textbox', question: '1. What you expect in this program?' },
        // {
        //   type: 'multiple',
        //   question: '2. What is the overall feeling of this application?',
        //   option: [
        //     { text: 'Happy' },
        //     { text: 'Unconcern' },
        //     { text: 'Unhappy' }
        //   ]
        // },
        // {
        //   type: 'checkbox',
        //   question: '3. Something Questionnaire?',
        //   option: [
        //     { text: 'Choice 1' },
        //     { text: 'Choice 2' },
        //     { text: 'Choice 3' }
        //   ]
        // },
        // { type: 'textbox', question: '4. Something Questionnaire?' },
      ]
    }
  }

  render() {
    return (
      <section id='questionnaire'>
        <NavbarUXer />
        <SubNavbar />
        <Container>
          <Row className='questionnaire-block no-gutters'>
            <Col xs={12}>
              <Row>
                <Col xs={12} className='space-side'>
                  <p className='title'>Web Development Questionnaire </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className='space-side'>
                  <SearchField
                    id='standard-search'
                    label='Form Description'
                    type='search'
                    className='w-100 no-margin'
                    margin='normal'
                  />
                </Col>
              </Row>
              <br />
              <Col xs={12}>
                <hr className='black-line' />
              </Col>
              <br />
              <Row className='question-block'>
                <Col xs={12} className='space-side'>
                  <Form>
                    {/* {this.state.object.map(data => (
                      <> */}
                    <FormGroup>
                      <Row className='justify-content-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                        <Col xs={12}>
                          <Row className='no-margin w-100'>
                            <Col xs={12} md={8}>
                              <SearchField
                                id='standard-search'
                                label='Question'
                                type='search'
                                className='w-100 no-margin'
                                margin='normal'
                              />
                            </Col>
                            {/* Text box */}
                            <Col xs={12} md={4} className='text-center'>
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
                                    <Dropdown className='btn-secondary'><FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight ' /> Text box
                                      <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                    </Dropdown>
                                  </Col>
                                </DropdownToggle>
                                <DropdownMenu className='btn-secondary indropdown text-center '>
                                  <DropdownItem>
                                    <Dropdown>Multiple choice</Dropdown>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Dropdown>Check box</Dropdown>
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} md={12}>
                              {/* {data.type === 'textbox' && */}
                              <Input type='textbox' name='answer1' rows="4" className='text-style ' />
                              {/* } */}
                            </Col>
                          </Row>
                          <br />
                        </Col>
                      </Row>
                    </FormGroup>
                    {/* </>
                    ))} */}
                  </Form>
                </Col>
              </Row>
              <br />
              {/* Multiple choice */}
              <Row className='question-block'>
                <Col xs={12} className='space-side'>
                  <Form>
                    <FormGroup>
                      <Row className='justify-content-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                        <Col xs={12}>
                          <Row className='no-margin w-100'>
                            <Col xs={12} md={8}>
                              <SearchField
                                id='standard-search'
                                label='Question'
                                type='search'
                                className='w-100 no-margin'
                                margin='normal'
                              />
                            </Col>
                            <Col xs={12} md={4} className='text-center'>
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
                                    <Dropdown className='btn-multiple'><FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-multiple' />
                                    </Dropdown>
                                  </Col>
                                </DropdownToggle>
                                <DropdownMenu className='btn-secondary indropdown text-center '>
                                  <DropdownItem>
                                    <Dropdown>Text box</Dropdown>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Dropdown>Check box</Dropdown>
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </Col>
                          </Row>
                          <br />
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={1} >
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#303030' className='icon-multiple' />
                            </Col>
                            <Col xs={12} md={11} className='choice'>
                              <Form>
                                <FormGroup>
                                  <Input type="multiple" name="choice1" id="exampleMultiple" placeholder="Wonderful" />
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={1} >
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#303030' className='icon-multiple' />
                            </Col>
                            <Col xs={12} md={11} className='choice'>
                              <Form>
                                <FormGroup>
                                  <Input type="multiple" name="choice2" id="exampleMultiple" placeholder="Happy" />
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={1}  >
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#303030' className='icon-multiple' />
                            </Col>
                            <Col xs={12} md={11} className='choice'>
                              <Form>
                                <FormGroup>
                                  <Input type="multiple" name="choice3" id="exampleMultiple" placeholder="Unconcern" />
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={1}  >
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#303030' className='icon-multiple' />
                            </Col>
                            <Col xs={12} md={11} className='choice'>
                              <Form>
                                <FormGroup>
                                  <Input type="multiple" name="choice4" id="exampleMultiple" placeholder="Unhappy" />
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={1}  >
                              <FontAwesomeIcon icon={faCircle} size='2x' color='#303030' className='icon-multiple' />
                            </Col>
                            <Col xs={12} md={11} className='choice'>
                              <Form>
                                <FormGroup>
                                  <Input type="multiple" name="choice5" id="exampleMultiple" placeholder="Add Option" />
                                </FormGroup>
                              </Form>
                            </Col>
                          </Row>
                          <br />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <br />
              <Row className='question-block'>
                <Col xs={12} className='space-side'>
                  <Form>
                    <FormGroup>
                      <Row className='justify-content-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                        <Col xs={12}>
                          <Row className='no-margin w-100'>
                            <Col xs={12} md={8}>
                              <SearchField
                                id='standard-search'
                                label='Question'
                                type='search'
                                className='w-100 no-margin'
                                margin='normal'
                              />
                            </Col>
                            <Col xs={12} md={4} className='text-center'>
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
                                  <Col xs={12} md={12} className='justify-content-center align-items-end'>
                                    <Dropdown className='btn-secondary'><FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' /> Check box
                                      <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                    </Dropdown>
                                  </Col>
                                </DropdownToggle>
                                <DropdownMenu className='btn-secondary indropdown text-center '>
                                  <DropdownItem>
                                    <Dropdown>Text box</Dropdown>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <Dropdown>Multiple choice</Dropdown>
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </Col>
                          </Row>
                          <br />
                          <Row className='justify-content-center align-items-end space-side-2 '>
                            <Col xs={12} md={12}>
                              <Row >
                                <Col xs={12} md={1}  >
                                  <FontAwesomeIcon icon={faSquare} size='2x' color='#303030' className='icon-checkbox' />
                                </Col>
                                <Col xs={12} md={11} className='choice'>
                                  <Form>
                                    <FormGroup>
                                      <Input type="check" name="choice1" id="examplePassword" placeholder="Choice1" />
                                    </FormGroup>
                                  </Form>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} md={1}  >
                                  <FontAwesomeIcon icon={faSquare} size='2x' color='#303030' className='icon-checkbox' />
                                </Col>
                                <Col xs={12} md={11} className='choice'>
                                  <Form>
                                    <FormGroup>
                                      <Input type="check" name="choice2" id="examplePassword" placeholder="Choice2" />
                                    </FormGroup>
                                  </Form>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} md={1}  >
                                  <FontAwesomeIcon icon={faSquare} size='2x' color='#303030' className='icon-checkbox' />
                                </Col>
                                <Col xs={12} md={11} className='choice'>
                                  <Form>
                                    <FormGroup>
                                      <Input type="check" name="choice3" id="examplePassword" placeholder="Choice3" />
                                    </FormGroup>
                                  </Form>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} md={1}  >
                                  <FontAwesomeIcon icon={faSquare} size='2x' color='#303030' className='icon-checkbox' />
                                </Col>
                                <Col xs={12} md={11} className='choice'>
                                  <Form>
                                    <FormGroup>
                                      <Input type="check" name="choice4" id="examplePassword" placeholder="Choice4" />
                                    </FormGroup>
                                  </Form>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} md={1}  >
                                  <FontAwesomeIcon icon={faSquare} size='2x' color='#303030' className='icon-checkbox' />
                                </Col>
                                <Col xs={12} md={11} className='choice'>
                                  <Form>
                                    <FormGroup>
                                      <Input type="check" name="choice5" id="examplePassword" placeholder="Add Option" />
                                    </FormGroup>
                                  </Form>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <br />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <br />
              <Row className='justify-content-center'>
                <Col xs={12} md={4} className='text-center'>
                  <span className='btn-add-question' href='/uxer/project/experiment/question'> <FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='justify-content-center space-btn'>
            <Col xs={12} md={4} className='text-center'>
              <Button className='btn-save-questionnaire' size='lg'>Save Questionnaire</Button>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default CreateQuestion;

