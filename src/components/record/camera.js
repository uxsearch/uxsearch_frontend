import React from 'react'

import '../../../node_modules/video.js/dist/video-js.css'
import videojs from 'video.js'

import 'webrtc-adapter'
import RecordRTC from 'recordrtc'
// register videojs-record plugin with this import
import '../../../node_modules/videojs-record/dist/css/videojs.record.css'
import Record from 'videojs-record/dist/videojs.record'

import '../../static/css/experimenter/record.css'

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
      maxLength: 10, //1200 seconds
      debug: true
    }
  }
};
class Camera extends React.Component {

  async componentDidMount() {
    this.player = videojs(this.videoNode, CameraOptions, () => {
      var version_info = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(version_info)
      console.log(this.player)

    });

    // device is ready
    this.player.on('deviceReady', () => {
      console.log('device is ready!');
      this.player.record().start()
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log('finished recording: ', this.player.recordedData);
    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }

  // destroy player on unmount
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

export default Camera