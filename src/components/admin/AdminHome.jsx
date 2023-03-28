import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminAdd from './AdminAdd'

const AdminHome = () => {

  // const areaData = [
  //   {
  //     "location": "ECR",
  //     "builders": ["APPASWAMY", "HOUSE OF HIRANANDANI", "BRIGADE ", "SOBHA", "G Square"]
  //   },
  //   {
  //     "location": "OMR",
  //     "builders": ["PRESTIGE GROUP", "CASAGRAND", "OLYMPIA GROUP", "EMBASSY GROUP", "AKSHAYA"]
  //   }
  // ];

  const [areaData,setAreaData]=useState([])
  const [selectedArea,setSelectedArea]=useState("")
  const [selectedBuilder, setSelectedBuilder] = useState("");

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
      console.log(selectedAreaData.builders)
      return selectedAreaData.builders.map((builder) => (
        <option key={builder} value={builder}>
          {builder}
        </option>
      ));
    } else {
      return null;
    }
  };
  // const renderBuilderOptions = () => {
  //   const selectedAreaData = areaData.find(area => area.location === selectedArea);
  //   if (selectedAreaData && selectedAreaData.builders) {
  //     return selectedAreaData.builders.map(builder => (
  //       <option key={builder} value={builder}>
  //         {builder}
  //       </option>
  //     ));
  //   } else {
  //     return null;
  //   }
  // };

  const handleBuilderChange = (event) => {
    setSelectedBuilder(event.target.value);
  };
  
  

  const handleSubmit = () =>{
    <AdminAdd area={selectedArea} builder={selectedBuilder}/>
  }

  return(
      <div>
        <label>
          Select Area:
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">--Select--</option>
            {renderAreaOptions()}
          </select>
        </label>
        <label>
          Select Builder:
          <select value={selectedBuilder} onChange={handleBuilderChange}>
            <option value="">--Select--</option>
            {renderBuilderOptions()}
          </select>
        </label>
      </div>
    
    // <div>
    //   <select onChange={(e) => setSelectedArea(e.target.value)}>
    //     <option value="" >Select an area</option>
    //     {
    //       areaData.map((area) => (
    //         <option value={area.location}>{area.location}</option>
    //       ))
    //     }
    //   </select>
    //   <select disabled={!selectedArea} onChange={(e) => setSelectedBuilder(e.target.value)}>
    //     <option value="">Select a builder</option>
    //     {
    //       selectedArea &&
    //       areaData
    //       .find((area) => area.location === selectedArea)
    //       .builders.map((builder) => (
    //       <option value={builder}>{builder}</option>
    //       ))
    //     }
    //   </select>
    // </div>
  )
}

export default AdminHome