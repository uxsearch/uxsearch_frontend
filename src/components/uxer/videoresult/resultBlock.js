import React from 'react'
import { Row, Col, Label, Input } from 'reactstrap'

class ResultQuestion extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const questions = this.props.questions
		return (
			<Row>
				<Col xs={12} className='bg-questionnaire'>
					<Row className='justify-content-center'>
						<Col xs={12}>
							<h2>Result of Questionnaire</h2>
						</Col>
					</Row>
					<br />
					{questions.map(questions => (
                      <>
						<Row>
							<Col xs={12}>
								<Row>
									<Col xs={12}>
										<p className='question-text'>{questions.answer.question}</p>
									</Col>
								</Row>
								<Row>
									<Col xs={12}>
										<Label className='w-100'>
											<Input 
												type='textarea' 
												value={questions.answer.answer}
												className='input-field'
												rows='3'
												disabled 
											/>
										</Label>
									</Col>
								</Row>
							</Col>
						</Row>
					  </>
					))}
				</Col>
			</Row>
		)
	}
}

export default ResultQuestion