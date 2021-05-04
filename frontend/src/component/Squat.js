import React, { useEffect } from "react"
import * as tmPose from "@teachablemachine/pose"
import $ from "jquery"
import "../css/Squat.css"
import { withRouter } from "react-router-dom"

function Test() {
  useEffect(() => {
    let timer = setTimeout(() => {
      init()
    }, 1000)
    console.log("안녕")
    return () => {
      clearTimeout(timer)
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="exerImg">
        <img src="/img/squat1.gif" alt="" />
      </div>
      <div className="canvasCenter">
        <canvas id="canvas" />
        <div className="count">
          <span>{count}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Test)
