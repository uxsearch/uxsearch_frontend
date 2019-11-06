import React from 'react'
import { Row, Col } from 'reactstrap'

class PlayVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faceVideoTime: props.faceVideoTime,
			screenVideoTime: props.screenVideoTime
		};
	}

	render() {
		const {faceVideoTime ,screenVideoTime} = this.state

		return (
			<Row>
				<Col xs={12} className='card-video'>
					<Row className='no-gutters justify-content-center'>
						<Col xs={12} md={6}>
							<video controls className='play-video'>
								<source src={this.props.faceVideo} type='video/webm' />
							</video>
						</Col>
						<Col xs={12} md={6}>
							<video controls className='play-video'>
								<source src={this.props.screenVideo} type='video/webm' />
							</video>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}
export default PlayVideo

