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
      maxLength: 1200, //1200 seconds
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
      // var version_info = 'Using video.js ' + videojs.VERSION +
      //   ' with videojs-record ' + videojs.getPluginVersion('record') +
      //   ' and recordrtc ' + RecordRTC.version;
      // videojs.log(version_info)
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
      this.uploadVideo(this.player.recordedData);
    });

    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }

  async uploadVideo(blob) {
    var formData = new FormData();
    formData.append('file', blob, blob.name);
    try {
      const response = await axios.post(`${APIURI.UXER}${this.props.uxerId}/${APIURI.ONE_PROJECT}${this.props.projectId}/upload`, formData)
      if (response.status !== 201) {
        throw new Error('CANNOT UPLOAD VIDEO FILE')
      }
      this.setState({ videoURL: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <Field component='input' type='hidden' name='video_time' initialValue={this.state.cameraDuration && this.state.cameraDuration} />
        <Field component='input' type='hidden' name='video_url' initialValue={this.state.videoURL && this.state.videoURL.video_url} />
        <div data-vjs-player>
          <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin myVideo-dimension" playsInline></video>
        </div>
      </div>
    );
  }
}

export default Camera