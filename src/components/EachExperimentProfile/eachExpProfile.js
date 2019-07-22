import React from 'react'
import { Container, Row, Col, image, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/experPage.scss'


class EachExpPro extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={3}>
                                </Col>
                                <Col md={4} className='profile justify-content-center align-items-center'>
                                    <div >
                                        <img
                                            src={require('../../static/img/user-solid.svg')}
                                            width='auto'
                                            height='40px'
                                            className="d-inline-block align-top"
                                            alt="UX Search Logo"
                                        />
                                        <Media object data-src="../../static/img/user-solid.svg/171x180" alt="roundedCircle image" />
                                        <image src={require('../../static/img/23-007.jpg')} src="/171x180" roundedCircle />
                                    </div>
                                    <h1> Leroy Romero</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Ronald Long</h1>
                                </Col>
                                <Col md={1}>
                                </Col>

                            </Row>
                        </Col>

                        <Col md={6}>
                            <Row>
                                <Col md={4} className='profile'>
                                    <h1> Lucinda Daniels</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Ann Brady</h1>
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
                                    <h1> Engenia Alexander</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Nell Davidson</h1>
                                </Col>
                                <Col md={1}>
                                </Col>

                            </Row>
                        </Col>

                        <Col md={6}>
                            <Row>
                                <Col md={4} className='profile'>
                                    <h1> Viola Wise</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Jacob Bowman</h1>
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
                                    <h1> Allie Moran</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Scott Norton</h1>
                                </Col>
                                <Col md={1}>
                                </Col>

                            </Row>
                        </Col>

                        <Col md={6}>
                            <Row>
                                <Col md={4} className='profile'>
                                    <h1> Roxie Floyd</h1>
                                </Col>

                                <Col md={4} className='profile'>
                                    <h1> Willie Henry</h1>
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