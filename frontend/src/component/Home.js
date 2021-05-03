import React from "react"
import Youtube from "react-youtube"
import Footer from "./Footer"

import Main from "./Main"
import "../css/App.css"
import { withRouter } from "react-router-dom"

function Home() {
  const opts = {
    width: "570",
    height: "400",
    playerVars: {
      autoplay: 0,
    },
  }

  function _onReady(e) {
    e.target.pauseVideo()
  }

  return (
    <div className="">
      <div>
        <Main />
        <Youtube
          className="youtube"
          videoId="qHapWanGDc8"
          opts={opts}
          onReady={_onReady}
        />
        <Footer />
      </div>
    </div>
  )
}

export default withRouter(Home)
