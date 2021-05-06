import React from "react"
import Menubar from "./Menubar"
import { Route, Link, withRouter } from "react-router-dom"

import "../css/App.css"
import "../css/Main.css"

export default function TopHeader() {
  return (
    <div className="mainheader">
      <Menubar />
      <Link to="/">
        <img className="image2" src="/img/main.png" />
      </Link>
      <div></div>
    </div>
  )
}
