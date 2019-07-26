import React from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse } from 'reactstrap'

import '../../static/sass/uxer/projectPage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faTrash, faShare } from '@fortawesome/free-solid-svg-icons'

class EachProject extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className='bg-container'>
                <Container >
                    <Row className='justify-content-center align-items-center'>

                        <Row>
                            <Col md={1}></Col>
                            <Col md={3} className='project'>
                                <a href='/uxer/project/experiments' className='link'>
                                    <img
                                        src={require('../../static/img/1.jpg')}
                                        width='100%'
                                        height='160px'
                                        className="img d-inline-block align-top"
                                        alt="Profile"
                                    />
                                    <Col className='name-project  '>
                                        <p>Web Development</p>
                                        <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />

                                    </Col>
                                </a>

                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle  >
                                        <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem >
                                            <FontAwesomeIcon icon={faShare} size='x' className='space-icon' />
                                            <span>Send link to experimenter</span>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <FontAwesomeIcon icon={faTrash} size='x' color='#DC143C' className='space-icon' />
                                            <span>Delete</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>

                            <Col md={3} className='project'>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='160px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />
                                <Col className='name-project '>
                                    <p>Find Freelancer</p>
                                    <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot'
                                        link href="/uxer/project/experiment/result" rel="result" />
                                </Col>
                            </Col>

                            <Col md={3} className='project'>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='160px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />
                                <Col className='name-project '>
                                    <p>SEO Ranking</p>
                                    <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />
                                </Col>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={1}></Col>
                            <Col md={3} className='project'>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='160px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />
                                <Col className='name-project '>
                                    <p>Information Technology Job Search</p>
                                    <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />
                                </Col>
                            </Col>

                            <Col md={3} className='project'>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='160px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />
                                <Col className='name-project '>
                                    <p>Cloud Storage</p>
                                    <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />
                                </Col>
                            </Col>

                            <Col md={3} className='project'>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='160px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />
                                <Col className='name-project '>
                                    <p>Illustration In Marketing Materials</p>
                                    <FontAwesomeIcon icon={faEllipsisV} size="x" color='#303030' className='icon-dot' />
                                </Col>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default EachProject;