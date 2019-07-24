import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

class ProfileBlock extends React.Component {
  render() {
    return (
      <Form className='profile-block'>
        <Row>
          <Col xs={12}>
            <h2>Basic Information</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>Firstname : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='firstname' name='firstname' />
                  </Label>
                </Col>
                <Col xs={12} lg={2}>
                  <span>Lastname : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='lastname' name='lastname' />
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>Age : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='number' id='age' name='age' min='0' max='150' placeholder='0' />
                  </Label>
                </Col>
                <Col xs={12} lg={2}>
                  <span>Gender : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='select' id='gender' name='gender' placeholder='Choose Your Gender'>
                      <option value='' disabled selected>Choose Your Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='etc'>etc.</option>
                    </Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>tel : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='tel' name='tel' placeholder='[Example] 0812345678' />
                  </Label>
                </Col>
                <Col xs={12} lg={2}>
                  <span>Email : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='email' name='email' placeholder='[Example] example@uxsearch.com' />
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>Province/City : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='city' name='city' />
                  </Label>
                </Col>
                <Col xs={12} lg={2}>
                  <span>Country : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='country' name='country' />
                  </Label>
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
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>Education : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='education' name='education' />
                  </Label>
                </Col>
                <Col xs={12} lg={2}>
                  <span>Job : </span>
                </Col>
                <Col xs={12} lg={4}>
                  <Label className='w-100'>
                    <Input type='text' id='job' name='job' />
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Row className='align-items-center'>
                <Col xs={12} lg={2}>
                  <span>Lifestyle : </span>
                </Col>
                <Col xs={12} lg={10}>
                  <Label className='w-100'>
                    <Input type='text' id='lifestyle' name='lifestyle' placeholder='[Example] Jazz Music, Creative' />
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default ProfileBlock