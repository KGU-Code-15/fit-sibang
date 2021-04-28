import React from "react"

import "../css/App.css"
import "../css/Main.css"

function ExerciseData() {
  return (
    <>
      <div className="exer">
        <span className="sport">요가</span>
        <span className="time">03:50</span>
        <span className="compare">02</span>
      </div>
      <div className="exer">
        <span className="sport">푸쉬업</span>
        <span className="time">13:50</span>
        <span className="compare">02</span>
      </div>
      <div className="exer">
        <span className="sport">싯업</span>
        <span className="time">02:25</span>
        <span className="compare">02</span>
      </div>
      <div className="exer">
        <span className="sport">스쿼트</span>
        <span className="time">6:50</span>
        <span className="compare">02</span>
      </div>
    </>
  )
}

export default ExerciseData
