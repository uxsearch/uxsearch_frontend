import React from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faTrash, faShare } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/projectPage.scss'

const ProjectBlock = (props) => {
	return (
		<div className='project'>
			<a href='/uxer/project/experiments' className='link'>
				<Row className='justify-content-center'>
					<Col xs={12}>
						<Row>
							<Col xs={12} className='cover-block'>
								<img
									src={props.imgUrl}
									className="cover-img d-inline-block"
									alt="Project Cover"
								/>
							</Col>
						</Row>
						<Row className='justify-content-center align-items-center'>
							<Col xs={10} className=''>
								<p className='no-margin project-text'>{props.title}</p>
							</Col>
							<Col xs={2} className='text-center'>
								<FontAwesomeIcon icon={faEllipsisV} size="1x" color='#303030' />
							</Col>
						</Row>
					</Col>
				</Row>
			</a>
		</div >
	)
}

export default ProjectBlock;