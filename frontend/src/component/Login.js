import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";
import Menubar from "./Menubar";
import "../css/Login.css";
/* 로그인 Back-End 부분 => 추가 라이브러리를 설치해야 가능
import Axios from 'axios'
import { response } from 'express'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/

/*
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
*/
const Login = () => {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // 로그인 Back-End 부분
  /*
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body))
  };
*/
  return (
    <div className="wrap">
      <Menubar />
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <div className="login__flex">
        <form
          className="loginForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <br />
          <div>
            <button>로그인</button>
            <Link to="/register">
              <button>회원가입</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
