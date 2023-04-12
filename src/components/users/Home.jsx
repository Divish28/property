import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Home = () => {

  const [broker,setBroker]= useState()
  const [detail,setDetails]=useState()

  const details  = ()=>{
    axios.get("http://localhost:8000/House").then((response)=>{
      setDetails(response.data)
    })
  }
  return (
    <div>
        <form className='filter-form'>
        <label>Area:</label>
        <select className='area-filter'>
            <option value="" disabled selected hidden>--SELECT AREA--</option>
            <option>OMR</option>
            <option>ECR</option>
        </select>
        <label>Broker:</label>
        <select className='broker-filter'>
            <option value="" disabled selected hidden>--SELECT BROKER--</option>
            <option></option>
        </select>
        </form>
    </div>
  )
}

export default Home