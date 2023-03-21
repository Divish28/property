import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/Register.css"

const Register = () => {
  return (
    <div>
      <h1 className='register-heading'>Register</h1>
      <form className='register-form'>
        <label className='register-label'>Email:</label>
        <input className='register-input' type="text"/>
        <label className='register-label'>Mobile Number:</label>
        <input className='register-input' type="text"/>
        <label className='register-label'>Password:</label>
        <input className='register-input' type="password"/>
        <input id='register-submit' type="submit" value="Register" />
      </form>
      <div className='existing-user'>
        <NavLink to="/Login">Existing user?</NavLink>
      </div>
    </div>
  )
}

export default Register