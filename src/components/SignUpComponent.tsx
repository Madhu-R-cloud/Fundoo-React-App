import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';
import {createUser} from '../utils/UserServices'
import logo from '../assets/GoogleImg.jpg';

interface UserDetails {
  firstName: string;
  lastName: string;
  service:string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpComponent() {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    service:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    
  }, [userDetails]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleRegister = async () => {
    await createUser(userDetails, navigate);
  };


  return (
   
      <div className="flex w-full flex-row items-center h-[950px] mt-[25px]">
        <div className="flex w-full max-w-[800px] border mx-auto my-5 p-5 rounded-[10px] border-solid border-[rgb(147,161,165)]">
          <div className="flex flex-col w-[70%] mt-5">
            <div className="flex w-full flex-col ml-5 mt-10px">
              <span style={{ color: "orange", fontSize: "36px" }}>Fundoo</span>
              <span style={{ color: "black", marginTop: "10px", fontSize: "25px" }}>
                Create your Fundo Account
              </span>
            </div>
            <div className="flex w-[90%] ml-5 mt-[15px] justify-between">
              <TextField className="mr-2.5"
                id="firstname"
                name="firstName"
                label="FirstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                required
              />
              <TextField className="mr-2.5"
                id="lastname"
                name="lastName"
                label="LastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex w-[81%] ml-5 mt-5">
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
            <div className="flex w-[90%] ml-5 mr-2.5 mt-5 justify-between">
              <TextField className="mr-5"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
              />
              <TextField className="mr-5"
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
            <div className="flex w-[125%] justify-between ml-5 mr-[30px] mt-5">
            <a href="/" className=" border-blue-500 text-blue-500 hover:text-blue-700">Sign In Instead</a>
              {/* <Link to="/">Sign In Instead</Link> */}
              <Button variant="contained" onClick={handleRegister}>Register</Button>
            </div>
          </div>
          <div className="flex flex-col w-[30%] flex-1 mt-2.5">
            <img src={logo} className="flex h-[200px] w-[200px] mt-[40%]" alt="logo" />
            <span style={{color:"black"}}>One Account. All of Fundo</span>
            <span className="flex items-center ml-[32px]"> working for you</span>
          </div>
        </div>
      </div>
  
  );
}

export default SignUpComponent;
