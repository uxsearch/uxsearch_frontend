import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap'

import '../../static/sass/uxer/videoResult.scss'

class ExperProfile extends React.Component {
	render() {
		return (
			<div>
				<Row md={12}>
					<img src={require('../../static/img/user-solid.svg')} width='50' height='30px' />
					<h3> Leroy Romero</h3>
				</Row>

				<Button col='md={12}' size='lg' href="/testing/record">Usability Test note </Button>

				<Container className='bg-experprofile'>
					<h3>Experimenter Profile</h3>
					<Row md={12} class="col-md-12">
						<div class="col-md-12 col-md-12"></div>
						<Col md={4}>
							<p> Name : </p>
							<p> Age : </p>
							<p> Gender : </p>
							<p> Tel : </p>
							<p> Email : </p>
							<p> Province/City : </p>
							<p> Country : </p>
						</Col>
						<Col md={4}>
							<p> Leroy  Romero </p>
							<p> 23 </p>
							<p> Male </p>
							<p> 816-359-9490 </p>
							<p> example@gmail.com  </p>
							<p> Kansas City </p>
							<p> United States </p>
						</Col>
						<Col md={4}>
							<p> Education : </p>
							<p> Job : </p>
							<p> Lifestyle : </p>
						</Col>
						<Col md={4}>
							<p> National Taiwan University </p>
							<p> Freelance</p>
							<p> Shopping, See movies, Photoshoot, Travel , Sport </p>
						</Col>

					</Row>
				</Container>

				<Container className='bg-questionnaire'>
					<h3>Result of Questionnaire</h3>
					<Row md={12} class="col-md-12">
						<div class="col-md-12 col-md-12"></div>
						<Col md={12}>
							<p>1. What you expect in this program?</p>
							<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknow printer took a galley of type and scrambled it to make a type specimen </p>
						</Col>

						<Col md={12}>
							<p>2. Would you like to recommend something more?</p>
							<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknow printer took a galley of type and scrambled it to make a type specimen </p>
							<p> Shopping, See movies, Photoshoot, Travel , Sport </p>
						</Col>







					</Row>
				</Container>

			</div >
		)
	}
}

export default ExperProfile