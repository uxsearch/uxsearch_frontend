import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { Field } from 'react-final-form'
import countries from './cities.json'

const normalizePhone = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, "")
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
};

class ProfileBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: ''
    }
  }

  componentDidUpdate() {
    console.log('state : ', this.state)
  }

  render() {
    return (
      <div className='profile-block'>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h2>Basic Information</h2>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Field name='firstname' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Firstname : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Input {...input} required />
                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                </Label>
                              </Col>
                            </Row>
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Field name='lastname' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Lastname : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
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
                <FormGroup>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Field name='birthdate' type='date'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Birthdate : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Input {...input} min='0' max='150' placeholder='0' required />
                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                </Label>
                              </Col>
                            </Row>
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Field name='gender' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Gender : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Label className='w-100'>
                                    <select {...input} name='gender' placeholder='Choose Your Gender' className='form-control' required>
                                      <option value='' disabled>Choose Your Gender</option>
                                      <option value='Male'>Male</option>
                                      <option value='Female'>Female</option>
                                      <option value='etc'>etc.</option>
                                    </select>
                                  </Label>
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
                <FormGroup>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Field name='tel' type='tel' parse={normalizePhone}>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Tel : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Input {...input} placeholder='[Example] 999-999-9999' required />
                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                </Label>
                              </Col>
                            </Row>
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Field name='email' type='email'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Email : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Input {...input} placeholder='[Example] example@uxsearch.com' required />
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
                <FormGroup>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Field name='country' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Country : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Label className='w-100'>
                                    <select
                                      value={this.state.country}
                                      onChange={event => {
                                        this.setState({
                                          country: event.target.value
                                        })
                                      }}
                                      name='country'
                                      placeholder='Choose Your Country'
                                      className='form-control'
                                      required
                                    >
                                      <option value='' disabled>Choose Your Country</option>
                                      {countries.map(country => (
                                        <option value={country.country_name}>{country.country_name}</option>
                                      ))}
                                    </select>
                                  </Label>
                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                </Label>
                              </Col>
                            </Row>
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Field name='province' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Province/City : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Label className='w-100'>
                                    <select {...input} name='city' placeholder='Choose Your Province/City' className='form-control' required>
                                      <option value='' disabled>Choose Your Province/City</option>
                                      {this.state.country && countries.filter(country => {
                                        return country.country_name === this.state.country
                                      })[0].cities.map(city => (
                                        <option>{city}</option>
                                      ))}
                                    </select>
                                  </Label>
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
            <hr />
            <br />
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Field name='educate' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Education : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Label className='w-100'>
                                    <select {...input} name='gender' placeholder='Choose Your Gender' className='form-control' required>
                                      <option value='' disabled>Choose Your Education</option>
                                      <option value='School'>School</option>
                                      <option value='University'>University</option>
                                    </select>
                                  </Label>
                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                </Label>
                              </Col>
                            </Row>
                          </>
                        )}
                      </Field>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Field name='job' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={4}>
                                <span>Job : </span>
                              </Col>
                              <Col xs={12} lg={8}>
                                <Label className='w-100'>
                                  <Input {...input} />
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
                <FormGroup>
                  <Row className='align-items-center'>
                    <Col xs={12}>
                      <Field name='lifestyle' type='text'>
                        {({ input, meta }) => (
                          <>
                            <Row className='align-items-center'>
                              <Col xs={12} lg={2}>
                                <span>Lifestyle : </span>
                              </Col>
                              <Col xs={12} lg={10}>
                                <Label className='w-100'>
                                  <Input {...input} placeholder='[Example] Jazz Music, Creative' />
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
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProfileBlock