import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../../../static/sass/uxer/videoResult.scss'

class PlayVideo extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			source: 'http://media.w3.org/2010/05/bunny/movie.mp4'
		};
	}

	render() {
		return (
			<div>
				<div className='card-video'>
					<Container >
						<Row>
							<Col md={6}>
								<video controls className='play-video'>
									<source src='http://media.w3.org/2010/05/bunny/movie.mp4' type='video/mp4' />
								</video>
							</Col>

							<Col md={6} >
								<video controls className='play-video'>
									<source src='http://media.w3.org/2010/05/bunny/movie.mp4' type='video/mp4' />
								</video>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}
export default PlayVideo

