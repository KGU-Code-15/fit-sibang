import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import Menubar from "./Menubar";
import "../css/Register.css";
import "../css/App.css";
// 회원가입 Back-End 부분 => 추가 라이브러리 설치해야 가능
/*
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Register = () => {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();
  const classes = useStyles();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  // 회원가입 Back-End 부분
  /*
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };
*/
  return (
    <div className="wrap">
      <Menubar />
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <div className="register__flex">
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
              label="이름"
              variant="outlined"
              size="small"
              type="name"
              value={Name}
              onChange={onNameHandler}
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
            <TextField
              label="비밀번호 확인"
              type="password"
              variant="outlined"
              size="small"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
            <br />
            <Button variant="contained" color="secondary">
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
