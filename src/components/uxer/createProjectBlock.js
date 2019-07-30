import React from 'react'
import { Container, Row, Col, Form, Modal, ModalHeader, ModalBody, Input, ModalFooter, Button, button } from 'reactstrap'


import '../../static/sass/uxer/myProject.scss'

class CreateProjectBlock extends React.Component {



    render() {
        return (
            <Container>
                <Modal>
                    <Modal-hide >
                        <Modal-header>
                            <Button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</Button>
                            <h3>Modal header</h3>
                        </Modal-header>
                        <Modal-body>
                            <p>One fine body…</p>
                        </Modal-body>
                        <Modal-footer>
                            <a href="#" class="btn">Close</a>
                            <a href="#" class="btn btn-primary">Save changes</a>
                        </Modal-footer>
                    </Modal-hide>
                </Modal>
            </Container>
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default CreateProjectBlock;