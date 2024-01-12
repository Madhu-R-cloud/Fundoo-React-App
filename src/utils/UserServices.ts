
import axios from 'axios';

interface UserDetails {
  firstName: string;
  lastName: string;
  service:string,
  email: string;
  password: string;
  // Add other properties as needed
}

interface LoginDetails{
  username:string,
  password:string
}

const createUser = async (userDetails: UserDetails, navigate: (route: string) => void): Promise<void> => {
  try {
    console.log(userDetails)
    const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", {
      "firstName": userDetails.firstName,
      "lastName": userDetails.lastName,
      "service": "advance",
      "email": userDetails.email,
      "password": userDetails.password,
    });
    
    
    localStorage.setItem('Token',response.data.id);
    navigate("/dashboard");
  } catch (error) {
    console.error(error);
  }
};


const userLogin =async (LoginDetails:LoginDetails, navigate: (route: string) => void): Promise<void> =>  {
    try{
        const response = await  axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",{

          "username": LoginDetails.username,
          "password": LoginDetails.password

    });
    
    localStorage.setItem('Token',response.data.id);
    navigate("/dashboard");
  } catch(error){
          console.log(error);
        }
    }




export { createUser, userLogin };
