import React from 'react';
import { Route } from 'react-router-dom';

import Home from './component/Home';
import Mypage from './component/Mypage';
import Exercise from './component/Exercise';
import Workout from './component/Workout';
import Start from './component/Start';

import './css/App.css';

function App() {
  return (
    <div>
      <Route path='/' exact='true' component={Home} />
      <Route path='/mypage' component={Mypage} />
      <Route path='/exercise' component={Exercise} />
      <Route path='/workout' component={Workout} />
      <Route path='/start' component={Start} />
    </div>
  );
}

export default App;
