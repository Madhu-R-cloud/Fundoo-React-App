import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import logo from '../assets/GoogleImg.jpg';
import { SignUp } from "../../src/SignUp.css";

export function SignUpComponent() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // confirmPassword: ''
  });

  useEffect(() => {
    // console.log(userDetails);
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const createUser = () => {
    axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", {
      "firstName": userDetails.firstName,
      "lastName": userDetails.lastName,
      "service": "advance",
      "email": userDetails.email,
      "password": userDetails.password
    }).then(res => {
      console.log(res);
      navigate("/home");
    }).catch(error => {
      // Handle error or navigate to error page
      // navigate("/err");
    });
  }

  return (
    <>
      <div className="login-body-ctn">
        <div className="register-form">
          <div className="body-left-ctn">
            <div className="text-header">
              <span style={{ color: "orange", fontSize: "36px" }}>Fundoo</span>
              <span style={{ color: "black", marginTop: "30px", fontSize: "25px" }}>
                Create your Fundo Account
              </span>
            </div>
            <div className="name-fields">
              <TextField
                id="firstname"
                name="firstName"
                label="FirstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                required
              />
              <TextField
                id="lastname"
                name="lastName"
                label="LastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="username-field">
              <TextField
                label="FullName"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <span style={{ marginLeft: "35px", marginTop: "10px" }}>
              You can use letters numbers & symbols
            </span>
            <div className="password-fields">
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
              />
              <TextField
                id="confirmpassword"
                name="confirmPassword"
                label="Confirm"
                type="password"
                value={userDetails.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <span style={{ marginLeft: "20px", marginTop: "10px" }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
            <div className="register-button">
              <Link to="/">Sign In Instead</Link>
              <Button variant="contained" onClick={createUser}>Register</Button>
            </div>
          </div>
          <div className="body-right-cnt">
            <img src={logo} className="signup-logo" alt="logo" />
            <span>One Account. All of Fundo working for you</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpComponent;
