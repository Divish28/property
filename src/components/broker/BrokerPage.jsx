import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import HouseCard from './HouseCard'

const BrokerPage = () => {

    const[houseData,setHouseData]=useState([])

    const getHouseData=async()=>{
        await axios.get("http://localhost:8000/House").then((response)=>{
            setHouseData(response.data)
        }).catch(error=>alert(error.message))
    }
    useEffect(()=>{
        getHouseData()
    },[])


  return (
    <div>
        <h1>Broker Page</h1>
        {
            houseData.map((Data)=>(
                <HouseCard key={Data.id} house={Data}/>
            ))
          }
</div>)
}

export default BrokerPage