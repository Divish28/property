import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'

const Navbar = () => {

    const role = sessionStorage.getItem("role")

  return (
    <div>
        <Header userRole={role}/>
    </div>
  )
}

export default Navbar