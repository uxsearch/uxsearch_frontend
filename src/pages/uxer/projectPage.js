import React from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Button } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBook, faLink } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarUxer from '../../components/utils/navbarUXer'
import ProjectBlock from '../../components/uxer/projectBlock'

import '../../static/sass/uxer/projectPage.scss'

const SearchField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#28a1f2',
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

class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		const { match } = props
		this.toggleSort = this.toggleSort.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			uxerId: match.params.id,
			projectList: [],
			object: [
				{ title: 'Web Development', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test2', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test3', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test4', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test5', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test6', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test7', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test8', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test9', img_url: 'https://picsum.photos/200/300' },
				{ title: 'test10', img_url: 'https://picsum.photos/200/300' }
			],
			sortDropdownOpen: false,
			modal: false,
		};
	}

	toggleSort() {
		this.setState(prevState => ({
			sortDropdownOpen: !prevState.sortDropdownOpen
		}));
	}

	toggleModal() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	componentDidMount() {
		this.getProject()
	}

	changeUnmountOnClose(e) {
		let value = e.target.value;
		this.setState({ unmountOnClose: JSON.parse(value) });
	}

	getProject = async () => {
		try {
			const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.PROJECT}`)
			if(response.status !== 200) {
				throw new Error('CANNOT GET ALL PROJECT')
			}
			this.setState({ projectList: response.data })
		} catch (e) {
			console.error(e)
		}
	}

	render() {
		const projectList = this.state.projectList
		return (
			<div>
				<section id='project-page'>
					<NavbarUxer title='My Projects' />
					<Container>
						<Row className='space-head-block justify-content-center align-items-end'>
							<Col xs={8}>
								<form autoComplete='on'>
									<Row className='align-items-end no-gutters'>
										<Col xs={2} sm={1} className='text-center'>
											<FontAwesomeIcon icon={faSearch} size='1x' color='#303030' />
										</Col>
										<Col xs={10} sm={11}>
											<SearchField
												id='standard-search'
												label='Search Projects'
												type='search'
												className='w-100 search-form no-margin'
												margin='normal'
											/>
										</Col>
									</Row>
								</form>
							</Col>
							<Col xs={4} sm={3} md={2}>
								<Row className='justify-content-center align-items-center'>
									<Col xs={12} className='text-center'>
										<Dropdown
											isOpen={this.state.sortDropdownOpen}
											toggle={() => { this.setState({ sortDropdownOpen: !this.state.sortDropdownOpen }); }}
										>
											<DropdownToggle caret
												tag="span"
												onClick={this.toggleSort}
												data-toggle="dropdown"
												aria-expanded={this.state.sortDropdownOpen}
												className='dropdown-btn'
											>
												<span>Recent</span>
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem>
													<span>Recent</span>
												</DropdownItem>
												<DropdownItem>
													<span>A to Z</span>
												</DropdownItem>
												<DropdownItem>
													<span>Z to A</span>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
					<br />
					<Container>
						<Row>
							{
								this.state.object.length !== 0 ? (
									<>
										{projectList.map(project => (
											<>
												<Col xs={12} sm={6} md={4} lg={3}>
													<ProjectBlock title={project.data.name} imgUrl={project.data.cover_url} />
												</Col>
											</>
										))}
									</>
								) : (
										<>
											<Col xs={12} className='text text-center'>
												<p>You don't have any project. You can <span className='createProject' onClick={this.toggleModal}>create a project.</span></p>
											</Col>
										</>
									)
							}
						</Row>
					</Container>
				</section>
				<section id='create-modal'>
					<Modal isOpen={this.state.modal} toggle={this.toggleModal} className='modal-dialog-centered'>
						<ModalBody>
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
											<Row className='justify-content-center'>
												<Col xs={12} md={11}>
													<Row className='justify-content-center align-items-end no-gutters'>
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
											<Row className='justify-content-center'>
												<Col xs={12}>
													<Button className='w-100 create-project-btn'>Create Project</Button>
												</Col>
											</Row>
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

export default ProjectPage;