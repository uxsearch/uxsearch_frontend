import React from 'react'
import { Field } from 'react-final-form'

import videojs from 'video.js'
import RecordRTC from 'recordrtc'
import Record from 'videojs-record/dist/videojs.record'
import 'webrtc-adapter'
import '../../../../node_modules/videojs-record/dist/css/videojs.record.css'
import '../../../../node_modules/video.js/dist/video-js.css'

import axios from '../../../utils/axios'
import APIURI from '../../../utils/apiuri'

const CameraOptions = {
  controls: {
    autoPlay: true
  },
  loop: false,
  fluid: false,
  autoSetup: true,
  plugins: {
    record: {
      autoPlay: true,
      audio: true,
      video: true,
      maxLength: 1800,
      debug: true
    }
  }
};

const recordAuto = () => {
  document.getElementById('cameraButton').click()
}

class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cameraDuration: undefined,
      videoURL: undefined
    }
  }

  async componentDidMount() {
    this.player = videojs(this.videoNode, CameraOptions, () => {
      this.player.children_[1].setAttribute('id', 'cameraButton')
      this.player.children_[1].setAttribute('onLoad', recordAuto())
    })

    this.player.on('deviceReady', () => {
      this.player.record().start()
    })

    this.player.on('progressRecord', () => {
      if (this.props.stopStatus === true) {
        this.player.record().stop()
      }
    })

    this.player.on('finishRecord', () => {
      this.setState({ cameraDuration: this.player.record().getDuration() })
      this.player.recordedData.name = 'video_' + this.player.recordedData.name
      this.props.setParentCameraState(this.player.recordedData, this.state.cameraDuration)
    });

    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin myVideo-dimension" playsInline></video>
        </div>
      </div>
    );
  }
}

export default Camera