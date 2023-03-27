import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import HouseCard from './HouseCard';

const BrokerPage = () => {
    const[houses,setHouses]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/House")
          .then(response => {
            console.log(response.data)
            setHouses(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      
  return (
    <div>
        <h1>Broker Page</h1>
        {
            houses.map((house)=>{
                <HouseCard key={house.id} house={house}/>
            })
        }
    </div>
  )
}

export default BrokerPage