import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const HouseDetail = () => {

  const [HouseDetails,setHouseDetails] = useState([])

    const {id} = useParams()

    useEffect(()=>{
      getDetails()
    },[])

    const getDetails=async()=>{
      const response = await axios.get(`http://localhost:8000/House/${id}`)
      console.log(response.data)
        setHouseDetails(response.data)
    }


  return (
    <div className="details-card">
    <h1>House Detail</h1>
    {HouseDetails.length > 0 ? (
      HouseDetails.map((data) => (
        <h1 key={data.id}>Description: {data.description}</h1>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default HouseDetail