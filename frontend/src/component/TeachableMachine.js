import React, { useState } from 'react';
import * as tmPose from '@teachablemachine/pose';
import $ from 'jquery';
import '../css/TeachableMachine.css';
import { withRouter } from 'react-router-dom';

function Test() {
  let count = 0;
  let status = 'stand';
  const [start, setStart] = useState(false);
  const URL = 'https://teachablemachine.withgoogle.com/models/Bz-uPekOm/';

  let model, webcam, ctx, labelContainer, maxPredictions;

  async function init() {
    setStart(!start);
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 500;
    const flip = true;
    webcam = new tmPose.Webcam(size, size, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    const canvas = document.getElementById('canvas');
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext('2d');
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'));
    }
  }

  const loop = async (timestamp) => {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    if (prediction[0].probability.toFixed(2) >= 0.85) {
      if (status === 'squat') {
        count++;
        $('.count').html(count);
      }
      status = 'stand';
    } else if (prediction[1].probability.toFixed(2) >= 0.85) {
      status = 'squat';
    } else if (prediction[2].probability.toFixed(2) >= 0.85) {
      if (status === 'squat' || status === 'stand') {
      }
      status = 'bent';
    }

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;

      drawPose(pose);
    }
  };

  const drawPose = () => {
    const { pose, posenetOutput } = model.estimatePose(webcam.canvas);
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0);

      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  return (
    <>
      <div className='center'>
        <button
          className='start'
          type='button'
          onClick={init}
          style={{ display: start ? 'none' : 'block' }}
        >
          {start ? 'STOP' : 'START'}
        </button>
      </div>
      <div id='label-container'></div>
      <div className='canvasCenter'>
        <canvas id='canvas' />
        <div className='counter' style={{ display: start ? 'block' : 'none' }}>
          <div className='count'>{count}</div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Test);
