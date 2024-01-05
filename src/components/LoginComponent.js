import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {SignIn} from '../../src/Login.css'

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const chkUser = () => {
    axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {
      "username": username,
      "password": password
    }).then(res => {
      console.log("Here this is the home page");
      navigate("/home");
    });
  }

  return (
    <>
      <div className="login-body-ctn">
        <div className="login-form">
          <div className="header-ctn-fundo">
            <h2>Fundo</h2>
            <h3>Sign In</h3>
            <p>Use your Fundo Account</p>
          </div>
          <div className="username-ctn">
            <TextField id="username" label="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextField id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="/">forgot password</a>

            <div className="btn-login">
              <Link to="/signup">Create Account</Link>
              <Button variant="contained" onClick={chkUser}>Login</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>English(United States)</p>
        <p>Help Privacy Terms</p>
        <div></div>
      </div>
    </>
  );
}

export default LoginComponent;
