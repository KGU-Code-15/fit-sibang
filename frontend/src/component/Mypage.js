import React from 'react';

import Menubar from './Menubar';
import MypageSection from './MypageSection';

function Mypage() {
  return (
    <div className='wrap'>
      <Menubar />
      <MypageSection />
    </div>
  );
}

export default Mypage;
