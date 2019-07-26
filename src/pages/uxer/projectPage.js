import React from 'react'

import { Container, Row, Col, Input, Label, Form, FormGroup, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt,faSignOutAlt ,faSearch} from '@fortawesome/free-solid-svg-icons'


import NavbarUxer from '../../components/utils/navbarUXer'

import EachProject from '../../components/EachProject/eachProject'

import '../../static/sass/uxer/experPage.scss'
import '../../static/sass/uxer/projectPage.scss'

class ProjectPage extends React.Component {
    render() {
        return (
            <section id='project-page'>
                <NavbarUxer />

                <Container>
                    <Row className='all justify-content-center align-items-center' >
                        <Col md={1}>
                            <div className='logo-search'>
                                <FontAwesomeIcon icon={faSearch} size="x" color='#303030' />
                            </div>
                        </Col>
                        <Col md={8} className='justify-content-center align-items-center' >
                            <Form>
                                <FormGroup className='no-margin'>
                                    <Label className='w-100 no-margin'>
                                        <Input type='text' id='search' name='search' placeholder='Search Result' className='search' />
                                    </Label>
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col md={2}  className='justify-content-center align-items-center' >
                                <DropdownToggle nav caret className='link-text'>
                                    Recent
                	</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        <span>wait...</span>
                                    </DropdownItem>     
                                    <DropdownItem>    
                                        <span>wait...</span>
                                    </DropdownItem>
                                </DropdownMenu>
                        </Col>

                    </Row>
                </Container>



                <EachProject />

            </section>
        )
    }
}

export default ProjectPage;