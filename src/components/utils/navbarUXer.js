import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


import logo from '../../static/img/Logo_White.png'
import '../../static/sass/navbar.scss'

class NavbarUxer extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);

		this.state = {
			isOpen: false,
			collapsed: true
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<section id='uxer-navbar'>
				<Navbar dark className='nav-bgColoruxer d-md-none'>
					<NavbarBrand href='/' className='mr-auto'>
						<img className='logo-icon' src={logo} />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href='#'>Projects</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#'>Activity</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Uxer 1
                </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										My Account
                  </DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Sign out
                  </DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
				<Navbar expand='md' dark className='nav-bgColoruxer d-none d-md-block'>
					<Row>
						<Col md={6}>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<NavLink href='#' className='link-text'>Projects</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href='#' className='link-text'>Activity</NavLink>
								</NavItem>
							</Nav>
						</Col>
						<Col md={6} className='account-box'>
							<Nav>
								<UncontrolledDropdown nav inNavbar className='dropdown-position'>
									<DropdownToggle nav caret className='link-text'>
										Uxer 1
                	</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											<FontAwesomeIcon icon={faUserAlt} size='md' className='space-icon' />
											<span>My Account</span>
                  	</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>
											<FontAwesomeIcon icon={faSignOutAlt} size='md' className='space-icon' />
											<span>Sign out</span>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Col>
					</Row>
					<Row className='space-title'>
						<Col md={1} className='text-center border-right-logo'>
							<NavbarBrand href='#'>
								<img className='logo-icon' src={logo} />
							</NavbarBrand>
						</Col>
						<Col md={11}>
							<h1>Project Name</h1>
						</Col>
					</Row>
				</Navbar>
			</section>
		);
	}
}

export default NavbarUxer