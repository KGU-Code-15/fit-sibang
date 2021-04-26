import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import '../css/App.css';

function Menubar(props) {
  //logout handler
  const onClickHandler = () => {
    axios.get(`/user/logout`).then((response) => {
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('로그인 안했음');
      }
    });
  };
  return (
    <div className='sidebox'>
      <div className='menuLogo'>
        <span>핏-</span>
        <span className='title'>시방</span>
      </div>

      <div className='menuFlex'>
        <div className='menuListF'>
          <Link to='/'>
            <span>홈</span>
          </Link>
        </div>
        <div className='menuList'>
          <span>챌린지</span>
        </div>
        <div className='menuList'>
          <Link to='/exercise'>
            <span>운동</span>
          </Link>
        </div>
        <div className='menuList'>
          <span>상품</span>
        </div>
        <div className='menuList'>
          <Link to='mypage'>
            <span>마이페이지</span>
          </Link>
        </div>
        <div className='menuListL'>
          <button className='logout' onClick={onClickHandler}>
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Menubar);
