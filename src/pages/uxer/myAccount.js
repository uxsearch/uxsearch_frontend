import React from 'react'
import { Container, Row, Col, Button, Label, FormGroup, Input } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { withStyles, TextField } from "@material-ui/core";

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'
import { delay } from '../../utils/delay'

import NotSupport from '../../components/utils/notSupport'

import NavbarUXer from "../../../src/components/utils/navbarUXer";

import "../../static/sass/uxer/signin.scss";
import '../../static/sass/navbar.scss'

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
    const { computedMatch } = props
    this.state = {
      uxerId: computedMatch.params.id,
      file: null,
      imagePreviewUrl: null,
      uxerProfile: {
        firstname: localStorage.getItem('firstname'),
        lastname: localStorage.getItem('lastname'),
        email: localStorage.getItem('email'),
        company: localStorage.getItem('company'),
        img_url: localStorage.getItem('img_url')
      }
    }
  }
  
  submitAccountUpdate = async (values) => {
    values = {
      ...values,
			firstname: this.state.uxerProfile.firstname,
      lastname: this.state.uxerProfile.lastname,
      email: this.state.uxerProfile.email,
      company: this.state.uxerProfile.company,  
    }
    if(this.state.file === null) {
      values = {
        ...values,
				img_url: this.state.uxerProfile.img_url
      } 
		} else {
      delay(100)
      const profilePhoto = await this.uploadHandler(this.state.file)
      values= {
        ...values,
        img_url: profilePhoto
      }
    }
    try {
      const response = await axios.put(`${APIURI.UXER}${this.state.uxerId}/update`, values)
      if (response.status !== 200) {
        throw new Error('CANNOT UPDATE PROFILE UXER')
      }
    } catch (e) {
      console.error(e)
    }
  }

  handleFirstNameChange = (event) => {
    const uxerProfile = this.state.uxerProfile
		this.setState({ uxerProfile: {...uxerProfile, firstname: event.target.value} });
  };
  
  handleLastNameChange = (event) => {
    const uxerProfile = this.state.uxerProfile
		this.setState({ uxerProfile: {...uxerProfile, lastname: event.target.value} });
	};

  handleEmailChange = (event) => {
    const uxerProfile = this.state.uxerProfile
		this.setState({ uxerProfile: {...uxerProfile, email: event.target.value} });
	};
  
  handleCompanyChange = (event) => {
    const uxerProfile = this.state.uxerProfile
		this.setState({ uxerProfile: {...uxerProfile, company: event.target.value} });
  };

  handleImageChange = (event) => {
		event.preventDefault();
		
		const reader = new FileReader();
		const file = event.target.files[0];
	  
		reader.onloadend = () => {
		  this.setState({
			file: file,
			imagePreviewUrl: reader.result
		  });
		}
		reader.readAsDataURL(file)
  };
  
  async uploadHandler (file) {
    console.log('file', file)
    var formData = new FormData();
    const date = new Date()
    const newFilename =  date.getTime() + '_' + file.name
    formData.append('file', file, newFilename)
    try {
      const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/upload`, formData)
      if (response.status !== 201) {
        throw new Error('CANNOT UPDATE COVER FILE')
      }
      return response.data.img_url
    } catch (e) {
      console.error(e)
    }
  }
  
  render() {
    const {uxerProfile} = this.state

    let {imagePreviewUrl} = this.state;
		let $imagePreview = uxerProfile.img_url;
		if (imagePreviewUrl || uxerProfile.img_url ) {
			$imagePreview = (<img src={uxerProfile.img_url? uxerProfile.img_url : imagePreviewUrl} alt='Profile Picture' className='profile-img'/>);
		} else {
			$imagePreview = (<img src={uxerProfile.img_url && uxerProfile.img_url} alt='Profile Picture' className='profile-img'/>);
		}

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
                  {$imagePreview}
                    <input type="file" name="file" onChange={(event)=>this.handleImageChange(event)}/>                   
                  </Col>
                </Row>
                <br />
                <Form
                  onSubmit={this.submitAccountUpdate}
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
                                              <Input {...input} 
                                              value={uxerProfile.firstname}
                                              onChange={this.handleFirstNameChange}
                                              type='text'
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
                                              <Input {...input} 
                                              value={uxerProfile.lastname}
                                              onChange={this.handleLastNameChange}
                                              type='text'
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
                                              <Input {...input}
                                              className='background-input'
                                              value={uxerProfile.email}
                                              onChange={this.handleEmailChange}
                                              type='text'
                                              readOnly
                                               />
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
                                              <Input {...input} 
                                              value={uxerProfile.company}
                                              onChange={this.handleCompanyChange}
                                              type='text'
                                              required />
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
                            <Button type="submit" className='btn-signin'>Update Account</Button>
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
