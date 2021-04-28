import React, { useState } from "react"

import Menubar from "./Menubar"
import Chart from "./Chart"

import "../css/Mypage.css"

function Mypage() {
  const [chart, setChart] = useState(false)

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
              <span>hsjun1996@kyonggi.ac.kr</span>
            </div>
          </div>
          <div className="userSettingsList">
            <button>프로필 수정</button>
            <button>트레이너 피드백</button>
            <button>내 뱃지</button>
          </div>
        </div>
        <div className="userData">
          <div className="exerQuestion">
            <img src="img/qna.jpg" alt="" />
            <button>
              <span>질문하러 가기</span>
            </button>
          </div>
          <div className="exerFeedback">
            {chart === true ? (
              <Chart />
            ) : (
              <>
                <span>운동 데이터가 아직 없습니다</span>
                <button>운동하러 가기</button>
              </>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setChart(!chart)
        }}
        style={{ marginLeft: "16px" }}
      >
        운동 데이터 테스트용 버튼
      </button>
    </div>
  )
}

export default Mypage
