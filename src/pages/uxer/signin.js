import React from 'react'
import { Container, Row, Col, Button, Label } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import swal from 'sweetalert'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/index.scss'

import { withStyles, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import "../../static/sass/uxer/signin.scss";
import logo from '../../static/img/full_logo.png'
import logofacebook from '../../static/img/facebook-brands.svg'
import background1 from '../../static/img/background.jpg'


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

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uxerId: [],
      projectId: [],
      project: [],
    }
  }

  submitLogin = async (values) => {
    try {
      const response = await axios.post(`authen/signin`, values)
        .then(result => {
          this.setState({ redirect: true })
          localStorage.setItem('token', result.data.token)
          return result
        })
      if (response.status !== 200) {
        throw new Error('CANNOT SIGNIN')
      }
      this.props.history.push(`/uxer/${response.data.uid}/projects`)
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
          <img className='background blue-screen' src={background1} />

          <Container  >
            <Row xs={5} md={5} lg={5} className='align-items-center justify-content-center'>
              <Col xs={3} className='profile-block '>
                <Row>
                  <Col xs={12} className='text-center img-block'>
                    <img className='logo-icon' src={logo} />
                  </Col>
                </Row>
                <br />

                <Form
                  onSubmit={this.submitLogin}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row className='justify-content-center'>
                          <Col xs={12} md={11}>
                            <Row className='justify-content-center align-items-end no-gutters'>
                              <Col xs={2} className='text-center'>
                                <FontAwesomeIcon icon={faUserAlt} size='lg' color='#303030' />
                              </Col>
                              <Col xs={10} className='text-center'>
                                <Field name='email' type='email'>
                                  {({ input, meta }) => (
                                    <>
                                      <Row className='align-items-center'>

                                        <Col xs={12}>
                                          <Label className='w-100'>
                                            <TextInput {...input}
                                              id='standard-Username'
                                              label='Email'
                                              type='email'
                                              className='w-100 create-form space-bottom'
                                              margin='normal'
                                              required
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                          </Label>
                                        </Col>
                                      </Row>
                                    </>
                                  )}
                                </Field>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row className='justify-content-center'>
                          <Col xs={12} md={11}>
                            <Row className='justify-content-center align-items-end no-gutters'>
                              <Col xs={2} className='text-center'>
                                <FontAwesomeIcon icon={faLock} size='lg' color='#303030' />
                              </Col>
                              <Col xs={10} className='text-center'>
                                <Field name='password' type='password'>
                                  {({ input, meta }) => (
                                    <>
                                      <Row className='align-items-center'>

                                        <Col xs={12}>
                                          <Label className='w-100'>
                                            <TextInput {...input}
                                              id='standard-Password'
                                              label='Password'
                                              type='password'
                                              className='w-100 create-form space-bottom'
                                              margin='normal'
                                              required
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                          </Label>
                                        </Col>
                                      </Row>
                                    </>
                                  )}
                                </Field>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        {/* <Row className='forgot justify-content-end align-items-end'>
                          <Col xs={5} >
                            <span>Forgot Password?</span>
                          </Col>
                        </Row> */}

                        <Row>
                          <Col xs={12}>
                            <Button type="submit" className='btn-signin'>Sign in</Button>
                          </Col>
                        </Row>

                        {/* <Row className='or justify-content-center align-items-center'>
                          <Col xs={1} className='or ' >
                            <span>OR</span>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>

                            <Button type="submit" className='btn-signin-facebook'> <img className='logo-facebook' src={logofacebook} /> Sign in with facebook</Button>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12} md={12}>
                            <hr className="black-line" />
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <Button type="submit" className='btn-sign-Up'>Sign Up</Button>
                          </Col>
                        </Row> */}
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

export default SignIn;
