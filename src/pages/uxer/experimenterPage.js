import React from 'react'

import { Container, Row, Col, Input, Label, Form, FormGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'

import EachExpPro from '../../components/EachExperimentProfile/eachExpProfile'

import '../../static/sass/uxer/experPage.scss'
import NavbarUxer from '../../components/utils/navbarUXer'

class ExperPage extends React.Component {
  render() {
    return (
      <section id='exper-page'>
        <NavbarUxer />
        <Container>
          <Row className='all justify-content-center align-items-center' >
            <Col md={1}>
              <div className='logo-search'>
                <FontAwesomeIcon icon={faSearch} size="x" color='#303030' /> 
              </div>
            </Col>
            <Col md={2}>
              <Form>
                <FormGroup className='no-margin'>
                  <Label className='w-100 no-margin'>
                    <Input type='text' id='search' name='search' placeholder='Search Result' className='search' />
                  </Label>
                </FormGroup>
              </Form>
            </Col>

            <Col md={1} >

            </Col>
            <Col md={2} >
              <span>Share for Test : </span>
            </Col>
            <Col md={3} >
              <Label className='editShare' >
                <Input type='text' id='url' name='url' placeholder='https://uxsearch.io/2Ri5jP' className='share' />
              </Label>
            </Col>
            <Col md={1}>
              <div className='faCopy'>
                <FontAwesomeIcon icon={faCopy} size="x" color='#fff' className='icon-faCopy' />
              </div>

            </Col>
          </Row>






        </Container>

        <EachExpPro />
      </section>
    )
  }
}

export default ExperPage;