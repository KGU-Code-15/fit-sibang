import React from 'react';
import { Route } from 'react-router-dom';

import Home from './component/Home';
import Mypage from './component/Mypage';

import './css/App.css';

function App() {
  return (
    <div>
      <Route path='/' exact='true' component={Home} />
      <Route path='/mypage' component={Mypage} />
    </div>
  );
}

export default App;
