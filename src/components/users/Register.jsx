import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../../css/Register.css"

const Register = () => {
  const [userDetials,setUserDetails]=useState({email:"",mobileNumber:"",password:"",role:""})
  const [emailError,setEmailError] = useState("")
  const [mobileNumberError,setMobileNumberError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [roleError,setRoleError] = useState("")

  const handleChange = (users) => {
    setUserDetails(()=> {
      return {...userDetials,[users.target.name]:users.target.value}
    })
  }

  const validateRegistration = () => {
    let valid = true;
  
    if (!userDetials.email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetials.email)) {
      setEmailError("Email is invalid.");
      valid = false;
    } else {
      setEmailError("");
    }
  
    if (!userDetials.mobileNumber) {
      setMobileNumberError("Mobile Number is required.");
      valid = false;
    } else if (!/^\d{10}$/.test(userDetials.mobileNumber)) {
      setMobileNumberError("Mobile Number is invalid.");
      valid = false;
    } else {
      setMobileNumberError("");
    }
  
    if (!userDetials.password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (userDetials.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }
  
    if (!userDetials.role) {
      setRoleError("Role is required.");
      valid = false;
    } else {
      setRoleError("");
    }
  
    return valid;
  };

 const navigate = useNavigate()

  const handleSubmit = (registerSubmit) => {
    registerSubmit.preventDefault();
    if(validateRegistration()){
      let registerData = { ...userDetials };
      console.log(registerData);
      axios
        .post("http://localhost:8000/user", registerData)
        .then((res) => {
          alert("registered")
          navigate("/Login")
        })
        .catch((error) => {
          alert("error:"+error.message)
        });
    }
  };

  return (
    <div>
      <h1 className='register-heading'>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <label  className='register-label'>Email:</label>
        <input onInput={handleChange} value={userDetials.email} name='email' className='register-input'  />
        <span className="error-message">{emailError}</span>
        <label  className='register-label'>Mobile Number:</label>
        <input onInput={handleChange} value={userDetials.mobileNumber} name='mobileNumber' className='register-input' pattern='[0-9]{10}' type="text"/>
        <span className="error-message">{mobileNumberError}</span>
        <label  className='register-label'>Password:</label>
        <input onInput={handleChange} value={userDetials.password} name='password' className='register-input ' type="password"/>
        <span className="error-message">{passwordError}</span>
        <label className='radio-lable'>User</label>
        <input id='user-radio' type="radio" name="role" checked={userDetials.role == "user"} onChange={handleChange} value="user"/>
        <label className='radio-lable'>Broker</label>
        <input id='broker-radio'type="radio" name="role" checked={userDetials.role == "broker"} onChange={handleChange}  value="broker" />
        <span className="error-message">{roleError}</span>
        <input  id='register-submit' type="submit" value="Register" />
      </form>
      <div className='existing-user'>
        <NavLink to="/Login">Existing user?</NavLink>
      </div>
    </div>
  )
}

export default Register