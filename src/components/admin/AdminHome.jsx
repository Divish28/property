import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminAdd from './AdminAdd'

const AdminHome = () => {

  const [areaData,setAreaData]=useState([])
  const [selectedArea,setSelectedArea]=useState(null)
  const [selectedBuilder, setSelectedBuilder] = useState(null);

  useEffect(()=>{
    getArea()
  },[])

 const getArea =()=>{
     axios.get("http://localhost:8000/Area").then((response)=>{
      console.log(response.data)
      setAreaData(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const renderAreaOptions = () => {
    return areaData.map(area => (
      <option key={area.location} value={area.location}>
        {area.location}
      </option>
    ));
  };
  
  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
    // setSelectedBuilder('');
  };
  
  const renderBuilderOptions = () => {
    const selectedAreaData = areaData.find((area) => area.location === selectedArea);
    if (selectedAreaData) {
      return selectedAreaData.builders.map((builder) => (
        <option key={builder} value={builder}>
          {builder}
        </option>
      ));
    } else {
      return null;
    }
  };


  const handleBuilderChange = (event) => {
    console.log(event.target.value)
    setSelectedBuilder(event.target.value);
  };
  
  const navigate = useNavigate()

  const handleSubmit = () =>{
    navigate('/AdminAdd')
  }

  return(
      <div>
        <form onSubmit={handleSubmit}>
        <label>
          Select Area:
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="" selected disabled hidden>--Select Area--</option>
            {renderAreaOptions()}
          </select>
        </label>
        <label>
          Select Builder:
          <select value={selectedBuilder} onChange={handleBuilderChange}>
            <option value="" selected disabled hidden>--Select builder--</option>
            {renderBuilderOptions()}
          </select>
        </label>
        <button>Add</button>
        {/* <AdminAdd area={selectedArea} builder={selectedBuilder}/> */}
        </form>
      </div>
  )
}

export default AdminHome