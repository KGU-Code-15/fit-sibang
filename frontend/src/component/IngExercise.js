import React from 'react';

const IngExercise = () => {
  return (
    <div className='wrap'>
      <div className='ingexercise'>
        <p>진행중인 운동</p>
      </div>

      <div className='exercise__flex'>
        <div className='exercise__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>25분 타바타 클래스</p>
        </div>

        <div className='exercise__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>25분 타바타 클래스</p>
        </div>

        <div className='exercise__wrap'>
          <img src='/img/squat.jpg' alt='health__image' />
          <p>25분 타바타 클래스</p>
        </div>
      </div>
    </div>
  );
};

export default IngExercise;
