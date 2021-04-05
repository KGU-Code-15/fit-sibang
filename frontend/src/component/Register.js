import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Menubar from './Menubar';
import '../css/Register.css';
import '../css/App.css';
// 회원가입 Back-End 부분 => 추가 라이브러리 설치해야 가능
/*
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Register = () => {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#606fe4' };
  const btnstyle = { margin: '35px 0' };

  const classes = useStyles();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

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
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <TextField
          label='이메일'
          placeholder='Enter Email'
          fullWidth
          required
          type='email'
          value={Email}
          onChange={onEmailHandler}
        />
        <TextField
          label='이름'
          placeholder='Enter Name'
          fullWidth
          required
          type='name'
          value={Name}
          onChange={onNameHandler}
        />
        <TextField
          label='비밀번호'
          placeholder='Enter Password'
          type='password'
          fullWidth
          required
          value={Password}
          onChange={onPasswordHandler}
        />
        <TextField
          label='비밀번호 확인'
          placeholder='Enter Password Again'
          type='password'
          fullWidth
          required
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <Button
          type='submit'
          color='primary'
          variant='contained'
          style={btnstyle}
          fullWidth
        >
          회원가입
        </Button>
      </Paper>
    </Grid>
  );
};

export default Register;
