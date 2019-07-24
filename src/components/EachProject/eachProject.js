import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../../static/sass/uxer/projectPage.scss'

class EachProject extends React.Component {
    render() {
        return (
            <div className='bg-container'>
                <Container fluid >
                    <Row className='justify-content-center align-items-center'>


                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>Web Development</p>
                            </div>
                        </Col>

                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>Find Freelancer</p>
                            </div>
                        </Col>

                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>SEO Ranking</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='justify-content-center align-items-center'>
                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>Information Technilogy Job Search</p>
                            </div>
                        </Col>

                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>Cloud Storage</p>
                            </div>
                        </Col>

                        <Col md={3} className='project'>
                            <img
                                src={require('../../static/img/1.jpg')}
                                width='100%'
                                height='160px'
                                className="img d-inline-block align-top"
                                alt="Profile"
                            />
                            <div className='name-project'>
                                <p>Illustration In Marketing Materials</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div >
        )
    }
}

export default EachProject;