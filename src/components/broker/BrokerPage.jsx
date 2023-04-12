import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BrokerNavbar from './BrokerNavbar'
import HouseCard from './HouseCard'

const BrokerPage = () => {

    const [houseData,setHouseData]=useState([])
    const [areaData,setAreaData]=useState([])
    const [filteredData,setFilteredData] = useState([])
    const [selectedArea,setSelectedArea]=useState("")
    const [selectedBuilder, setSelectedBuilder] = useState("");

    useEffect(()=>{
        getHouseData()
        getArea()
    },[])

    useEffect(()=>{
      filterHouse();
  },[selectedArea, selectedBuilder]);

    const getHouseData=async()=>{
        await axios.get("http://localhost:8000/House").then((response)=>{
          console.log(houseData)
            setHouseData(response.data)
        }).catch(error=>alert(error.message))
    }
    
     const getArea =()=>{
         axios.get("http://localhost:8000/Area").then((response)=>{
          // console.log(response.data)
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
        setSelectedBuilder(" ");
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

      // const filterHouse = () => {
      //   if (selectedArea && selectedBuilder) {
      //     const filteredData = houseData.filter((filteredHouse) => {
      //       return filteredHouse.location === selectedArea &&
      //         filteredHouse.builder === selectedBuilder ? "true" : "false" ;
      //     });
      //     setFilteredData(filteredData);
      //   } else if (selectedArea && !selectedBuilder) {
      //     const filteredData = houseData.filter((filteredHouse) => {
      //       return filteredHouse.location === selectedArea;
      //     });
      //     setFilteredData(filteredData);
      //   } else {
      //     setFilteredData([]);
      //   }
      // }

      const filterHouse = ()=>{
        if(selectedBuilder !==0){
          const filteredData = houseData.filter((filteredHouse) => {
            return Object.values(filteredHouse)
              .join("")
              .toLowerCase()
              .includes(selectedBuilder.toLowerCase());
          });
            setFilteredData(filteredData);
        }
      }


  return (
    <div>
      <BrokerNavbar/>
      <h1>Broker Page</h1>
      <label>
        Select Area:
        <select value={selectedArea} onChange={handleAreaChange}>
          <option value="" disabled select='true' hidden>--Select Area--</option>
          {renderAreaOptions()}
        </select>
      </label>
      <label>
        Select Builder:
        <select value={selectedBuilder} onChange={handleBuilderChange}>
          <option value="" select='true' >--Select builder--</option>
          {renderBuilderOptions()}
        </select>
      </label>
      <div>
        {          filteredData.length > 0 ?
          filteredData.map((Data)=>(
              <HouseCard key={Data.id} house={Data}/>
          )):
          <h1>Select the Area and Builders.</h1>
        }
      </div>
  </div>
)
}

export default BrokerPage