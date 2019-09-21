import React from 'react'
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
      audio: false,
      screen: true,
      maxLength: 10, //1200 seconds
      debug: true
    }
  }
};

const recordAuto = () => {
  document.getElementById('screenButton').click()
}

class Screen extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    this.player = videojs(this.videoNode, CameraOptions, () => {
      var version_info = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(version_info)
      this.player.children_[1].setAttribute('id', 'screenButton')
      this.player.children_[1].setAttribute('onLoad', recordAuto())
    });

    this.player.on('deviceReady', () => {
      this.player.record().start()
    });

    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    this.player.on('finishRecord', () => {
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
    console.log(blob)
    var formData = new FormData();
    formData.append('file', blob, blob.name);
    console.log('formData', formData)
    console.log('upload recording ' + blob.name + ' to storage');
    try {
      const response = await axios.post(`${APIURI.UXER}${this.props.uxerId}/${APIURI.ONE_PROJECT}${this.props.projectId}/upload`, formData)
      if (response.status !== 200) {
        throw new Error('CANNOT UPLOAD VIDEO FILE')
      }
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
      <div data-vjs-player>
        <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin myVideo-dimension" playsInline></video>
      </div>
    );
  }
}

export default Screen