import React, { useState, useEffect } from "react"
import * as tmPose from "@teachablemachine/pose"
import "../../css/exer_css/CountExercise.css"
import { withRouter } from "react-router-dom"
import Loader from "../Loader"
import ProgressBar from "../ProgressBar/CountProgressBar"
import WebcamCapture from "../WebcamCapture"
import Modal from "react-modal"
import { myPage } from "../../_action/user_action"
import { useDispatch } from "react-redux"
import { addRecord } from "../../_action/exercise_action"

//timez
const moment = require("moment")
var today = moment().format("YYYY-MM-DD HH:mm:ss")

let copyCount = 0

function Lunge() {
  let [count, setCount] = useState(copyCount)
  const [cam, setCam] = useState(false) // 캠 상태
  const [counterModal, setcounterModal] = useState(false) // 운동 결과 스쿼트 몇회 했는지
  // const [badgeModal, setbadgeModal] = useState(false) // 뱃지 획득
  // const [newRecordModal, setnewRecordModal] = useState(false) // 신기록
  const [totalCount, setTotalCount] = useState(0)
  const tts = [
    "서있는 자세에서 발을 하나 앞으로 먼저 뻗고나서 무릎을 굽혀 앉습니다.",
    "잘하고 있어요",
    "거의 다 왔어요",
    "완료!",
  ]
  const dispatch = useDispatch()

  const scale = 0.5 // 스켈레톤 점 크기
  const state = {
    size: 150,
    progress: count,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "#7ea9e1",
  }

  let status = "stand"

  useEffect(() => {
    init()
    let time = setTimeout(() => {
      setCam(!cam)
      let audioTune = new Audio("/TTS/lunge.mp3")
      audioTune.play()
    }, 10000)

    return () => {
      clearTimeout(time)
    }
  }, [])

  useEffect(() => {
    if (count === 15) {
      let audioTune = new Audio("/TTS/good.mp3")
      audioTune.play()
    }

    if (count === 20) {
      let audioTune = new Audio("/TTS/finish.mp3")
      audioTune.play()
      setcounterModal(!counterModal)
    }
  }, [count])

  useEffect(() => {
    if (counterModal === true) {
      dispatch(myPage()).then((response) => {
        if (response.payload.isAuth === false) {
        } else {
          const body = {
            userName: response.payload.userName,
            exercise: "lunge",
            numberOrTime: true,
            count_: count,
            useKcal: count * 1.5,
            when: today,
          }
          dispatch(addRecord(body)).then((response) => {
            if (response.payload.success) {
              setTotalCount(response.payload.totalCount)
            } else {
              alert("db 오류 발생 ..")
            }
          })
        }
      })
    }
  }, [counterModal])

  const URL = "https://teachablemachine.withgoogle.com/models/fBJRiCXJ0/"
  let model, webcam, ctx, maxPredictions
  // let labelContainer
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
    // labelContainer = document.getElementById("label-container")
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
    if (prediction[0].probability.toFixed(2) >= 1.0) {
      if (status === "lunge") {
        setCount(count++)
        let audioTune = new Audio("/TTS/count.mp3")
        audioTune.play()
      }
      status = "stand"
    } else if (prediction[1].probability.toFixed(2) >= 1.0) {
      status = "lunge"
    }
    for (let i = 0; i < maxPredictions; i++) {
      // console.log(
      //   prediction[i].className +
      //     ": " +
      //     prediction[i].probability.toFixed(2) * 100 +
      //     "%",
      // )
      // console.log("-------------------")
      drawPose(pose)
    }
  }

  return (
    <>
      <div className={cam ? "display" : "displayNone"}>
        <div className="exerImg">
          <img src="/img/lunge1.jpg" alt="" />
          <div className="tts">
            <WebcamCapture />
            {count === 0 ? <span>{tts[0]}</span> : null}
            {count === 5 ? <span>{tts[1]}</span> : null}
            {count === 15 ? <span>{tts[2]}</span> : null}
            {count === 20 ? <span>{tts[3]}</span> : null}

            <Modal
              isOpen={counterModal}
              className="exModal"
              ariaHideApp={false}
            >
              <div className="exermodalResult">
                <div className="exerResult">
                  <h2>운동 결과</h2>
                </div>
                <div className="exerCount">
                  <img src="img/health_count.png" alt="health_count" />
                  <p>
                    횟수 : <span>{count}</span>회
                  </p>
                </div>
                <div className="exertotalCount">
                  <img
                    src="img/health_total_count.png"
                    alt="health_total_count"
                  />
                  <p>
                    누적 횟수 : <span>{totalCount}</span>회
                  </p>
                </div>
                <div className="exerKcal">
                  <img src="img/health_kcal.png" alt="kcal" />
                  <p>
                    {count} x 1.5 kcal = <span>{(count * 1.5).toFixed(1)}</span>
                    kcal
                  </p>
                </div>
                <a className="Home" href="/">
                  홈
                </a>
              </div>
            </Modal>
          </div>
        </div>
        <div className="canvasCenter">
          <canvas id="canvas" />
          <div className="counter">
            <ProgressBar {...state} count={count} />
          </div>
          <button
            onClick={() => {
              setcounterModal(!counterModal)
            }}
          >
            운동 종료
          </button>
          <div className="hiddenImg">
            <img src="/img/transparentsLunge.png" alt="" />
            <WebcamCapture />
          </div>
        </div>
      </div>
      <div className={cam ? "LoaderNone" : "Loader"}>
        <Loader />
      </div>
    </>
  )
}

export default withRouter(Lunge)
