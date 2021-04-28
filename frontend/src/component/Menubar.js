import React, { useState } from "react"
import { Route, Link, withRouter } from "react-router-dom"
import axios from "axios"
import "../css/App.css"

import { useDispatch } from "react-redux"

function Menubar(props) {
  const dispatch = useDispatch()
  let auth_login
  const [text, setText] = useState("로그인")
  axios.get(`/user/auth`).then((response) => {
    if (response.data.isAuth) {
      auth_login = true // 현 상태 : login
      let textCopy = [...text]
      textCopy = "로그아웃"
      setText(textCopy)
    } else {
      auth_login = false // 현 상태 : logout
      let textCopy = [...text]
      textCopy = "로그인"
      setText(textCopy)
    }
  })
  const onClickHandler = () => {
    if (auth_login) {
      axios.get(`/user/logout`).then((response) => {
        if (response.data.success) {
          props.history.push("/login")
        } else {
          alert("로그인 안했음")
        }
      })
    } else {
      props.history.push("/login")
    }
  }

  return (
    <div className="sidebox">
      <div className="menuLogo">
        <Link to="/">
          <img id="logoImg" src="/img/logo.png" alt="loco" />
        </Link>
      </div>
      <div className="menuFlex">
        <div className="menuListF">
          <Link to="/">
            <span>홈</span>
          </Link>
        </div>
        <div className="menuList">
          <span>챌린지</span>
        </div>
        <div className="menuList">
          <Link to="/exercise">
            <span>운동</span>
          </Link>
        </div>
        <div className="menuList">
          <span>상품</span>
        </div>
        <div className="menuList">
          <Link to="mypage">
            <span>마이페이지</span>
          </Link>
        </div>
        <div className="menuListL">
          <button className="logout" onClick={onClickHandler}>
            <span>{text}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Menubar)
