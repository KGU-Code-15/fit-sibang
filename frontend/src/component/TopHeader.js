import React from "react"
import Menubar from "./Menubar"

import "../css/App.css"
import "../css/Main.css"

export default function TopHeader() {
  return (
    <div className="mainheader">
      <Menubar />
      <img className="image2" src="/img/main.png" />
      <div></div>
    </div>
  )
}
