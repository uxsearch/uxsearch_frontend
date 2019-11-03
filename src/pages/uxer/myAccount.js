import React from 'react'
import { Container, Row, Col, Button, Label, FormGroup, Input } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { withStyles, TextField } from "@material-ui/core";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NotSupport from '../../components/utils/notSupport'

import NavbarUXer from "../../../src/components/utils/navbarUXer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../static/sass/uxer/signin.scss";

import '../../static/sass/navbar.scss'

import logo from '../../static/img/full_logo.png'


const TextInput = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2'
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

class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uxerId: [],
      projectId: [],
      project: [],
    }
  }

  submitUpdate = async (values) => {
    try {
      const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}add/`, values)
        .then(result => {
          this.setState({ redirect: true })
          return result
        })
      if (response.status !== 201) {
        throw new Error('CANNOT CREATE UXER')
      }
      this.props.history.push(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${response.data.projects.id}/experiments`)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const project = this.state.project

    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='signin' className='d-none d-md-block'>
          <NavbarUXer title='My Account' />
          <Container  >
            <Row xs={5} md={4} lg={3} className='align-items-center justify-content-center'>
              <Col xs={4} className='block-account '>
                <Row >
                  <Col xs={5} sm={4} xl={3}>
                    <img src='https://picsum.photos/200/300' alt='Profile Picture' className='profile-img' />
                  </Col>
                </Row>
                <br />


                <Form
                  onSubmit={this.submitUpdate}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12}>
                            <FormGroup>
                              <Row>
                                <Col xs={12} lg={12} className='space font'>
                                  <Field name='Firstname' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} >
                                            <span className='font'>Firstname</span>
                                          </Col>
                                          <Col xs={12} lg={12}>
                                            <Label className=' w-100'>
                                              <Input {...input} required />
                                              {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </Label>
                                          </Col>
                                        </Row>
                                      </>
                                    )}
                                  </Field>
                                </Col>

                                <Col xs={12} lg={12} className='space font'>
                                  <Field name='Lastname' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} >
                                            <span>Lastname</span>
                                          </Col>
                                          <Col xs={12} lg={12}>
                                            <Label className=' w-100'>
                                              <Input {...input} required />
                                              {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </Label>
                                          </Col>
                                        </Row>
                                      </>
                                    )}
                                  </Field>
                                </Col>

                                <Col xs={12} lg={12} className='space font'>
                                  <Field name='Email' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} >
                                            <span>Email</span>
                                          </Col>
                                          <Col xs={12} lg={12}>
                                            <Label className=' w-100'>
                                              <Input {...input} required />
                                              {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </Label>
                                          </Col>
                                        </Row>
                                      </>
                                    )}
                                  </Field>
                                </Col>

                                <Col xs={12} lg={12} className='font'>
                                  <Field name='Company' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} >
                                            <span>Company</span>
                                          </Col>
                                          <Col xs={12} lg={12}>
                                            <Label className=' w-100'>
                                              <Input {...input} required />
                                              {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </Label>
                                          </Col>
                                        </Row>
                                      </>
                                    )}
                                  </Field>
                                </Col>


                              </Row>
                            </FormGroup>
                          </Col>
                        </Row>


                        <Row>
                          <Col xs={12}>
                            <Button type="submit" className='btn-signin'>Update Setting</Button>
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

export default MyAccount;
