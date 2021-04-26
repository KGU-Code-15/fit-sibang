import React from 'react'
import Youtube from 'react-youtube'
import axios from 'axios'

import Menubar from './Menubar'
import Main from './Main'
import '../css/App.css'
import { withRouter } from 'react-router-dom'

function Home() {
  const opts = {
    width: '570',
    height: '400',
    playerVars: {
      autoplay: 0,
    },
  }

  function _onReady(e) {
    e.target.pauseVideo()
  }

  return (
    <div className="wrap">
      <div>
        <Menubar />
      </div>
      <div>
        <Main />
        <Youtube
          className="youtube"
          videoId="qHapWanGDc8"
          opts={opts}
          onReady={_onReady}
        />
      </div>
    </div>
  )
}

export default withRouter(Home)
