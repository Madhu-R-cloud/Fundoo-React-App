import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {  useNavigate } from 'react-router-dom';
import { userLogin } from '../utils/UserServices';

function LoginComponent() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    await userLogin(userDetails, navigate);
  };

  return (
    <>
      <div className="flex w-full h-[520px]">
        <div className="flex flex-col w-[26%] h-[400px] border ml-[35%] mt-[8%] p-2.5 rounded-[10px] border-solid border-[rgb(147,161,165)]">
          <div className="items-center">
            <h1 className="text-[orange] ml-[36%]">Fundo</h1>
            <h3 className="ml-[35%]">Sign In</h3>
            <p className="apply ml-[20%]">Use your Fundo Account</p>
          </div>
          <div className="flex flex-col w-full">
            <TextField
              style={{ marginTop: '30px' }}
              id="username"
              label="UserName"
              value={userDetails.username}
              onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
            />
            <TextField
              style={{ marginTop: '20px' }}
              id="password"
              label="Password"
              value={userDetails.password}
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />
            <a href="/" className=" border-blue-500 text-blue-500 hover:text-blue-700">forgot password</a>

            <div className="flex justify-between mt-[60px]">
              <a href="/signup" className=" border-blue-500 text-blue-500 hover:text-blue-700">Create Account</a>
              <Button variant="contained" onClick={handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full text-sm justify-center mt-5">
        <p className="ml-0 mr-[60px] ">English(United States)</p>
        <p className="ml-5 mr-[60px] ">Help Privacy Terms</p>
      </div>
    </>
  );
}

export default LoginComponent;
