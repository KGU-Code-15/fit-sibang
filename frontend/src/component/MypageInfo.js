import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function MypageInfo() {
  return (
    <div className='mypage'>
      <div className='myinfo__flex'>
        <div className='myinfo__img'>
          <AccountCircleIcon fontSize='large' />
        </div>
        <div className='myinfo'>
          <p className='name'>이름</p>
          <p className='email'>hsjun1996@naver.com</p>
        </div>
      </div>

      <div className='myinfo__exercise'>내 운동분석</div>
    </div>
  );
}

export default MypageInfo;
