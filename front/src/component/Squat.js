import React, { useState, useEffect } from "react"
import * as tmPose from "@teachablemachine/pose"
import $ from "jquery"
import "../css/Squat.css"
import { withRouter } from "react-router-dom"

import Loader from "./Loader"

function Test() {
  const [cam, setCam] = useState(false)

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

  let count = 0
  let status = "stand"

  const URL = "https://teachablemachine.withgoogle.com/models/Bz-uPekOm/"

  let model, webcam, ctx, labelContainer, maxPredictions

  async function init() {
    const modelURL = URL + "model.json"
    const metadataURL = URL + "metadata.json"

    model = await tmPose.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const size = 500
    const flip = true
    webcam = new tmPose.Webcam(size, size, flip)
    await webcam.setup()
    await webcam.play()
    window.requestAnimationFrame(loop)

    const canvas = document.getElementById("canvas")
    canvas.width = size
    canvas.height = size
    ctx = canvas.getContext("2d")
    // labelContainer = document.getElementById("canvsCenter")
    // for (let i = 0; i < maxPredictions; i++) {
    //   labelContainer.appendChild(document.createElement("div"))
    // }
  }

  const loop = async (timestamp) => {
    webcam.update() // update the webcam frame
    await predict()
    window.requestAnimationFrame(loop)
  }

  const predict = async () => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    const prediction = await model.predict(posenetOutput)

    if (prediction[0].probability.toFixed(2) >= 0.85) {
      if (status === "squat") {
        count++
        $(".count").html(count)
      }
      status = "stand"
    } else if (prediction[1].probability.toFixed(2) >= 0.85) {
      status = "squat"
    } else if (prediction[2].probability.toFixed(2) >= 0.85) {
      status = "bent"
    }
    for (let i = 0; i < maxPredictions; i++) {
      // const classPrediction =
      //   prediction[i].className +
      //   ": " +
      //   prediction[i].probability.toFixed(2) * 100 +
      //   "%"
      // labelContainer.childNodes[i].innerHTML = classPrediction
      drawPose()
    }
  }

  const drawPose = () => {
    const { pose, posenetOutput } = model.estimatePose(webcam.canvas)
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0)

      if (pose) {
        const minPartConfidence = 0.5
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx)
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx)
      }
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
          <div className="count">
            <span>{count}</span>
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
