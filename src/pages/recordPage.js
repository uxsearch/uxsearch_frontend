import React from 'react'
import Camera from '../components/camera.js';

const videoJsOptions = {
  controls: true,
  width: 320,
  height: 240,
  loop: false,
  fluid: false,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 10, //1200 seconds
      debug: true
    }
  }
};

class RecordPage extends React.Component {

  render() {
    return (
      <div>
        <Camera {...videoJsOptions} />
      </div>
    )
  }
}

export default RecordPage