import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/answer.scss'

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
        <NotSupport className='d-md-block' />
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
                                        <Input type='textarea' name='answer' />
                                      }
                                      {data.type === 'multiple' &&
                                        <>
                                          {data.option.map(option => (
                                            <>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="radio" className='radio-btn' name={`answer`} value={option.text} />{' '}
                                                  <span>{option.text}</span>
                                                </Label>
                                              </FormGroup>
                                            </>
                                          ))}
                                        </>
                                      }
                                      {data.type === 'checkbox' &&
                                        <>
                                          {data.option.map(option => (
                                            <>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="checkbox" className='radio-btn' name={`answer`} value={option.text} />{' '}
                                                  <span>{option.text}</span>
                                                </Label>
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
                          <hr />
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