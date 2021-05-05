import React from "react"
import { Route } from "react-router-dom"

import Home from "./component/Home"
import Mypage from "./component/Mypage"
import Exercise from "./component/Exercise"
import Guide from "./component/Guide"
import Login from "./component/Login"
import Register from "./component/Register"
import Squat from "./component/Squat"
import Challenge from "./component/Challenge"
import Products from "./component/Products"
import Support from "./component/Support"
import ExerciseGuide from "./component/ExerciseGuide"

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
      <Route path="/challenge" component={Challenge} />
      <Route path="/exercise" component={Exercise} />
      <Route path="/products" component={Products} />
      <Route path="/Guide" component={Guide} />
      <Route path="/support" component={Support} />
      <Route path="/login" component={Auth(Login, false)} />
      <Route path="/register" component={Auth(Register, false)} />
      <Route path="/Squat" component={Auth(Squat, true)} />
      <Route path="/ExerciseGuide" component={ExerciseGuide} />
    </div>
  )
}

export default App
