import React from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'

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

class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggleSort = this.toggleSort.bind(this);
		this.state = {
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
			sortDropdownOpen: false
		};
	}

	toggleSort() {
		this.setState(prevState => ({
			sortDropdownOpen: !prevState.sortDropdownOpen
		}));
	}

	render() {
		return (
			<section id='project-page'>
				<NavbarUxer />
				<Container>
					<Row className='space-head-block justify-content-center align-items-end'>
						<Col xs={8}>
							<form utoComplete='on'>
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
						<Col xs={4} sm={3} md={2} className='justify-content-center align-items-center' >
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