import React from 'react'
import { Navbar, Nav, NavDropdown, Row, Col, Container, Image, Button, video } from 'react-bootstrap'
import '../../static/css/utils/navbar.css'

import '../../static/css/uxer/videoresult.css'


class ExperProfile extends React.Component {
    render() {
        return (
            <div className='experprofile'>

                <Row className='justify-content-center'>
                    <Col xs={12} md={3} className='text-center'>
                        <Button type='submit' className='Usability-Test-Note'>Usability Test Note</Button>
                    </Col>
                </Row>

                <Container className='experprofile'>

                    <Col xs={20} md={20} className='text-center'>

                    </Col>

                </Container>

            </div>
                        )
                    }
                }
                
export default ExperProfile