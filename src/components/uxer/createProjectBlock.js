import React from 'react'
import { Container, Row, Col, Form, Modal, ModalHeader, ModalBody, Input, ModalFooter, Button } from 'reactstrap'

import '../../static/sass/uxer/myProject.scss'

class CreateProjectBlock extends React.Component {

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
            <Container>
                <div>
                    <Row>
                        <Col md={12} classNames='block'>
                            <Form inline onSubmit={(e) => e.preventDefault()}> {' '}
                            </Form>

                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                                <img
                                    src={require('../../static/img/1.jpg')}
                                    width='100%'
                                    height='200px'
                                    className="img d-inline-block align-top"
                                    alt="Profile"
                                />

                                <ModalBody>
                                    <Input type="projectName" placeholder="Project Name" rows={5} /><br />
                                    <Input type="Link Path" placeholder="Link Path" rows={5} />
                                </ModalBody>

                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Create Project</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default CreateProjectBlock;