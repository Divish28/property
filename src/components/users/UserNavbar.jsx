import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/navbar.css"
const UserNavbar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li className='nav-list'><NavLink>Home</NavLink></li>
            <li className='nav-list'><NavLink to='/Login'>Login</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default UserNavbar