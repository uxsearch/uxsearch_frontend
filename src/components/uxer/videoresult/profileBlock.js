import React from 'react'
import { Row, Col, Label, Input } from 'reactstrap'

import '../../../static/sass/uxer/videoResult.scss'

class ExperProfile extends React.Component {
	render() {
		return (
			<Row>
				<Col xs={12} className='bg-experprofile'>
					<Row className='justify-content-center'>
						<Col xs={12}>
							<h2>Experimenter Profile</h2>
						</Col>
					</Row>
					<br />
					<Row className='justify-content-center'>
						<Col xs={12} lg={6}>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Name :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='Leroy Romero' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>Leroy Romero</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Age :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='23' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>23</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Gender :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='Male' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>Male</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Tel :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='0813499490' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>816-349-9490</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Email :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='email' value='example@gmail.com' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>example@gmail.com</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Province/City :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='Kansas City' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>Kansas City</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Country :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='United States' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>United States</p>
								</Col>
							</Row>
						</Col>
						<Col xs={12} lg={6}>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Education :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='National Taiwan University' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>National Taiwan University</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Job :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value='Freelance' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>Freelance</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Lifestyle :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='textarea' value='Shopping, See movies, Photoshoot, Travel, Sport' className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>Shopping, See movies, Photoshoot, Travel, Sport</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}

export default ExperProfile