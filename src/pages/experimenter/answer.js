import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Checkbox, Radio, RadioGroup, FormControlLabel, withStyles } from '@material-ui/core'
import { Container, Row, Col } from 'reactstrap'

import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/answer.scss'
import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

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
    const { match } = props
    this.state = {
      uxerId: '8t6UN47Z749qacrEvZ8O',
      projectId: 'a89OdndRvNEoasnHXfhu',
      experId: match.params.experId,
      questionnaire: [],
    }
  }

  async componentDidMount() {
    this.getQuestionnaire()
  }

  getQuestionnaire = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/test-note`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET QUESTIONNAIRE')
      }
      this.setState({ questionnaire: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const questionnaire = this.state.questionnaire
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
                      {questionnaire.map(question => (
                        <>
                          <FormGroup>
                            <Row>
                              <Col xs={12}>
                                <Label className='no-margin w-100'>
                                  <Row>
                                    <Col xs={12}>
                                      <p className='question'>{question.data.question.question}</p>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={12}>
                                      {question.data.question.type_form === 'textbox' &&
                                        <Input type='textarea' name='answer1' rows="4" className='text-style' />
                                      }
                                      {question.data.question.type_form === 'multiple' &&
                                        <>
                                          <RadioGroup
                                            aria-label="answer2"
                                            name="answer2"
                                          >
                                            {question.data.options.map(option => (
                                              <>
                                                <FormControlLabel value={option.data.option} control={<RadioButton />} label={option.data.option} />
                                              </>
                                            ))}
                                          </RadioGroup>
                                        </>
                                      }
                                      {question.data.question.type_form === 'checkbox' &&
                                        <>
                                          {question.data.options.map(option => (
                                            <>
                                              <FormGroup className='no-margin'>
                                                <FormControlLabel
                                                  control={<CheckboxButton value={option.data.option} />}
                                                  label={option.data.option}
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