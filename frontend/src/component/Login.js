import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { withRouter } from 'react-router-dom'

// redux
import { useDispatch } from 'react-redux'
import { loginUser } from '../_action/user_action'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
function SignIn(props) {
  const classes = useStyles()

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onUserNameHandler = event => {
    setUserName(event.currentTarget.value)
  }
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = event => {
    event.preventDefault()

    let body = {
      userName: userName,
      password: password,
    }

    dispatch(loginUser(body)).then(response => {
      if (response.payload.success) {
        props.history.push('/')
      } else {
        alert(response.payload.message)
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
          로그인
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            autoFocus
            value={userName}
            onChange={onUserNameHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="./" variant="body2">
                홈으로
              </Link>
            </Grid>
            <Grid item>
              <Link href="Register" variant="body2">
                회원가입
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default withRouter(SignIn)
