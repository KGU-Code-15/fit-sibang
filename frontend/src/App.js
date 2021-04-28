import React from "react"
import { Route } from "react-router-dom"

import Home from "./component/Home"
import Mypage from "./component/Mypage"
import Exercise from "./component/Exercise"
import Workout from "./component/Workout"
import Login from "./component/Login"
import Register from "./component/Register"
import TeachableMachine from "./component/TeachableMachine"
import "./css/App.css"

//hoc
import Auth from "./_hoc/auth"

// option null => any
// option true => only user
// option false => only visitor
// Auth(page, option)
function App() {
  return (
    <div>
      <Route path="/" exact="true" component={Home} />
      <Route path="/mypage" component={Auth(Mypage, true)} />
      <Route path="/exercise" component={Exercise} />
      <Route path="/workout" component={Workout} />
      <Route path="/login" component={Auth(Login, false)} />
      <Route path="/register" component={Auth(Register, false)} />
      <Route
        path="/TeachableMachine"
        component={Auth(TeachableMachine, true)}
      />
    </div>
  )
}

export default App
