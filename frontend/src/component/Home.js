import React from 'react';
import Youtube from 'react-youtube';

import Menubar from './Menubar';
import Main from './Main';

import '../css/App.css';

function Home() {
  const opts = {
    width: '570',
    height: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  function _onReady(e) {
    e.target.pauseVideo();
  }

  return (
    <div className='wrap'>
      <div>
        <Menubar />
      </div>
      <div>
        <Main />
        <Youtube
          className='youtube'
          videoId='2g811Eo7K8U'
          opts={opts}
          onReady={_onReady}
        />
      </div>
    </div>
  );
}

export default Home;
