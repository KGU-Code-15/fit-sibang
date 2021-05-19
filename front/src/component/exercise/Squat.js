import React, { useState, useEffect } from "react"
import * as tmPose from "@teachablemachine/pose"
import "../../css/exer_css/CountExercise.css"
import { withRouter } from "react-router-dom"
import Loader from "../Loader"
import ProgressBar from "../ProgressBar/CountProgressBar"
import Modal from "react-modal"
import { myPage } from "../../_action/user_action"
import { useDispatch } from "react-redux"
import { addRecord } from "../../_action/exercise_action"

//timez
const moment = require("moment")
var today = moment().format("YYYY-MM-DD HH:mm:ss")

let copyCount = 0

function Squat() {
  let [count, setCount] = useState(copyCount)
  const [cam, setCam] = useState(false) // 캠 상태
  const [counterModal, setcounterModal] = useState(false) // 운동 결과 스쿼트 몇회 했는지
  const [badgeModal, setbadgeModal] = useState(false) // 뱃지 획득
  const [newRecordModal, setnewRecordModal] = useState(false) // 신기록
  const [totalCount, setTotalCount] = useState(0)
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

  useEffect(() => {
    if (count === 20) {
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
            exercise: "squat",
            numberOrTime: true,
            count_: count,
            useKcal: count * 0.4,
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

  const URL = "https://teachablemachine.withgoogle.com/models/Bz-uPekOm/"
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

  const audioTune = new Audio("/TTS/audio_0_자_스쿼트를_시작합니다_.mp3")

  const [playInLoop, setPlayInLoop] = useState(false)

  useEffect(() => {
    audioTune.load()
  }, [])

  useEffect(() => {
    audioTune.loop = playInLoop
  }, [playInLoop])

  const playSound = () => {
    audioTune.play()
    console.log("Play!")
  }

  const pauseSound = () => {
    audioTune.pause()
  }

  const stopSound = () => {
    audioTune.pause()
    audioTune.currentTime = 0
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    const prediction = await model.predict(posenetOutput)
    // init = stand
    if (prediction[0].probability.toFixed(2) >= 1.0) {
      // 실험 코드
      // prediction[4].probability.toFixed(2) >= 0.9

      // 0 squat 1 stand 2 bad 3 wa 4 none
      if (status === "squat") {
        setCount(count++)
        let audioTune = new Audio("/TTS/물방울.mp3")
        console.log(audioTune)
        audioTune.play()
      }
      status = "stand"
    } else if (prediction[0].probability.toFixed(2) >= 1.0) {
      status = "squat"
    } else if (prediction[3].probability.toFixed(2) >= 1.0) {
      if (status === "squat" || status === "stand") {
        let audio = new Audio("/TTS/audio_22_자세를_똑바로_해주세요_.mp3")
        console.log(audio)
        audio.play()
      }
      status = "none"
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
          <img src="/img/squat1.gif" alt="" />
          <div className="tts">
            <span>tts자막</span>
            <button className="st_button" onClick={playSound}>
              Start
            </button>
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
                    누적 횟수 : <span>{totalCount}</span>
                  </p>
                </div>
                <div className="exerKcal">
                  <img src="img/health_kcal.png" alt="kcal" />
                  <p>
                    {count} x 0.5 kcal = <span>{(count * 0.4).toFixed(1)}</span>
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

export default withRouter(Squat)
