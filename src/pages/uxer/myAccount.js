import React from 'react'
import { Container, Row, Col, Button, Label, FormGroup, Input } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { withStyles, TextField } from "@material-ui/core";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NotSupport from '../../components/utils/notSupport'

import NavbarUXer from "../../../src/components/utils/navbarUXer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../static/sass/experimenter/index.scss'
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
          <NavbarUXer />
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
                  onSubmit={this.submitUpdate}
                  render={({
                    handleSubmit, form, submitting, pristine
                  }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12}>
                            <FormGroup>
                              <Row>
                                <Col xs={12} lg={12}>
                                  <Field name='name' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} className='space'>
                                            <span>Name</span>
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

                                <Col xs={12} lg={12}>
                                  <Field name='Email' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} className='space'>
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

                                <Col xs={12} lg={12}>
                                  <Field name='Company' type='text'>
                                    {({ input, meta }) => (
                                      <>
                                        <Row className='align-items-center'>
                                          <Col xs={12} lg={5} className='space'>
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
