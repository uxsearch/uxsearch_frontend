import React from 'react'
import { Row, Col, Label, Input } from 'reactstrap'

import axios from '../../../utils/axios'
import APIURI from '../../../utils/apiuri'

class ResultQuestion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experId: this.props.experiment
		}
	}

// 	getAnswer = async () => {
// 		try {
// 		  const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}/${APIURI.EXPERIMENTER}${this.state.experId}/questionnaire`)
//       console.log(response);
//       if (response.status !== 200) {
// 			throw new Error('CANNOT GET QUESTIONNAIRE')
// 		  }
// 		  this.setState({questionnaire: response.data})
// 		}catch (e){
// 		  console.log(e)
// 		}
//   }

	render() {
		const questionnaire = this.props.question
		console.log('questionnaire in component', this.state.experId)
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
											<p className='question-text'></p>
										</Col>
									</Row>
									<Row>
										<Col xs={12}>
											<Label className='w-100'>
												<Input 
													type='textarea' 
													value=''
													className='input-field'
													rows='3'
													disabled 
												/>
											</Label>
										</Col>
									</Row>
								</Col>
							</Row>
					)
				</Col>
			</Row>
		)
	}
}

export default ResultQuestion