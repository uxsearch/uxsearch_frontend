import React from 'react'

import { Container, Row, Col, Input, Label, Form, FormGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'

import ExperBlock from '../../components/uxer/experimentBlock'

import '../../static/sass/uxer/experPage.scss'
import NavbarUxer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';

class ExperPage extends React.Component {
  state = {
    object: [
      { firstname: 'test1', lastname: 'experiment1', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test2', lastname: 'experiment2', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test3', lastname: 'experiment3', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test4', lastname: 'experiment4', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test5', lastname: 'experiment5', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test6', lastname: 'experiment6', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test7', lastname: 'experiment7', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test8', lastname: 'experiment8', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test9', lastname: 'experiment9', img_url: 'https://picsum.photos/200/300' },
      { firstname: 'test10', lastname: 'experiment10', img_url: 'https://picsum.photos/200/300' }
    ]
  };

  render() {
    return (
      <section id='exper-page'>
        <NavbarUxer />
        <SubNavbar />
        <Container>
          <Row className='all justify-content-center align-items-center' >
            <Col md={1}>
              <div className='logo-search'>
                <FontAwesomeIcon icon={faSearch} size="1x" color='#303030' />
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
                <FontAwesomeIcon icon={faCopy} size="1x" color='#fff' className='icon-faCopy' />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {this.state.object.map(data => (
              <>
                <Col xs={6} md={4} lg={3}>
                  <ExperBlock 
                    link='/uxer/project/experiment/result'
                    imgUrl={data.img_url} 
                    firstname={data.firstname} 
                    lastname={data.lastname} 
                  />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
}

export default ExperPage;