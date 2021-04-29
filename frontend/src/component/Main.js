import React, { useState } from "react"
import axios from "axios"
import { Route, Link, withRouter } from "react-router-dom"
import ExerciseData from "./ExerciseData"
import Menubar from "./Menubar"

import "../css/App.css"
import "../css/Main.css"

function Main() {
  const [auth_login, setAuth_login] = useState(false)

  axios.get(`/user/auth`).then((response) => {
    if (response.data.isAuth) {
      let copyAuth = auth_login
      copyAuth = true
      setAuth_login(copyAuth) // 현 상태 : login
    } else {
      let copyAuth = auth_login
      copyAuth = false
      setAuth_login(copyAuth) // 현 상태 : logout
    }
  })

  return (
    <div>
      <div class="mainheader">
        <Menubar />
        <img class="image2" src="/img/main.png" />
      </div>

      <div className="exerFlex">
        {auth_login === true ? <ExerciseData /> : null}
      </div>

      <div className="exerFlex">
        <span className="todayReco">오늘의 추천운동</span>
        <span className="todayExer">스쿼트</span>
      </div>

      <div className="exerFlex">
        <Link to="workout">Guide</Link>
      </div>
    </div>
  )
}

export default Main
