import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#606fe4" };
  const btnstyle = { margin: "10px 0" };

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
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField
            label="이메일"
            placeholder="Enter Email"
            fullWidth
            type="email"
            value={Email}
            onChange={onEmailHandler}
          />
          <TextField
            label="비밀번호"
            placeholder="Enter Password"
            type="password"
            fullWidth
            value={Password}
            onChange={onPasswordHandler}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            로그인
          </Button>
          <Typography>
            <Link to="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ? <Link to="/register">회원가입</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
