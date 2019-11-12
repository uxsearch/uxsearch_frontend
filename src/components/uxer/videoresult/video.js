import React from 'react'
import { Row, Col, Button } from 'reactstrap'

class PlayVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faceVideoTime: props.faceVideo,
			screenVideoTime: props.screenVideo
		};
	}

	playAndPauseVideo = () => {
		var faceVideo = document.getElementById('facevideo')
		var screenVideo = document.getElementById('screenvideo')
		var button = document.getElementById('playNpauseBtn')

		if (document.getElementById('playNpauseBtn').innerText === 'Play') {
			faceVideo.play()
			screenVideo.play()
			button.innerHTML = 'Pause'
		} else if (document.getElementById('playNpauseBtn').innerText === 'Pause') {
			faceVideo.pause()
			screenVideo.pause()
			button.innerHTML = 'Play'
		}
	}

	skip = time => {
		var faceVideo = document.getElementById('facevideo')
		var screenVideo = document.getElementById('screenvideo')
		faceVideo.currentTime += time;
		screenVideo.currentTime += time;
	}

	render() {
		const { faceVideoTime, screenVideoTime } = this.state

		return (
			<div>
				<Row>
					<Col xs={12} className='card-video'>
						<Row className='no-gutters justify-content-center'>
							<Col xs={12} md={6}>
								<video controls className='play-video' id='facevideo'>
									<source src={faceVideoTime} type='video/webm' />
								</video>
							</Col>
							<Col xs={12} md={6}>
								<video controls className='play-video' id='screenvideo'>
									<source src={screenVideoTime} type='video/webm' />
								</video>
							</Col>
						</Row>
					</Col>
				</Row>
				<br />
				<Row className='justify-content-center'>
					<Col xs={2}>
						<Button id='backward' className='control-btn' onClick={() => this.skip(-10)}>Backward</Button>
					</Col>
					<Col xs={2}>
						<Button id='playNpauseBtn' className='control-btn' onClick={() => this.playAndPauseVideo()}>Play</Button>
					</Col>
					<Col xs={2}>
						<Button id='forward' className='control-btn' onClick={() => this.skip(10)}>Forward</Button>
					</Col>
				</Row>
			</div>
		)
	}
}
export default PlayVideo

