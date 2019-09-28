import React from 'react'
import { Row, Col, Label, Input } from 'reactstrap'

class ExperProfile extends React.Component {
	constructor(props) {
		super(props)
	}

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
										<Input type='text' value={this.props.name || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.name || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Age :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.age || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.age || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Gender :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.gender || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.gender || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Tel :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.tel || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.tel || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Email :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='email' value={this.props.email || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.email || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Province/City :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.city || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.city || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Country :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.country || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.country || 'none'}</p>
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
										<Input type='text' value={this.props.educate || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.educate || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Job :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='text' value={this.props.job || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.job || 'none'}</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={3} lg={4}>
									<p className='no-margin topic-text'>Lifestyle :</p>
								</Col>
								<Col xs={12} md={9} lg={8}>
									<Label className='w-100 d-md-none'>
										<Input type='textarea' value={this.props.lifestyle || 'none'} className='input-field' disabled />
									</Label>
									<p className='d-none d-md-block'>{this.props.lifestyle || 'none'}</p>
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