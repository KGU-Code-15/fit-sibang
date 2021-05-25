import React, { useState } from "react"

import TopHeader from "./TopHeader"
import Footer from "./Footer"
import Chart from "./Chart"
import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
import Modal from "react-modal"
import { Button } from "@material-ui/core"
import { myPage } from "../_action/user_action"
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { withRouter } from "react-router-dom"
// redux
import { useDispatch } from "react-redux"
import "../css/Mypage.css"
import { addWeightFunc } from "../_action/user_action"
//timez
const moment = require("moment")
var today = moment().format("YYYY-MM-DDTHH:mm:ss")
function getFormatDate(date) {
  var year = date.getFullYear()
  var month = 1 + date.getMonth()
  month = month >= 10 ? month : "0" + month
  var day = date.getDate()
  day = day >= 10 ? day : "0" + day
  var hours = date.getHours()
  var minutes = date.getMinutes()
  minutes = minutes >= 10 ? minutes : "0" + minutes
  var seconds = date.getSeconds()
  seconds = seconds >= 10 ? seconds : "0" + seconds

  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
  )
}

function Mypage(props) {
  const [chart, setChart] = useState("")
  const [weightmodal, setweightModal] = useState(false) // 몸무게 수정 modal
  const [badgemodal, setbadgeModal] = useState(false) // 뱃지 modal
  const [userName, setUserName] = useState("")
  const [weight, setWeight] = useState("")
  const [weightChange, setWeightChange] = useState("")
  const [changeColor, setChangeColor] = useState("")
  const [dataset, setDataset] = useState("")
  const [height, setHeight] = useState("")

  // badge
  const [sqartBaby, setSqartBaby] = useState(false)
  const [horseLeg, setHorseLeg] = useState(false)

  const dispatch = useDispatch()

  dispatch(myPage()).then((response) => {
    // userName
    if (response.payload.isAuth === false) {
    } else {
      var userName_ = [...userName]
      userName_ = response.payload.userName
      setUserName(userName_)
      var height_ = response.payload.height
      setHeight(height_)
      // badge
      if(response.payload.badge.babySqarter == true){
        setSqartBaby(true)
      }
      if(response.payload.badge.horseLeg == true){
        setHorseLeg(true)
      }

      response.payload.weight.sort(function (a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
      })
      //weight now
      var weight_ = [...weight]
      weight_ = String(
        response.payload.weight[response.payload.weight.length - 1].weight_
      )
      setWeight(weight_)

      // weight change

      var weightChange_ = [...weightChange]
      var changeColor_ = [...changeColor]
      var pre = response.payload.weight[0].weight_
      var curt =
        response.payload.weight[response.payload.weight.length - 1].weight_
      var result
      var dataset_ = response.payload.weight
      setDataset(dataset_)
      var op
      if (pre > curt) {
        result = pre - curt
        op = "-"
        result = result.toFixed(2)
        changeColor_ = "decreasePer"
      } else if (pre < curt) {
        result = curt - pre
        op = "+"
        result = result.toFixed(2)
        changeColor_ = "increasePer"
      } else {
        result = "0.00"
        op = ""
        changeColor_ = ""
      }
      weightChange_ = op + String(result)
      setChangeColor(changeColor_)
      setWeightChange(weightChange_)
    }
  })
  // add weight modal
  const [selectedDate, setSelectedDate] = React.useState(new Date(today))
  const [addWeight, setAddWeight] = useState("")

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleAddWeight = (event) => {
    setAddWeight(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    var selectedDate_ = getFormatDate(selectedDate)
    if (isNaN(addWeight)) {
      return alert("잘못된 몸무게 형식입니다.")
    }
    let body = {
      userName: userName,
      weight: addWeight,
      date: selectedDate_,
    }
    dispatch(addWeightFunc(body)).then((response) => {
      if (response.payload.success) {
        alert("성공적으로 등록되었습니다.")
        props.history.push("/mypage")
      } else {
        alert(response.payload.message)
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopHeader />
      <div className="report">
        <div className="userProfile">
          <div className="userFlex">
            <div className="userImg">
              <img src="img/profile.gif" alt="profile_img" />
            </div>
            <div className="userInfo">
              <span>{userName}</span>
              <div className="weightFlex">
                {/* <span className="beforeWeight">64kg </span> */}
                <span className="afterWeight">{weight}kg</span>
                <div className="changeWeight">
                  <span className={changeColor}>{weightChange}</span>
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setweightModal(true)
                    }}
                  />
                  <Modal
                    isOpen={weightmodal}
                    onRequestClose={() => {
                      setweightModal(false)
                    }}
                    className="modal"
                  >
                    <CloseIcon
                      style={{ padding: "15px", cursor: "pointer" }}
                      onClick={() => {
                        setweightModal(false)
                      }}
                    />
                    {badgemodal === "true" ? <div></div> : null}
                    <div className="centerFlex">
                      <div className="day">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Grid container justify="space-around">
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              label="날짜"
                              format="yyyy-MM-dd"
                              value={selectedDate}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </Grid>
                        </MuiPickersUtilsProvider>
                      </div>
                      <div className="weightWrap">
                        <TextField
                          label="몸무게"
                          id="standard-start-adornment"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                Kg
                              </InputAdornment>
                            ),
                          }}
                          value={addWeight}
                          onChange={handleAddWeight}
                        />
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={onSubmitHandler}
                        >
                          추 가
                        </Button>
                      </div>
                    </div>
                  </Modal>
                  {/* <span className="decreasePer"> -8.39%</span> */}
                  {/* <span className="increasePer"> +8.39%</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="userSettingsList">
            <button>트레이너 피드백</button>
            <button
              onClick={() => {
                setbadgeModal(true)
              }}
            >
              내 뱃지
            </button>

            <Modal
              className="badgeModal"
              isOpen={badgemodal}
              onRequestClose={() => {
                setbadgeModal(false)
              }}
            >
              <CloseIcon
                style={{ padding: "15px", cursor: "pointer" }}
                onClick={() => {
                  setbadgeModal(false)
                }}
              />
              <div className="badgeGrid">
              {sqartBaby === true ? <div className="imgWidth">
                  <img src="/img/bedge/sqart.png" alt="badge" />
                  <span>아기 스쿼터</span>
                </div>: <div className="imgWidth">
                  <img src="/img/bedge/sqart_d.png" alt="badge" />
                  <span>???</span>
                </div>}
               {horseLeg === true ? <div className="imgWidth">
                  <img src="/img/bedge/sqart2.png" alt="badge" />
                  <span>말벅지</span>
                </div>: <div className="imgWidth">
                  <img src="/img/bedge/sqart2_d.png" alt="badge" />
                  <span>???</span>
                </div> }
              </div>
            </Modal>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="userdataFlex">
            <div className="userData">
              <div className="exerFeedback">
                {chart === "" ? (
                  <>
                    <span>원하시는 지표의 버튼을 클릭해주세요.</span>
                    <button className="btnExercise">운동하러 가기</button>
                  </>
                ) : (
                  Chart(dataset, chart, height)
                )}
              </div>
            </div>
            <div className="buttonFlex">
              <button
                className="BMI"
                onClick={() => {
                  setChart("kg")
                }}
              >
                kg
              </button>
              <button
                className="weight"
                onClick={() => {
                  setChart("bmi")
                }}
              >
                bmi
              </button>
              <button
                className="kcal"
                onClick={() => {
                  setChart(!chart)
                }}
              >
                kcal
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(Mypage)
