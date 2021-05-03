import React, { useState } from 'react'

import TopHeader from './TopHeader'
import Chart from './Chart'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import Modal from 'react-modal'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { myPage } from '../_action/user_action'

// redux
import { useDispatch } from 'react-redux'
import '../css/Mypage.css'

function Mypage() {
  const [chart, setChart] = useState(false)
  const [weightmodal, setweightModal] = useState(false) // 몸무게 수정 modal
  const [badgemodal, setbadgeModal] = useState(false) // 뱃지 modal
  const modalbackground = {
    backgroundColor: 'rgba(74,74,74,0.75)',
  }
  const [userName, setUserName] = useState('')
  const [weight, setWeight] = useState('')
  const [weightChange, setWeightChange] = useState('')
  const [changeColor, setChangeColor] = useState('')
  const dispatch = useDispatch()

  dispatch(myPage()).then((response) => {
    // userName
    if (response.payload.isAuth === false) {
    } else {
      var userName_ = [...userName]
      userName_ = response.payload.userName
      setUserName(userName_)

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
      var op
      if (pre > curt) {
        result = pre - curt
        op = '-'
        result = result.toFixed(2)
        changeColor_ = 'decreasePer'
      } else if (pre < curt) {
        result = curt - pre
        op = '+'
        result = result.toFixed(2)
        changeColor_ = 'increasePer'
      } else {
        result = '0.00'
        op = ''
        changeColor_ = ''
      }
      weightChange_ = op + String(result)
      setChangeColor(changeColor_)
      setWeightChange(weightChange_)
    }
  })

  return (
    <div className="wrap">
      <TopHeader />
      <div className="report">
        <div className="userProfile">
          <div className="userFlex">
            <div className="userImg">
              <img src="img/profile.jpg" alt="profile_img" />
            </div>
            <div className="userInfo">
              <span>{userName}</span>
              <div className="weightFlex">
                {/* <span className="beforeWeight">64kg </span> */}
                <span className="afterWeight">{weight}kg</span>
                <div className="changeWeight">
                  <span className={changeColor}>{weightChange}</span>
                  <AddIcon
                    style={{ cursor: 'pointer' }}
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
                      style={{ padding: '15px', cursor: 'pointer' }}
                      onClick={() => {
                        setweightModal(false)
                      }}
                    />
                    {badgemodal === 'true' ? <div></div> : null}
                    <div className="centerFlex">
                      <div className="day">
                        <Input /> 년
                        <Input /> 월
                        <Input /> 일
                      </div>
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
                style={{ padding: '15px', cursor: 'pointer' }}
                onClick={() => {
                  setbadgeModal(false)
                }}
              />
              <div className="badgeGrid">
                <div className="imgWidth">
                  <img src="/img/icon-sample.png" alt="badge" />
                  <span>말벅지</span>
                </div>
                <div className="imgWidth">
                  <img src="/img/icon-sample.png" alt="badge" />
                  <span>말벅지</span>
                </div>
                <div className="imgWidth">
                  <img src="/img/icon-sample.png" alt="badge" />
                  <span>말벅지</span>
                </div>
                <div className="imgWidth">
                  <img src="/img/icon-sample.png" alt="badge" />
                  <span>말벅지</span>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            zIndex: '-1',
          }}
        >
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
                weight
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
