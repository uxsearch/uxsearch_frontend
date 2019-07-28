import React from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy, faShare } from '@fortawesome/free-solid-svg-icons'

import NavbarUxer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';
import ExperBlock from '../../components/uxer/experimentBlock'

import '../../static/sass/uxer/experPage.scss'

const SearchField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2',
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
          <Row className='space-head-block justify-content-center align-items-end'>
            <Col xs={10} md={4}>
              <form utoComplete='on'>
                <Row className='align-items-end no-gutters'>
                  <Col xs={2} sm={1} md={2} className='text-center'>
                    <FontAwesomeIcon icon={faSearch} size='1x' color='#303030' />
                  </Col>
                  <Col xs={10} sm={11} md={10}>
                    <SearchField
                      id='standard-search'
                      label='Search Experiment'
                      type='search'
                      className='w-100 search-form no-margin'
                      margin='normal'
                    />
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xs={2} sm={1} className='d-md-none no-padding'>
              <div className='share-block'>
                <FontAwesomeIcon icon={faShare} size="1x" color='#fff' className='share-icon' />
              </div>
            </Col>
            <Col md={2} className='d-none d-md-block' />
            <Col md={6} className='d-none d-md-block'>
              <Row className='justify-content-end align-items-center'>
                <Col md={5} lg={4} className='text-right'>
                  <p className='no-margin'>Share Test: </p>
                </Col>
                <Col md={5} lg={6} className='no-padding'>
                  <Label className='no-margin w-100' >
                    <Input type='text' id='share' name='share_url' value='https://uxsearch.io/2Ri5jP' className='share' alt='https://uxsearch.io/2Ri5jP' readOnly />
                  </Label>
                </Col>
                <Col md={1} className='no-padding'>
                  <div className='copy-block'>
                    <FontAwesomeIcon icon={faCopy} size="1x" color='#fff' className='copy-icon' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
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