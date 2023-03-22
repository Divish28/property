import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PropertyList = () => {
  const [houseData,setHouseData]=useState(undefined)

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async () =>{
    const response = await axios.get("http://localhost:8000/House").then((response)=>{
      console.log(response.data)
      setHouseData(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Type</td>
            <td>Furnish type</td>
            <td>Age</td>
            <td>Owner Email</td>
            <td>Description</td>
            <td>Category</td>
            <td>Price</td>
            <td>Image</td>
            <td>Area</td>
            <td>builder</td>
            <td>Manager Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>{houseData.map(r)}</tr>
        </tbody>
      </table>
    </div>
  )
}

export default PropertyList