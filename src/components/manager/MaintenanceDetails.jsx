import React, { useState } from 'react'

const MaintenanceDetails = () => {
  const[maintenance,setMaintenance]=useState()
  const[sqFeet,setSqfeet]=useState()
  const[type,SetType]=useState()

  const caluclate = ()=>{
    if(type=="sales"){
      if(sqFeet<700){
        setMaintenance(sqFeet*100)
      }
      else if(sqFeet>700 && sqFeet<1000){
        setMaintenance(sqFeet*150)
      }
      else if(sqFeet>1000 && sqFeet<1500){
        setMaintenance(sqFeet*200)
      }
      else{
        setMaintenance(sqFeet*250)
      }
  }
  else{
    if(sqFeet<700){
      setMaintenance(sqFeet*5)
    }
    else if(sqFeet>700 && sqFeet<1000){
      setMaintenance(sqFeet*10)
    }
    else if(sqFeet>1000 && sqFeet<1500){
      setMaintenance(sqFeet*20)
    }
    else{
      setMaintenance(sqFeet*25)
    }
  }
}

  return (
    <div>
        <h1>{maintenance}</h1>
    </div>
  )
}

export default MaintenanceDetails