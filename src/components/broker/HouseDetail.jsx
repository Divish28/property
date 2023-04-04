import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const HouseDetail = () => {

  const [HouseDetails,setHouseDetails] = useState([])

    const {id} = useParams()

    const getDetails=async()=>{
      await axios.get(`http://localhost:8000/House/${id}`).then((response)=>{
        setHouseDetails(response.data)
      }).catch((error)=>{
        alert(error.message)
      })
    }

  return (
    <div className='details-card'>
      <h1>House Detail</h1>
      <table>
          {
            HouseDetails.map((data)=>{
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
              </tr>
            })
          }
      </table>
    </div>
  )
}

export default HouseDetail