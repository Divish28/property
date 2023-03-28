import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../../css/login.css"

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const validate = ()=>{
    let result = true;
    if(email === "" && password === ""){
      result="false"
      alert("Enter the credentials")
    }
    return result
  }
  
  const navigate = useNavigate()

  const loginVerify = () =>{
    if(validate()){
      axios
      .get("http://localhost:8000/user?email="+email)
      .then((res) => {
        const response = res.data   
        if (Object.keys(response).length === 0)
        {
         alert("Enter email")
        } 
        else {
          if(password===""){
            alert("enter Password")
          }
          else{
          if (response[0].password === password) {
            if(response[0].role === "admin"){
              navigate('/PropertyList')
              sessionStorage.setItem("session data", email);
            }
            else if(response[0].role === "user"){
              navigate('/Home')
              sessionStorage.setItem("session data", email);
            }
            else if(response[0].role === "broker"){
              navigate('/BrokerPage')
              sessionStorage.setItem("session data", email);
            }
            else{
                navigate('/ManagerDetails')
                sessionStorage.setItem("session data", email);
            }
          }else {
            alert("enter correct password")
          }}
        }
      })
      .catch((error) => {
        alert("login failed"+error)
      });
    }
  }

  const handleLoginSubmit = (e) =>{
    e.preventDefault()
    loginVerify()
  }


  return (
    <div className='login'>
        <h1 className='login-heading'>Login</h1>
        <form className='login-form' onSubmit={handleLoginSubmit}>
            <label className='login-label'>E-mail:</label>
            <input className='login-input' value={email} onChange={(event)=>setEmail(event.target.value)} type='text'/>
            <label className='login-label'>Password:</label>
            <input className='login-input' value={password} onChange={(event)=>setPassword(event.target.value)} type='password'/>
            <input className='login-button' type='submit' value='Login'/>
        </form>
        <div className='new-user'>
            <NavLink to={"/Register"}>New User?</NavLink>
        </div>
    </div>
  )
}

export default Login