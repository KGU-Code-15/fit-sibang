import React from "react"
import TopHeader from "./TopHeader"
import Footer from "./Footer"
import "../css/Guide.css"
import "../css/Challenge.css"

function Guide() {
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
      <div className="">
        <div className="ChallText">메인 페이지</div>
        <img className="ChallImg" src="./Challengeimg/Flank.jpg" alt="err" />
        <div className="ChallText">메뉴바</div>
        <img className="ChallImg" src="./Challengeimg/Pull-up.jpg" alt="err" />
        <div className="ChallText">SignUp/Login/Logout</div>
        <img className="ChallImg" src="./Challengeimg/Squat.jpg" alt="err" />
        <div className="ChallText">My page</div>
        <img className="ChallImg" src="./Challengeimg/Push-up.jpg" alt="err" />
        <div className="ChallText">Challenge</div>
        <img className="ChallImg" src="./Challengeimg/Squat.jpg" alt="err" />
        <div className="ChallText">Exercise</div>
        <img className="ChallImg" src="./Challengeimg/Squat.jpg" alt="err" />
        <div className="ChallText">Products</div>
        <img className="ChallImg" src="./Challengeimg/Squat.jpg" alt="err" />
        <div className="ChallText">Support</div>
        <img className="ChallImg" src="./Challengeimg/Squat.jpg" alt="err" />
      </div>
      <Footer />
    </div>
  )
}

export default Guide
