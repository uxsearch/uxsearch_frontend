import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, ButtonDropdown, handleClick } from 'reactstrap'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faPlusCircle, faGripLines } from '@fortawesome/free-solid-svg-icons'

import NavbarUXer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';

import '../../static/sass/uxer/createQuestion.scss'

const RadioButton = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#28a1f2',
    },
    fontFamily: 'Muli'
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const CheckboxButton = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#28a1f2',
    },
  },
  checked: {},
})(props => <Checkbox color="default" classes='radio-text' {...props} />);

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

function myFunction() {
  document.getElementById("questionnaire").innerHTML = "Hello questionnaire!";
}

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: [
        { type: 'textbox', question: '1. What you expect in this program?' },
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
                    className='w-100 title-2 no-margin'
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
                    {this.state.object.map(data => (
                      <>
                        <FormGroup>
                          <Row className='justify-content-center'>
                            <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                            <Col xs={12}>
                              <Row className='no-margin w-100'>
                                <Col xs={8}>
                                  <SearchField
                                    id='standard-search'
                                    label='Untitled Question'
                                    type='search'
                                    className='w-100 title-2 no-margin'
                                    margin='normal'
                                  />
                                </Col>

                                {/* Text box */}
                                <Col xs={2} md={4} className='text-center'>
                                  <Dropdown
                                    isOpen={this.state.sortDropdownOpen}
                                    toggle={() => { this.setState({ sortDropdownOpen: !this.state.sortDropdownOpen }); }}
                                  >
                                    <DropdownToggle
                                      tag="Dropdown"
                                      onClick={this.toggleSort}
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.sortDropdownOpen}
                                    >
                                      <Dropdown className='btn-secondary'>Text box <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' /></Dropdown>
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
                                  {data.type === 'textbox' &&
                                    <Input type='textbox' name='answer1' rows="4" className='text-style ' />
                                  }
                                </Col>
                              </Row>
                              <br />
                            </Col>
                          </Row>
                        </FormGroup>
                      </>
                    ))}
                  </Form>
                </Col>
              </Row>

              <br />

              {/* Multiple choice
              <Row className='question-block'>
                <Col xs={12} className='space-side'>
                  <Form>
                    {this.state.object.map(data => (
                      <>
                        <FormGroup>
                          <Row className='justify-content-center'>
                            <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                            <Col xs={12}>
                              <Row className='no-margin w-100'>
                                <Col xs={8}>
                                  <SearchField
                                    id='standard-search'
                                    label='Untitled Question'
                                    type='search'
                                    className='w-100 title-2 no-margin'
                                    margin='normal'
                                  />
                                </Col>

                                <Col xs={2} md={4} className='text-center'>
                                  <Dropdown
                                    isOpen={this.state.sortDropdownOpen}
                                    toggle={() => { this.setState({ sortDropdownOpen: !this.state.sortDropdownOpen }); }}
                                  >
                                    <DropdownToggle
                                      tag="Dropdown"
                                      onClick={this.toggleSort}
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.sortDropdownOpen}
                                    >
                                      <Dropdown className='btn-secondary'>Multiple choice <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' /></Dropdown>
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
                              <Row>
                                <Col xs={12}>
                                  {data.type === 'multiple' &&
                                    <>
                                      <RadioGroup
                                        aria-label="answer2"
                                        name="answer2"
                                      >
                                        {data.option.map(option => (
                                          <>
                                            <FormControlLabel value={option.text} control={<RadioButton />} label={option.text} />
                                          </>
                                        ))}
                                      </RadioGroup>
                                    </>
                                  }
                                </Col>
                              </Row>
                              <br />
                            </Col>
                          </Row>
                        </FormGroup>
                      </>
                    ))}
                  </Form>
                </Col>
              </Row> */}

              {/* check box
              <Row className='question-block'>
                <Col xs={12} className='space-side'>
                  <Form>
                    {this.state.object.map(data => (
                      <>
                        <FormGroup>
                          <Row className='justify-content-center'>
                            <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                            <Col xs={12}>
                              <Row className='no-margin w-100'>
                                <Col xs={8}>
                                  <SearchField
                                    id='standard-search'
                                    label='Untitled Question'
                                    type='search'
                                    className='w-100 title-2 no-margin'
                                    margin='normal'
                                  />
                                </Col>

                                <Col xs={12} md={4} className='justify-content-center text-center' >
                                  <Dropdown
                                    isOpen={this.state.sortDropdownOpen}
                                    toggle={() => { this.setState({ sortDropdownOpen: !this.state.sortDropdownOpen }); }}
                                  >
                                    <DropdownToggle
                                      tag="Dropdown"
                                      onClick={this.toggleSort}
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.sortDropdownOpen}
                                    >
                                      <Dropdown className='btn-secondary'>Check box <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' /></Dropdown>
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

                              <Row>
                                <Col xs={12}>
                                  {data.type === 'checkbox' &&
                                    <>
                                      {data.option.map(option => (
                                        <>
                                          <FormGroup className='no-margin'>
                                            <FormControlLabel
                                              control={<CheckboxButton value={option.text} />}
                                              label={option.text}
                                            />
                                          </FormGroup>
                                        </>
                                      ))}
                                    </>
                                  }
                                </Col>
                              </Row>
                              <br />
                            </Col>
                          </Row>
                        </FormGroup>
                      </>
                    ))}
                  </Form>
                </Col>
              </Row> */}

              <br />
              <Row className='justify-content-center'>
                <Col xs={12} md={4} className='text-center'>
                  {/* <span className='btn-add-question' href='/uxer/project/experiment/question' onclick={answer()}  > <FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</span> */}
                  {/* <span className='btn-add-question' href='/uxer/project/experiment/question' onclick={onClick()}   > <FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</span> */}
                  <span className='btn-add-question' href='/uxer/project/experiment/question' onclick={myFunction}   > <FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</span>
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

