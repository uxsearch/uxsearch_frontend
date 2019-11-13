import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

class PlayVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faceVideoTime: props.faceVideoTime,
			faceVideo: props.faceVideo,
			screenVideoTime: props.screenVideoTime,
			screenVideo: props.screenVideo
		};
	}

	componentDidMount = () => {
		this.loadStartTime()
	}

	loadStartTime = () => {
		document.getElementById('facevideo').currentTime = this.state.faceVideoTime - this.state.screenVideoTime
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
		const { faceVideo, screenVideo } = this.state

		return (
			<div>
				<Row>
					<Col xs={12} className='card-video'>
						<Row className='no-gutters justify-content-center'>
							<Col xs={12} md={6}>
								<video controls className='play-video' id='facevideo'>
									<source src={faceVideo} type='video/webm' />
								</video>
							</Col>
							<Col xs={12} md={6}>
								<video controls className='play-video' id='screenvideo'>
									<source src={screenVideo} type='video/webm' />
								</video>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='justify-content-center control-bar'>
					<Col xs={3} md={2} lg={1}>
						<Button id='backward' className='control-btn' onClick={() => this.skip(-10)}>
							<span>10s </span><FontAwesomeIcon icon={faBackward} size='1x' color='#fff' />
						</Button>
					</Col>
					<Col xs={3} md={2} lg={1}>
						<Button id='playNpauseBtn' className='control-btn' onClick={() => this.playAndPauseVideo()}>Play</Button>
					</Col>
					<Col xs={3} md={2} lg={1}>
						<Button id='forward' className='control-btn' onClick={() => this.skip(10)}>
							<FontAwesomeIcon icon={faForward} size='1x' color='#fff' /><span> 10s</span>
						</Button>
					</Col>
				</Row>
			</div>
		)
	}
}
export default PlayVideo

