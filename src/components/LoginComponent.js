import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Login } from "../../src/Login.css";
import { Link } from 'react-router-dom';
import { handleRegister } from './SignUpComponent';


function LoginComponent() {
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
          <TextField id="outlined-basic" label="UserName" variant="outlined" />
          <TextField id="outlined-basic1" label="Password" variant="outlined" />
          <a href="/">forgot password</a>

          <div className="btn-login">
          <Link to="/signup">Create Account</Link>
            <Button variant="contained" onClick={handleRegister()}>Login</Button>
          </div>
        </div>
      </div>
       </div>
      <div className="footer">
       
          <p>
            English(United States)  
          </p>
      <p>
      Help  Privacy  Terms
      </p>
          <div>
            
          </div>
        </div>
      
    </>
  );
}

export default LoginComponent;
