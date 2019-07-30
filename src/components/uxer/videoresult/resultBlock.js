import React from 'react'
import { Row, Col, Label, Input } from 'reactstrap'

class ResultQuestion extends React.Component {
	render() {
		return (
			<Row>
				<Col xs={12} className='bg-questionnaire'>
					<Row className='justify-content-center'>
						<Col xs={12}>
							<h2>Result of Questionnaire</h2>
						</Col>
					</Row>
					<br />
					<Row>
						<Col xs={12}>
							<Row>
								<Col xs={12}>
									<p className='question-text'>1. What you expect in this program?</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12}>
									<Label className='w-100'>
										<Input 
											type='textarea' 
											value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and scrambled it to make a type specimen.`}
											className='input-field'
											rows='3'
											disabled 
										/>
									</Label>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Row>
								<Col xs={12}>
									<p className='question-text'>2. Would you like to recommend something more?</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12}>
								<Label className='w-100'>
										<Input 
											type='textarea' 
											value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and scrambled it to make a type specimen.`}
											className='input-field'
											rows='3'
											disabled
										/>
									</Label>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}

export default ResultQuestion