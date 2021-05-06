import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import '../css/App.css'
import '../css/Menubar.css'
import * as HiIcons from 'react-icons/hi'
import * as BiIcons from 'react-icons/bi'
import * as fiIcons from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { SidebarData } from './SidebarData'

function Menubar(props) {
  let auth_login
  const [text, setText] = useState('Login')
  axios.get(`/user/auth`).then((response) => {
    if (response.data.isAuth) {
      auth_login = true // 현 상태 : login
      let textCopy = [...text]
      textCopy = 'Logout'

      setText(textCopy)
    } else {
      auth_login = false // 현 상태 : logout
      let textCopy = [...text]
      textCopy = 'Login'
      setText(textCopy)
    }
  })
  const onClickHandler = () => {
    if (auth_login) {
      axios.get(`/user/logout`).then((response) => {
        if (response.data.success) {
          props.history.push('/login')
        } else {
          alert('Login 안했음')
        }
      })
    } else {
      props.history.push('/login')
    }
  }
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#0066cc' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <HiIcons.HiOutlineMenuAlt2 onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
            <div className="text">
              <li className="text" onClick={onClickHandler}>
                <div className="">
                  <fiIcons.FiLogIn />
                  <span>{text}</span>
                </div>
              </li>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default withRouter(Menubar)
