import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"

import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useDispatch } from "react-redux"
import { registerUser } from "../_action/user_action"
import { withRouter } from "react-router-dom"

// 회원가입 Back-End 부분 => 추가 라이브러리 설치해야 가능
/*
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/

function Copyright() {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function SignUp(props) {
  const classes = useStyles()

  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [re_password, setRePassword] = useState("")

  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onRePasswordHandler = (event) => {
    setRePassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (password !== re_password) {
      return alert("비밀번호를 다시 확인해주세요.")
    }
    let body = {
      userName: userName,
      password: password,
    }

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login")
      } else {
        alert("Error")
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="아이디"
                name="id"
                autoComplete="id"
                value={userName}
                onChange={onUserNameHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onPasswordHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호 확인"
                type="password"
                id="re-password"
                autoComplete="current-password"
                value={re_password}
                onChange={onRePasswordHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            회원가입
          </Button>

          <Grid container justify="flex-end">
            <Grid item xs>
              <Link href="Login" variant="body2">
                로그인
              </Link>
            </Grid>
            <Grid item>
              <Link href="./" variant="body2">
                홈으로
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default withRouter(SignUp)
