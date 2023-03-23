import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import"../../css/PropertyTable.css"

const PropertyList = () => {
  const [houseData,setHouseData]=useState([])

  useEffect(()=>{
    getHouse()
  },[])

  const getHouse = async () =>{
    await axios.get("http://localhost:8000/House").then((response)=>{
      console.log(response.data)
      setHouseData(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const deleteHouse =async (id) =>{
    await axios.delete(`http://localhost:8000/House/${id}`)
  }

  const handleDelete = async(id)=>{
    await deleteHouse(id)
    getHouse()
  }

  const navigate = useNavigate()

  return (
    <div className='property-list'>
      <table className='property-table'>
        <thead className='table-head'>
          <tr>
            <td>Id</td>
            <td>Type</td>
            <td>Furnish type</td>
            <td>Age</td>
            <td>Owner Email</td>
            <td>Description</td>
            <td>Category</td>
            <td>Price</td>
            <td>Area</td>
            <td>builder</td>
            <td>Manager Email</td>
            <td>Image</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            houseData.map((data)=>(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.type}</td>
                <td>{data.furnishedType}</td>
                <td>{data.age}</td>
                <td>{data.ownerEmail}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
                <td>{data.area}</td>
                <td>{data.builder}</td>
                <td>{data.managerEmail}</td>
                <td><img id='property-list-image' alt='House' src={data.imageUrl}/></td>
                <td><button onClick={()=>navigate("/EditProperty/"+data.id)}>EDIT</button>
                <button onClick={()=>handleDelete(data.id)} >Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PropertyList