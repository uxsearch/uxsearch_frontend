import React from 'react'
import Camera from '../components/record/camera';
import Screen from '../components/record/screen';

const CameraOptions = {
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

const ScreenOptions = {
  controls: true,
  width: 320,
  height: 240,
  loop: false,
  fluid: false,
  plugins: {
    record: {
      maxLength: 10, //1200 seconds
      debug: true, 
      screen: true
    }
  }
};

class RecordPage extends React.Component {

  render() {
    return (
      <div>
        <Camera {...CameraOptions} />
        <Screen {...ScreenOptions} />
      </div>
    )
  }
}

export default RecordPage