import React from 'react'
import { Container, Row, Col, Input, Label, Form, FormGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import NavbarUxer from '../../components/utils/navbarUXer'
import ProjectBlock from '../../components/uxer/eachProject'


import '../../static/sass/uxer/experPage.scss'
import '../../static/sass/uxer/projectPage.scss'

class ProjectPage extends React.Component {
	state = {
		object: [
			{ title: 'test1', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test2', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test3', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test4', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test5', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test6', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test7', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test8', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test9', img_url: 'https://picsum.photos/200/300' },
			{ title: 'test10', img_url: 'https://picsum.photos/200/300' }
		]
	};

	render() {
		return (
			<section id='project-page'>
				<NavbarUxer />

				<Container>
					<Row className='all justify-content-center align-items-center' >
						<Col md={1}>
							<div className='logo-search'>
								<FontAwesomeIcon icon={faSearch} size="1x" color='#303030' />
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

						<Col md={2} className='justify-content-center align-items-center' >
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
				<br />
				<Container>
					<Row>
						{this.state.object.map(data => (
							<>
								<Col xs={12} sm={6} md={4} lg={3}>
									<ProjectBlock title={data.title} imgUrl={data.img_url} />
								</Col>
							</>
						))}
					</Row>
				</Container>
			</section>
		)
	}
}

export default ProjectPage;