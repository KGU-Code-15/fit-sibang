import React from 'react';
import Webcam from 'react-webcam';

import '../css/App.css';
import '../css/start.css';

const videoConstraints = {
  width: '50%',
  facingMode: 'user',
};

const WebCamComponent = () => (
  <Webcam
    className='webcam'
    audio={false}
    mirrored={true}
    videoConstraints={videoConstraints}
    style={{
      objectFit: 'fill',
    }}
  />
);

function Start() {
  return (
    <div className='startWrap'>
      <div className='container'>
        <WebCamComponent />
        <div className='exampleView'>
          <div className='examExer'>
            <img src='/img/pushup.gif' alt='img' />
          </div>
          <div className='tts'>
            <p>tts 내용</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
