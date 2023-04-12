import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './users/Login'
import Register from './users/Register'
import AdminAdd from './admin/AdminAdd'
import PropertyList from './admin/PropertyList'
import EditProperty from './admin/EditProperty'
// import AdminNavbar from './admin/AdminNavbar'
import UserDetails from './admin/UserDetails'
import Home from './users/Home'
// import UserNavbar from './users/UserNavbar'
import MaintenanceDetails from './manager/MaintenanceDetails'
import AdminHome from './admin/AdminHome'
import BrokerPage from './broker/BrokerPage'
import HouseCard from './broker/HouseCard'
import HouseDetail from './broker/HouseDetail'
import Header from './users/Header'
import Navbar from './users/Navbar'

const Routing = () => {

  return (
    <div>
      <Header/>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/ManagerDetails' element={<MaintenanceDetails/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/AdminAdd' element={<AdminAdd/>}/>
            <Route path='/userDetails' element={<UserDetails/>}/>
            <Route path='/PropertyList' element={<PropertyList/>}/>
            <Route path='/EditProperty/:id' element={<EditProperty/>}/>
            <Route path='/AdminHome' element={<AdminHome/>}/>
            <Route path='/HouseCard' element={<HouseCard/>}/>
            <Route path='/BrokerPage' element={<BrokerPage/>}/>
            <Route path='/HouseDetails/:id' element={<HouseDetail/>}/>
            {/* <Route path='/Header' element={<Header/>}/> */}
        </Routes>
    </div>
  )
}

export default Routing