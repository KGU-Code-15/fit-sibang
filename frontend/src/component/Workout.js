import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../css/workout.css';
function Workout({ history }) {
  const date = new Date();
  const [exerlist, setExerlist] = useState(['pushup', 'pushup', 'pushup']);
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className='explainWrap'>
      <div className='explainFlex'>
        <div className='explain'>
          <ArrowBackIcon
            onClick={goBack}
            style={{ color: 'white', cursor: 'pointer' }}
          />

          <p>
            {date.getFullYear()}년&nbsp;
            {date.getMonth() + 1}월&nbsp;
            {date.getDate()}일
          </p>
          <p>1. 주의사항 적기</p>
          <p>2. 주의사항 적기</p>
          <p>3. 주의사항 적기</p>
          <p>4. 화면에 신체가 잘 인식되도록 서주세요!</p>
          <button>운동시작!</button>
        </div>

        <div className='exerlistFlex'>
          {exerlist.map((a, i) => {
            console.log(a);
            return (
              <div className='exerList' key={i}>
                <img src={'img/' + a + '.gif'} alt='img' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Workout;
