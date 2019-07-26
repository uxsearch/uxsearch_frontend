import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles } from '@material-ui/core'
import { Container, Row, Col } from 'reactstrap'

import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/answer.scss'
import { fontFamily } from '@material-ui/system';

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

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: [
        { type: 'textbox', question: '1. What you expect in this program?' },
        {
          type: 'multiple',
          question: '2. What is the overall feeling of this application?',
          option: [
            { text: 'Happy' },
            { text: 'Unconcern' },
            { text: 'Unhappy' }
          ]
        },
        {
          type: 'checkbox',
          question: '3. Something Questionnaire?',
          option: [
            { text: 'Choice 1' },
            { text: 'Choice 2' },
            { text: 'Choice 3' }
          ]
        },
        { type: 'textbox', question: '4. Something Questionnaire?' },
      ]
    }
  }

  render() {
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='answer' className='d-none d-md-block'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <Row className='space-head-block'>
                  <Col xs={12}>
                    <p className='title'>UX Search Prototype <span>Questionnaire</span></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <p>Your feedback is important for us. thank you very much. from “UX Search” (Description on questionnaire)</p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs={12} className='answer-block'>
                    <Form>
                      {this.state.object.map(data => (
                        <>
                          <FormGroup>
                            <Row>
                              <Col xs={12}>
                                <Label className='no-margin w-100'>
                                  <Row>
                                    <Col xs={12}>
                                      <p className='question'>{data.question}</p>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={12}>
                                      {data.type === 'textbox' &&
                                        <Input type='textarea' name='answer1' rows="4" className='text-style' />
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
                                </Label>
                              </Col>
                            </Row>
                          </FormGroup>
                          <br />
                        </>
                      ))}
                    </Form>
                  </Col>
                </Row>
                <Row className='justify-content-center space-btn'>
                  <Col xs={12} md={4} className='text-center'>
                    <Button className='btn-submit-test'>Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default Answer;