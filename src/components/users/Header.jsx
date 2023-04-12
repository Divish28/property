import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css'

const Header = (userRole) => {

  
  // const userRole=sessionStorage.getItem("role")
  

  return (
    <nav>
    <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/Home">Houses</NavLink></li>
      {userRole === 'user'? (
        <>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </>
      ):""}
      {userRole === 'admin' ? (
        <>
            <li><NavLink to='/AdminHome'>Home</NavLink></li>        
            <li><NavLink to='/EditProperty'>Edit</NavLink></li>
            <li><NavLink to='/AdminAdd'>ADD</NavLink></li>
            <li><NavLink to='/UserDetails'>Manage User</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </>
      ):" "}
      {userRole === 'broker' ? (
        <>
            <li><NavLink to="/listings">Listings</NavLink></li>
            <li><NavLink to="/clients">Clients</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </>
      ):" "}
      {userRole === 'manager' ? (
        <>
            <li><NavLink to="/reports">Reports</NavLink></li>
            <li><NavLink to="/Houses">Employees</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </>
      ):" "}
    </ul>
  </nav>
);
}

export default Header