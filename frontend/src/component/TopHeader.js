import React from "react"
import Menubar from "./Menubar"

import "../css/App.css"
import "../css/Main.css"

export default function TopHeader() {
  return (
    <div class="mainheader">
      <Menubar />
      <img class="image2" src="/img/main.png" />
    </div>
  )
}
