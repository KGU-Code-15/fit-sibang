import React from 'react';

import '../css/mypage.css';
function Mypage() {
  return (
    <div className='mainLayout'>
      <div className='mypage'>
        <div className='mypageFlex'>
          <div className='mypageImg'>
            <img src='./img/profile.jpg' alt='' />
          </div>
          <div className='mypageInfo'>
            <span>한상준</span>
            <span>hsjun1996@naver.com</span>
          </div>
        </div>

        <div className='mypageSetting'>수정하기</div>
      </div>
    </div>
  );
}

export default Mypage;
