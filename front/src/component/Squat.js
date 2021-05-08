import React, { useState, useEffect } from "react"
import * as tmPose from "@teachablemachine/pose"
import $ from "jquery"
import "../css/Squat.css"
import { withRouter } from "react-router-dom"

import Loader from "./Loader"
import ProgressBar from "./ProgressBar"

function Test(props) {
  const [cam, setCam] = useState(false) // 캠 상태
  let count = 0
  const scale = 0.5 // 스켈레톤 점 크기
  const state = {
    size: 250,
    progress: count,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "#7ea9e1",
  }
  let status = "stand"

  useEffect(() => {
    let timer = setTimeout(() => {
      init()
    }, 1)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    let time = setTimeout(() => {
      setCam(!cam)
    }, 10000)
    return () => {
      clearTimeout(time)
    }
  }, [])

  const URL = "https://teachablemachine.withgoogle.com/models/Bz-uPekOm/"
  let model, webcam, ctx, labelContainer, maxPredictions

  async function init() {
    const modelURL = URL + "model.json"
    const metadataURL = URL + "metadata.json"

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    model = await tmPose.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    // Convenience function to setup a webcam
    const flip = true // whether to flip the webcam
    webcam = new tmPose.Webcam(200, 200, flip) // width, height, flip
    await webcam.setup() // request access to the webcam
    webcam.play()
    window.requestAnimationFrame(loop)

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas")
    canvas.width = 200
    canvas.height = 200
    ctx = canvas.getContext("2d")
    labelContainer = document.getElementById("label-container")
    // for (let i = 0; i < maxPredictions; i++) {
    //   // and class labels
    //   labelContainer.appendChild(document.createElement("div"))
    // }
  }

  async function loop(timestamp) {
    webcam.update() // update the webcam frame
    await predict()
    window.requestAnimationFrame(loop)
  }

  function drawPose(pose) {
    ctx.drawImage(webcam.canvas, 0, 0)
    // draw the keypoints and skeleton
    if (pose) {
      const minPartConfidence = 0.5
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx, scale)

      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx)
    }
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    const prediction = await model.predict(posenetOutput)

    if (prediction[0].probability.toFixed(2) >= 0.85) {
      if (status === "squat") {
        count++
      }
      status = "stand"
    } else if (prediction[1].probability.toFixed(2) >= 0.85) {
      status = "squat"
    } else if (prediction[2].probability.toFixed(2) >= 1.0) {
      status = "Bad posture"
      // count++
      // $(".count").html(count)
    } else if (prediction[3].probability.toFixed(2) >= 1.0) {
      status = "none"
      count++
      $(".count").html(count)
      console.log(count)
    }
    for (let i = 0; i < maxPredictions; i++) {
      // console.log(
      //   prediction[i].className +
      //     ": " +
      //     prediction[i].probability.toFixed(2) * 100 +
      //     "%",
      // )
      drawPose(pose)
    }
  }

  return (
    <>
      <div className={cam ? "display" : "displayNone"}>
        <div className="exerImg">
          <img src="/img/squat1.gif" alt="" />
          <div className="tts">
            <span>tts자막</span>
          </div>
        </div>
        <div className="canvasCenter">
          <canvas id="canvas" />
          <div className="counter">
            <span className="count">{count}</span>
            <ProgressBar {...state} count={count} />
          </div>
          <div className="hiddenImg">
            <img src="/img/transparentsSquat.gif" alt="" />
          </div>
        </div>
      </div>
      <div className={cam ? "LoaderNone" : "Loader"}>
        <Loader />
      </div>
    </>
  )
}

export default withRouter(Test)
