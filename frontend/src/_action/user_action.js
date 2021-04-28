import axios from "axios"
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types"

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/user/login", dataToSubmit)
    .then((response) => response.data)
  return {
    type: LOGIN_USER,
    payload: request,
  }
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/user/register", dataToSubmit)
    .then((response) => response.data)
  return {
    type: REGISTER_USER,
    payload: request,
  }
}

export function authUser() {
  const request = axios.get("/user/auth").then((response) => response.data)
  return {
    type: AUTH_USER,
    payload: request,
  }
}
