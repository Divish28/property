import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/blocklist.css'

const BrokerNavbar = ({blocklist}) => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>Blocked House <span className='blocklist'>{blocklist}</span></NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default BrokerNavbar