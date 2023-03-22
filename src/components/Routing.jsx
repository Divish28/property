import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './users/Login'
import Register from './users/Register'
import AdminAdd from './admin/AdminAdd'
import PropertyList from './admin/PropertyList'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/AdminAdd' element={<AdminAdd/>}/> 
            <Route path='/PropertyList' element={<PropertyList/>}/>
        </Routes>
    </div>
  )
}

export default Routing