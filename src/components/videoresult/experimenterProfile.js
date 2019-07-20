import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap'

import '../../static/sass/uxer/videoResult.scss'
import '../../static/sass/experimenter/index.scss'
class ExperProfile extends React.Component {
	render() {
		return (
			<div>
				<Container-fluid className='user'>
					<Row >
						<Col xs={2}>
							<img
								src={require('../../static/img/user-solid.svg')}
								width='auto'
								height='40px'
								className="d-inline-block align-top"
								alt="UX Search Logo"
							/>
						</Col>
						<Col xs={3}>
							<h3> Leroy Romero</h3>
						</Col>
						<Col xs={2}>
							<Row>
								<Button size='lg' href="/testing/record" className='btn-usability-test'>Usability Test note </Button>
							</Row >

						</Col>
					</Row>

					<Container className='bg-experprofile'>
						<Row>
							<Col xs={12}>
								<h2>Experimenter Profile</h2>
							</Col>
						</Row>
						<br />
						<Row>
							<Col xs={3}>
								<span>Name : </span>
							</Col>
							<Col xs={3}>
								<p>Leroy Romero</p>
							</Col>
							<Col xs={2}>
								<span>Education : </span>
							</Col>
							<Col xs={4}>
								<p>National Taiwan University</p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Age : </span>
							</Col>
							<Col xs={3}>
								<p>23</p>
							</Col>
							<Col xs={2}>
								<span>Job : </span>
							</Col>
							<Col xs={4}>
								<p>Freelance</p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Gender : </span>
							</Col>
							<Col xs={3}>
								<p>Male</p>
							</Col>
							<Col xs={2}>
								<span>Lifestyle : </span>
							</Col>
							<Col xs={4}>
								<p>Shopping, See movies, Photoshoot, Travel , Sport</p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Tel : </span>
							</Col>
							<Col xs={3}>
								<p>816-359-9490</p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Email : </span>
							</Col>
							<Col xs={3}>
								<p>example@gmail.com </p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Province/City : </span>
							</Col>
							<Col xs={3}>
								<p>Kansas City </p>
							</Col>
						</Row>
						<Row>
							<Col xs={3}>
								<span>Country : </span>
							</Col>
							<Col xs={3}>
								<p>United States </p>
							</Col>
						</Row>
					</Container>
				</Container-fluid>
			</div >
		)
	}
}

export default ExperProfile