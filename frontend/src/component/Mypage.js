import React from 'react';
import Header from './Header';
import MypageInfo from './MypageInfo';
import Achievements from './Achievements';
import IngExercise from './IngExercise';
import Menubar from './Menubar';

const Mypage = () => {
  return (
    <>
      <Header />
      <MypageInfo />
      <Achievements />
      <IngExercise />
      <Menubar />
    </>
  );
};

export default Mypage;
