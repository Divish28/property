import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../../css/Register.css"

const Register = () => {
  const [userDetials,setUserDetails]=useState({email:"",mobileNumber:"",password:"",role:""})

  const handleChange = (users) => {
    setUserDetails(()=> {
      return {...userDetials,[users.target.name]:users.target.value}
    })
  }

 const navigate = useNavigate()

  const handleSubmit = (registerSubmit) => {
    registerSubmit.preventDefault();
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
  };

  return (
    <div>
      <h1 className='register-heading'>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <label  className='register-label'>Email:</label>
        <input onInput={handleChange} value={userDetials.email} name='email' className='register-input ' type="text" />
        <label  className='register-label'>Mobile Number:</label>
        <input onInput={handleChange} value={userDetials.mobileNumber} name='mobileNumber' className='register-input ' type="text"/>
        <label  className='register-label'>Password:</label>
        <input onInput={handleChange} value={userDetials.password} name='password' className='register-input ' type="password"/>
        <label className='radio-lable'>User</label>
        <input id='user-radio' type="radio" name="role" checked={userDetials.role == "user"} onChange={handleChange} value="user"/>
        <label className='radio-lable'>Broker</label>
        <input id='broker-radio'type="radio" name="role" checked={userDetials.role == "broker"} onChange={handleChange}  value="broker" />
        <input  id='register-submit' type="submit" value="Register" />
      </form>
      <div className='existing-user'>
        <NavLink to="/Login">Existing user?</NavLink>
      </div>
    </div>
  )
}

export default Register