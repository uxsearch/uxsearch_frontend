import React from 'react'
import { Container, Row, Col, Button, Label } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { withStyles, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons'

import NotSupport from '../../components/utils/notSupport'
import background1 from '../../static/img/background.jpg'
import logo from '../../static/img/full_logo.png'
import axios from '../../utils/axios'

import '../../static/sass/experimenter/index.scss'
import "../../static/sass/uxer/signin.scss";

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
  submitLogin = async (values) => {
    try {
      const response = await axios.post(`authen/signin`, values)
        .then(result => {
          this.setState({ redirect: true })
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('firstname', result.data.data.firstname)
          localStorage.setItem('lastname', result.data.data.lastname)
          localStorage.setItem('email', result.data.data.email)
          localStorage.setItem('company', result.data.data.company)
          localStorage.setItem('img_url', result.data.data.img_url)
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
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='signin' className='d-none d-md-block'>
          <div className='blue-screen'></div>
          <img className='background ' src={background1} />
          <Container  >
            <Row className='align-items-center justify-content-center'>
              <Col xs={5} md={4} lg={3} className='profile-block '>
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
                                <FontAwesomeIcon icon={faUserAlt} size='md' color='#303030' />
                              </Col>
                              <Col xs={10} className='text-center'>
                                <Field name='email' type='email'>
                                  {({ input, meta }) => (
                                    <>
                                      <Row className='align-items-center'>

                                        <Col xs={12} className>
                                          <Label className='w-100 no-margin'>
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
                                <FontAwesomeIcon icon={faLock} size='md' color='#303030' />
                              </Col>
                              <Col xs={10} className='text-center'>
                                <Field name='password' type='password'>
                                  {({ input, meta }) => (
                                    <>
                                      <Row className='align-items-center'>

                                        <Col xs={12}>
                                          <Label className='w-100 no-margin'>
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
                        <br />
                        <Row>
                          <Col xs={12}>
                            <Button type="submit" className='btn-signin'>Sign in</Button>
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

export default SignIn;
