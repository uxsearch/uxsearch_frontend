import React from 'react'

import {
	Container, Row, Col, Input, Label, Form, FormGroup, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLink, faBook, faImage } from '@fortawesome/free-solid-svg-icons'

import NavbarUxer from '../../components/utils/navbarUXer'

import { TextField, withStyles } from '@material-ui/core'

import '../../static/sass/uxer/myProject.scss'

const TextInput = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#28a1f2'
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
			<div>
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
											<TextInput
												id='standard-search'
												label='Search Project'
												type='text'
												className='w-100 create-form space-bottom'
												margin='normal'
											/>
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
								<p>You don't have any project. You can <span className='createProject' onClick={this.toggle}>create a project.</span></p>
							</div>
						</Row>
					</Container>
				</section>
				<section id='create-modal'>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-dialog-centered'>
						<ModalBody className='body'>
							<Row className='justify-content-center '>
								<Col xs={12} className='text-center no-margin'>
									<img
										src={require('../../static/img/1.jpg')}
										width='470px'
										height='275px'
										className="d-inline-block align-top"
										alt="Profile"
									></img>
								</Col>
							</Row>
							<Row className='justify-content-center'>
								<Col xs={12} md={10}>
									<Row>
										<Col xs={12}>
											<Row className='align-items-end no-gutters'>
												<Col xs={2} className='text-center'>
													<FontAwesomeIcon icon={faBook} size='1x' color='#303030' />
												</Col>
												<Col xs={10}>
													<TextInput
														id='standard-name'
														label='Project Name'
														type='text'
														className='w-100 create-form space-bottom'
														margin='normal'
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col xs={12}>
											<Row className='align-items-end no-gutters'>
												<Col xs={2} className='text-center'>
													<FontAwesomeIcon icon={faLink} size='1x' color='#303030' />
												</Col>
												<Col xs={10}>
													<TextInput
														id='standard-link'
														label='Link Path'
														type='text'
														className='w-100 create-form space-bottom'
														margin='normal'
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<br />
									<Row className='under-bt justify-content-center'>
										<Col xs={10}>
											<Button className='w-100 create-project' onClick={this.toggle} size="md">Create Project</Button>
										</Col>
									</Row>
								</Col>
							</Row>
						</ModalBody>
					</Modal>
				</section>
			</div>
		)
	}
}
export default MyProject;