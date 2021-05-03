import axios from 'axios'
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  MYPAGE_USER,
  ADD_WEIGHT,
} from './types'

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/user/login', dataToSubmit)
    .then((response) => response.data)
  return {
    type: LOGIN_USER,
    payload: request,
  }
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post('/user/register', dataToSubmit)
    .then((response) => response.data)
  return {
    type: REGISTER_USER,
    payload: request,
  }
}

export function authUser() {
  const request = axios.get('/user/auth').then((response) => response.data)
  return {
    type: AUTH_USER,
    payload: request,
  }
}

export function myPage() {
  const request = axios.get('/user/mypage').then((response) => response.data)
  return {
    type: MYPAGE_USER,
    payload: request,
  }
}

export function addWeightFunc(dataToSubmit) {
  const request = axios
    .post('/user/addWeight', dataToSubmit)
    .then((response) => response.data)
  return {
    type: ADD_WEIGHT,
    payload: request,
  }
}
