import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../../static/sass/uxer/experPage.scss'

class EachExpPro extends React.Component {
  render() {
    return (
      <div className='bg-container'>
        <Container >
          <Row className='justify-content-center align-items-center'>
            <Col md={6} >
              <Row >
                <Col md={3}>
                </Col>
                <Col md={4} className='profile '>
                  <a href='/uxer/project/experiment/result' className='link'>
                    <div>
                      <img
                        src={require('../../static/img/1.jpg')}
                        width='70px'
                        height='70px'
                        className="img d-inline-block align-top"
                        alt="Profile"
                      />
                    </div>

                    <Col md={1} >
                      <Row >
                        <div className='name'>
                          <p> Leroy </p>
                          <p> Romero</p>
                        </div>
                      </Row>
                    </Col>
                  </a>
                </Col>

                <Col md={4} className='profile'>
                  <div >
                    <img
                      src={require('../../static/img/2.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Ronald </p>
                      <p> Long   </p>
                    </div>
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Row >
                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/3.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Lucinda </p>
                      <p> Daniels</p>
                    </div >
                  </Col>
                </Col>

                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/4.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Ann </p>
                      <p> Brady</p>
                    </div >
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Row>
                <Col md={3}>
                </Col>
                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/5.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Engenia </p>
                      <p> Alexander</p>
                    </div >
                  </Col>
                </Col>

                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/6.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Nell </p>
                      <p> Davidson</p>
                    </div >
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/7.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1} >
                    <div className='name'>
                      <p> Viola </p>
                      <p> Wise</p>
                    </div >
                  </Col>
                </Col>

                <Col md={4} className='profile '>
                  <div>
                    <img
                      src={require('../../static/img/8.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1} >
                    <div className='name'>
                      <p> Jacob </p>
                      <p> Bowman</p>
                    </div >
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Row>
                <Col md={3}>
                </Col>
                <Col md={4} className='profile'>
                  <div >
                    <img
                      src={require('../../static/img/9.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Allie </p>
                      <p> Moran</p>
                    </div >
                  </Col>
                </Col>

                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/10.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Scott </p>
                      <p> Norton</p>
                    </div >
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/11.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Roxie </p>
                      <p> Floyd</p>
                    </div >
                  </Col>
                </Col>

                <Col md={4} className='profile '>
                  <div >
                    <img
                      src={require('../../static/img/12.jpg')}
                      width='70px'
                      height='70px'
                      className="img d-inline-block align-top"
                      alt="Profile"
                    />
                  </div>

                  <Col md={1}>
                    <div className='name'>
                      <p> Willie </p>
                      <p> Henry</p>
                    </div >
                  </Col>
                </Col>
                <Col md={1}>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default EachExpPro;