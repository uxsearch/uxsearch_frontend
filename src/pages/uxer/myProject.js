import React from 'react'

import {
    Container, Row, Col, Input, Label, Form, FormGroup, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import NavbarUxer from '../../components/utils/navbarUXer'

import CreateProjectBlock from '../../components/uxer/createProjectBlock'

import '../../static/sass/uxer/myProject.scss'

class MyProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            unmountOnClose: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    changeUnmountOnClose(e) {
        let value = e.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }

    render() {
        return (
            <section id='myproject-page'>
                <NavbarUxer />

                <Container>
                    <Row className='all justify-content-center align-items-center' >
                        <Col md={1}>
                            <div >
                                <FontAwesomeIcon icon={faSearch} size="1x" color='#303030' />
                            </div>
                        </Col>
                        <Col md={8} className='justify-content-center align-items-center' >
                            <Form>
                                <FormGroup className='no-margin'>
                                    <Label className='w-100 no-margin'>
                                        <Input type='text' id='search' name='search' placeholder='Search Project' className='search' />
                                    </Label>
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col md={2}>
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

                    <Row className='all justify-content-center align-items-center'>
                        <div className='text'>
                            <p>You don't have any project. You can
                            <a className='createProject' href='/uxer/project/experiment/modal' color="link" >create a project.</a></p>
                        </div>
                    </Row>
                </Container>

                <CreateProjectBlock />
            </section>
        )
    }
}

export default MyProject;