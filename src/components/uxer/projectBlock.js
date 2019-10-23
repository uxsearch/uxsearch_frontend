import React from 'react'
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faTrash, faShare } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/projectPage.scss'

class ProjectBlock extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
			statusRemove: undefined
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

	render() {
		const projectId = this.props.projectId
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
			</div >
		)
	}
}

export default ProjectBlock;