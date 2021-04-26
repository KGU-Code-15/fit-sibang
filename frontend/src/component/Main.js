import React from 'react';
import { Route, Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { loginUser } from '../_action/user_action';
import '../css/App.css';
import '../css/Main.css';

function Main() {
  return (
    <div className='mainLayout'>
      <div className='exerFlex'>
        <div className='exer'>
          <span className='sport'>요가</span>
          <span className='time'>03:50</span>
          <span className='compare'>02</span>
        </div>
        <div className='exer'>
          <span className='sport'>푸쉬업</span>
          <span className='time'>13:50</span>
          <span className='compare'>02</span>
        </div>
        <div className='exer'>
          <span className='sport'>싯업</span>
          <span className='time'>02:25</span>
          <span className='compare'>02</span>
        </div>
        <div className='exer'>
          <span className='sport'>스쿼트</span>
          <span className='time'>6:50</span>
          <span className='compare'>02</span>
        </div>
      </div>

      <div className='recoFlex'>
        <div className='recoExer'>
          <span className='todayReco'>오늘의 추천운동</span>
          <span className='todayExer'>스쿼트</span>
        </div>
      </div>

      <div className='exergo'>
        <span>🎨</span>
        <Link to='workout'>
          <span>운동하러가기</span>
        </Link>
        <span>⚽</span>
      </div>
    </div>
  );
}

export default Main;
