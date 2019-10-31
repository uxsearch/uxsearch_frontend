import React from 'react'

import { Form, Field } from 'react-final-form'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Button, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faTrash, faShare, faEdit, faBook, faLink } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/projectPage.scss'

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


class ProjectBlock extends React.Component {
	constructor(props) {
		super(props);
		const projectId = this.props.projectId
		this.toggleModal = this.toggleModal.bind(this);
		this.toggle = this.toggle.bind(this);
		this.state = {
			projectId: projectId,
			dropdownOpen: false,
			statusRemove: undefined,
			modal: false,
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	blockRemove = (projectId) => {
		const statusRemove = true
		const project = { projectId: projectId }
		this.props.removeProject(project, statusRemove)
	}


	toggleModal() {
		console.log('test', this.props.title, this.props.uxerId)
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	updateProject = (values) => {
		this.props.updateProject(values, this.state.projectId)
	}

	render() {
		const { projectId } = this.state

		return (
			<div className='project'>
				<Row className='justify-content-center'>
					<Col xs={12} className='each-block'>
						<Row>
							<Col xs={12} className='cover-block'>
								<a href={this.props.url} className='link'>
									<img
										src={this.props.imgUrl}
										className="cover-img d-inline-block"
										alt="Project Cover"
									/>
								</a>
							</Col>
						</Row>
						<Row className='justify-content-center align-items-center'>
							<Col xs={10} className=''>
								<a href='/uxer/project/experiments' className='link'>
									<p className='no-margin project-text'>{this.props.title}</p>
								</a>
							</Col>
							<Col xs={2} className='text-center'>
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
									<DropdownToggle
										tag="span"
										onClick={this.toggle}
										data-toggle="dropdown"
										aria-expanded={this.state.dropdownOpen}
									>
										<FontAwesomeIcon icon={faEllipsisV} size="1x" color='#303030' className='dropdown-btn' />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem onClick={() => this.toggleModal()}>
											<FontAwesomeIcon icon={faEdit} color='#D42B2B' size='sm' className='space-icon' />
											<span>Edit Project </span>
										</DropdownItem>
										<DropdownItem>
											<FontAwesomeIcon icon={faShare} color='#303030' size='sm' className='space-icon' />
											<span>Send link to experimenter</span>
										</DropdownItem>
										<DropdownItem onClick={() => this.blockRemove(projectId)}>
											<FontAwesomeIcon icon={faTrash} color='#D42B2B' size='sm' className='space-icon' />
											<span className='delete-text'>Delete Project</span>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
				</Row>
				<section id='create-modal'>
					<Modal isOpen={this.state.modal} toggle={this.toggleModal} className='modal-dialog-centered'>
						<ModalBody>
							<Form
								onSubmit={this.updateProject}
								render={({
									handleSubmit, form, submitting, pristine
								}) => (
										<form onSubmit={handleSubmit}>
											<Row>
												<Col xs={12}>
													<Row className='justify-content-center'>
														<Col xs={12} className='text-center img-block'>
															<img
																src='https://picsum.photos/500/300'
																className='cover-size'
																alt='Project Cover'
															></img>
														</Col>
													</Row>
													<Row className='justify-content-center'>
														<Col xs={12}>
															<Row className='justify-content-center'>
																<Col xs={12} md={11}>
																	<Row className='justify-content-center align-items-end no-gutters'>
																		<Col xs={2} className='text-center'>
																			<FontAwesomeIcon icon={faBook} size='1x' color='#303030' />
																		</Col>
																		<Col xs={10} className='text-center'>
																			<Field name='name' type='text'>
																				{({ input, meta }) => (
																					<>
																						<Row className='align-items-center'>

																							<Col xs={12}>
																								<Label className='w-100'>
																									<TextInput {...input}
																										id='standard-name'
																										label='Project Name'
																										type='text'
																										className='w-100 create-form space-bottom'
																										margin='normal'
																										required
																									/>
																									{meta.touched && meta.error && <span>{meta.error}</span>}
																								</Label>
																							</Col>
																						</Row>
																					</>
																				)}
																			</Field>
																		</Col>
																	</Row>
																</Col>
															</Row>
															<Field component='input' type='hidden' name='cover_url' initialValue={`https://picsum.photos/500/300`} />
															<Row className='justify-content-center'>
																<Col xs={12} md={11}>
																	<Row className='justify-content-center align-items-end no-gutters'>
																		<Col xs={2} className='text-center'>
																			<FontAwesomeIcon icon={faLink} size='1x' color='#303030' />
																		</Col>
																		<Col xs={10} className='text-center'>
																			<Field name='file_url' type='text'>
																				{({ input, meta }) => (
																					<>
																						<Row className='align-items-center'>

																							<Col xs={12}>
																								<Label className=' w-100'>
																									<TextInput {...input}
																										id='standard-link'
																										label='Link Path'
																										type='text'
																										className='w-100 create-form space-bottom'
																										margin='normal'
																										required
																									/>
																									{meta.touched && meta.error && <span>{meta.error}</span>}
																								</Label>
																							</Col>
																						</Row>
																					</>
																				)}
																			</Field>
																		</Col>
																	</Row>
																</Col>
															</Row>
															<br />
															<Row className='justify-content-center'>
																<Col xs={12}>
																	<Button className='w-100 create-project-btn' type='submit'>Update Project</Button>
																</Col>
															</Row>
														</Col>
													</Row>
												</Col>
											</Row>
										</form>
									)}
							/>
						</ModalBody>
					</Modal>
				</section>
			</div >
		)
	}
}

export default ProjectBlock;