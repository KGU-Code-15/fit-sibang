import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import Menubar from "./Menubar";
import "../css/Login.css";

/* 로그인 Back-End 부분 => 추가 라이브러리를 설치해야 가능
import Axios from 'axios'
import { response } from 'express'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      /*링크 밑줄 없애기*/
      textDecoration: "none",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = () => {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();

  const classes = useStyles();
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
        <form style={{ display: "flex", flexDirection: "column" }}>
          <div className={classes.root}>
            <TextField
              label="이메일"
              variant="outlined"
              size="small"
              type="email"
              value={Email}
              onChange={onEmailHandler}
            />
            <br />
            <TextField
              label="비밀번호"
              type="password"
              variant="outlined"
              size="small"
              value={Password}
              onChange={onPasswordHandler}
            />
            <br />
            <Button variant="contained" color="primary">
              로그인
            </Button>
            <Link to="/register">
              <Button variant="contained" color="secondary">
                회원가입
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
