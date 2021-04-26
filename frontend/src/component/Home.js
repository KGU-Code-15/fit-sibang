import React from 'react'
import Youtube from 'react-youtube'
import axios from 'axios'

import Menubar from './Menubar'
import Main from './Main'
import '../css/App.css'

function Home(props) {
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

  const onClickHandler = () => {
    axios.get(`/user/logout`).then(response => {
      if (response.data.success) {
        props.history.push('/login')
      } else {
        alert('실패 ㅋ')
      }
    })
  }

  return (
    <div className="wrap">
      <div>
        <Menubar />
        <button onClick={onClickHandler}>로그아웃</button>
      </div>
      <div>
        <Main />
        <Youtube
          className="youtube"
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={_onReady}
        />
      </div>
    </div>
  )
}

export default Home
