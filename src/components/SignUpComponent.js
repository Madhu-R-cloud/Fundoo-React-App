import  React, { useState }  from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SignUp } from "../../src/SignUp.css";
import logo from '../assets/GoogleImg.jpg';
import { Link } from 'react-router-dom';


export function SignUpComponent() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
     
      const apiUrl = "https://fundoonotes.incubation.bridgelabz.com/explorer/#!/user/user_userSignUp";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      console.log("Registration successful");
    } catch (error) {
      
      console.error("Registration failed", error);
    }
  };


  return (
    <>
      <div className="login-body-ctn">
         <div className="register-form">
          <div className="body-left-ctn">
            <div className="text-header">
              <span style={{ color: "yellow", fontSize: "36px" }}>Fundoo</span>

              <span
                style={{ color: "black", marginTop: "30px", fontSize: "25px" }}
              >
                Create your Fundo Account
              </span>
            </div>
            <div className="name-fields">
              <TextField
                id="firstname"
                label="FirstName"
                variant="outlined" 
                required
              />
              <TextField
                id="lastname"
                label="LastName"
                variant="outlined"
                required
              />
            </div>
            <div className="username-field">
              <TextField fullWidth label="FullName" id="fullWidth" required />
           
            </div>
            <span style={{ marginLeft: "35px", marginTop: "10px" }}>
              You can use letters numbers & symbols
            </span>

            <div className="password-fields">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-basic"
                label="Confirm"
                variant="outlined"
                required
              />
            </div>
            <span style={{ marginLeft: "20px", marginTop: "10px" }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
            <div className="register-button">
            <Link to="/">Sign In Instead</Link>
              <Button variant="contained">Register</Button>;
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
