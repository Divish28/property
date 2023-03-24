import axios from 'axios'
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import '../../css/BrokerRegistration.css'

const BrokerRegistration = () => {

    const [BrokerDetails,setBrokerDetails]=useState({email:"",mobileNumber:"",password:""})

    const handleChange = (users) => {
      setBrokerDetails(()=> {
        return {...BrokerDetails,[users.target.name]:users.target.value}
      })
    }
  
   const navigate = useNavigate()
  
    const handleSubmit = (registerSubmit) => {
      registerSubmit.preventDefault();
      let registerData = { ...BrokerDetails };
      console.log(registerData);
      axios
        .post("http://localhost:8000/broker", registerData)
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
    <h1 className='broker-register-heading'>Broker Register</h1>
    <form className='broker-register-form' onSubmit={handleSubmit}>
      <label  className='broker-register-label'>Email:</label>
      <input onInput={handleChange} value={BrokerDetails.email} name='email' className='broker-register-input ' type="text" />
      <label  className='broker-register-label'>Mobile Number:</label>
      <input onInput={handleChange} value={BrokerDetails.mobileNumber} name='mobileNumber' className='broker-register-input ' type="text"/>
      <label  className='broker-register-label'>Password:</label>
      <input onInput={handleChange} value={BrokerDetails.password} name='password' className='broker-register-input ' type="password"/>
      <input  id='broker-register-submit' type="submit" value="Register" />
    </form>
    <div className='existing-user'>
      <NavLink to="/Login">Existing user?</NavLink>
    </div>
  </div>
  )
}

export default BrokerRegistration