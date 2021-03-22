import React from 'react';

function Recommend() {
  return (
    <div className='wrap'>
      <div className='recommend'>
        <span>추천운동</span>
        <span>more</span>
      </div>
      <div className='recommend__img'>
        <div className='recommend__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>스쿼트</p>
        </div>
        <div className='recommend__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>스쿼트</p>
        </div>
        <div className='recommend__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>스쿼트</p>
        </div>
        <div className='recommend__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>스쿼트</p>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
