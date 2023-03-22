import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/login.css"

const Login = () => {
  return (
    <div className='login'>
        <h1 className='login-heading'>Login</h1>
        <form className='login-form'>
            <label className='login-label'>E-mail:</label>
            <input className='login-input' type='text'/>
            <label className='login-label'>Password:</label>
            <input className='login-input' type='password'/>
            <input className='login-button' type='submit' value='Login'/>
        </form>
        <div className='new-user'>
            <NavLink to={"/Register"}>New User?</NavLink>
        </div>
    </div>
  )
}

export default Login