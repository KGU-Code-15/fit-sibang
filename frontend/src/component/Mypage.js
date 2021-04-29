import React, { useState } from "react"

import Menubar from "./Menubar"
import Chart from "./Chart"
import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
import Modal from "react-modal"
import { Button } from "@material-ui/core"
import { Input } from "@material-ui/core"

import "../css/Mypage.css"

function Mypage() {
  const [chart, setChart] = useState(false)
  const [showmodal, setshowModal] = useState(false)
  console.log(showmodal)

  return (
    <div className="wrap">
      <Menubar />
      <div className="report">
        <div className="userProfile">
          <div className="userFlex">
            <div className="userImg">
              <img src="img/profile.jpg" alt="profile_img" />
            </div>
            <div className="userInfo">
              <span>한상준</span>
              <div className="weightFlex">
                {/* <span className="beforeWeight">64kg </span> */}
                <span className="afterWeight">78kg</span>
                <div className="changeWeight">
                  <span>0.00%</span>
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setshowModal(true)
                    }}
                  />

                  {showmodal === true ? (
                    <Modal isOpen={showmodal} className="modal">
                      <CloseIcon
                        style={{ padding: "15px", cursor: "pointer" }}
                        onClick={() => {
                          setshowModal(false)
                        }}
                      />

                      <div className="centerFlex">
                        <div className="weightWrap">
                          <div className="weightValue">몸무게 : </div>
                          <Input /> Kg
                        </div>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {}}
                          >
                            수정하기
                          </Button>
                        </div>
                      </div>
                    </Modal>
                  ) : null}
                  {/* <span className="decreasePer"> -8.39%</span> */}
                  {/* <span className="increasePer"> +8.39%</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="userSettingsList">
            <button>트레이너 피드백</button>
            <button>내 뱃지</button>
          </div>
        </div>
        <div>
          <div className="userdataFlex">
            <div className="userData">
              <div className="exerFeedback">
                {chart === true ? (
                  <Chart />
                ) : (
                  <>
                    <span>운동 데이터가 아직 없습니다</span>
                    <button className="btnExercise">운동하러 가기</button>
                  </>
                )}
              </div>
            </div>
            <div className="buttonFlex">
              <button
                className="BMI"
                onClick={() => {
                  setChart(!chart)
                }}
              >
                BMI
              </button>
              <button
                className="weight"
                onClick={() => {
                  setChart(!chart)
                }}
              >
                몸무게
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
    </div>
  )
}

export default Mypage
