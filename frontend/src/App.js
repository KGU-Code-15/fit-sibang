import React from 'react';
import { Route } from 'react-router-dom';

import Home from './component/Home';
import Mypage from './component/Mypage';
import Exercise from './component/Exercise';
import Workout from './component/Workout';
import Login from './component/Login';
import Register from './component/Register';
import TeachableMachine from './component/TeachableMachine';
import './css/App.css';

function App() {
  return (
    <div>
      <Route path='/' exact='true' component={Home} />
      <Route path='/mypage' component={Mypage} />
      <Route path='/exercise' component={Exercise} />
      <Route path='/workout' component={Workout} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/TeachableMachine' component={TeachableMachine} />
    </div>
  );
}

export default App;
