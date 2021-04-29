import React, { useState } from "react"
import { Route, Link, withRouter } from "react-router-dom"
import axios from "axios"
import "../css/App.css"
import "../css/Menubar.css"
import * as HiIcons from "react-icons/hi"
import * as BiIcons from "react-icons/bi"
import { IconContext } from "react-icons"
import { useDispatch } from "react-redux"
import { SidebarData } from "./SidebarData"

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

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: "#0066cc" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <HiIcons.HiOutlineMenuAlt2 onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <BiIcons.BiLogInCircle />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default withRouter(Menubar)
