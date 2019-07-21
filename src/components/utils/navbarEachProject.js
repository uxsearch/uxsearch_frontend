import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Row, Col } from 'reactstrap'

import logo from '../../static/img/Logo_White.png'
import '../../static/sass/navbar.scss'

class NavbarProject extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<section id='uxer-navbar'>
				<Navbar dark className='nav-bgColoruxer'>
					{/* <Row>
						<Col md>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink>Projects</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Activity</NavLink>
							</NavItem>
							</Nav>
						</Col>
					</Row> */}
					<Row>
						<Col>
							<NavbarBrand href="#">
								<img className='logo-icon' src={logo} />
							</NavbarBrand>
						</Col>
					</Row>
					<NavbarToggler onClick={this.toggle} className='hamburger-menu' />
					<Collapse isOpen={this.state.isOpen} navbar className>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink>Projects</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Activity</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Uxer 1
                </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										My Account
                  </DropdownItem>
									<DropdownItem>
										Sign out
                  </DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</section>
		);
	}
}

export default NavbarProject