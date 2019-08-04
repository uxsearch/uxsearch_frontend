import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, DropdownItem } from 'reactstrap'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles } from '@material-ui/core'

import NavbarUXer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';

import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/uxer/createQuestion.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faPlusCircle, faTextHeight, faGripLines } from '@fortawesome/free-solid-svg-icons'


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

class CreateQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      object: [
        { type: 'textbox', question: '1. What you expect in this program?' },
        {
          type: 'multiple',
          question: '2. What is the overall feeling of this application?',
          option: [
            { text: 'Wonderful' },
            { text: 'Happy' },
            { text: 'Unconcern' },
            { text: 'UnHappy' },
            { text: 'Terrible' }
          ]
        },
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
      <section id='create-questionnaire'>
        <NavbarUXer />
        <SubNavbar />
        <div>
          <NotSupport className='d-md-none' />
          <section id='questionnaire' className='d-none d-md-block'>
            <Container>
              <Row className='questionnaire-block'>
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <p className='title'>Web Development Questionnaire </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <p className='title-2'>Your feedback is important for us. thank you very much. from “UX Search” (Description on questionnaire)</p>
                    </Col>
                    <Col xs={12}>
                      <hr className='black-line' />
                    </Col>
                  </Row>
                  <br />
                  <Col xs={12} className='question-block'>
                    <Form>
                      {this.state.object.map(data => (
                        <>
                          <FormGroup>
                            <Row className='justify-content-center'>
                              <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                              <Col xs={12}>
                                <Label className='no-margin w-100'>
                                  <Row>
                                    <Col xs={8}>
                                      <p className='question'>{data.question}</p>
                                    </Col>
                                    <Col xs={2} md={4} className='text-center'>
                                      <Button className='btn-text' size='lg'> <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' /> Text box
                                      <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' /></Button>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={12}>
                                      {data.type === 'textbox' &&
                                        <Input type='textbox' name='answer1' rows="4" className='text-style ' />
                                      }
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

                                      {/* {data.type === 'checkbox' &&
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
                                      }  */}
                                    </Col>
                                  </Row>
                                </Label>
                              </Col>
                            </Row>
                          </FormGroup>
                          <br />
                        </>
                      ))}
                    </Form>
                  </Col>
                  <br />
                  <Row className='justify-content-center'>
                    <Col xs={12} md={4} className='text-center'>
                      <Button className='btn-add-question' size='lg'><FontAwesomeIcon icon={faPlusCircle} size='1x' color='#303030' /> Add Question</Button>
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
        </div>
      </section>
    )
  }
}

export default CreateQuestion;