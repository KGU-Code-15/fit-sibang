import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Menubar from "./Menubar";
import "../css/Register.css";
// 회원가입 Back-End 부분 => 추가 라이브러리 설치해야 가능
/*
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
*/

const Register = () => {
  // 로그인 Back-End 부분
  // const dispatch = useDispatch();

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
        <form
          className="registerForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Name</label>
          <input type="text" value={Name} onChange={onNameHandler} />

          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />

          <br />
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
