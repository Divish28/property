import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li><NavLink to='/PropertyList' >List</NavLink></li>
            <li><NavLink to='/AdminAdd'>ADD</NavLink></li>
            <li><NavLink to='/UserDetails'>User Details</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default AdminNavbar