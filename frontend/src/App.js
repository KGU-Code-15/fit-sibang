import React from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import './css/Menubar.css';
import './css/Mypage.css';
import Home from './component/Home';
import Mypage from './component/Mypage';

function App() {
  return (
    <>
      <Route path='/' exact={true} component={Home} />
      <Route path='/mypage' component={Mypage} />
    </>
  );
}

export default App;
