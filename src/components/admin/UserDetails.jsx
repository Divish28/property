import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UserDetails = () => {
    const [userData,setUserData]=useState([])

    useEffect(()=>{
      getUser()
    },[])
  
    const getUser = async () =>{
      await axios.get("http://localhost:8000/user").then((response)=>{
        console.log(response.data)
        setUserData(response.data)
      }).catch((error)=>{
        alert(error.message)
      })
    }
  
    const deleteHouse =async (id) =>{
      await axios.delete(`http://localhost:8000/user/${id}`)
      getUser()
    }
    
  
    return (
      <div className='property-list'>
        <h1 className='Prooperty-list-heading'>User Details</h1>
        <table className='property-table'>
          <thead className='table-head'>
            <tr>
              <td>Id</td>
              <td>Email</td>
              <td>Mobile Number</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((data)=>(
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.mobileNumber}</td>
                  <td><button onClick={()=>deleteHouse(data.id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
}

export default UserDetails