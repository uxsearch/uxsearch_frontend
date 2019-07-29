import React from 'react'
import { Row, Col } from 'reactstrap'

class PlayVideo extends React.Component {
	render() {
		return (
			<Row>
				<Col xs={12} className='card-video'>
					<Row className='no-gutters justify-content-center'>
						<Col xs={12} md={6}>
							<video controls className='play-video'>
								<source src='http://media.w3.org/2010/05/bunny/movie.mp4' type='video/mp4' />
							</video>
						</Col>
						<Col xs={12} md={6}>
							<video controls className='play-video'>
								<source src='http://media.w3.org/2010/05/bunny/movie.mp4' type='video/mp4' />
							</video>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}
export default PlayVideo

