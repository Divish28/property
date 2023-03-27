import React, { useState } from 'react'
import '../../css/AdminInput.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminAdd = (area,builder) => {

  const [houseDetails,setHouseDetails]=useState({type:"",furnishedType:"",age:"",ownerEmail:"",description:"",category:"",price:"",SqFeet:"",imageUrl:"",managerEmail:"",brokerName:""})

  const navigate = useNavigate()

  const handleChange = (users) => {
    setHouseDetails(()=> {
      return {...houseDetails,[users.target.name]:users.target.value}
    })
  }
  
  const handleSubmit = () => {
    let registerData = { ...houseDetails };
    axios
      .post(`http://localhost:8000/House`, registerData)
      .then((res) => {
        alert("ADDED")
        navigate('/PropertyList')
      })
      .catch((error) => {
        alert("error:"+error.message)
      });
  };

  return (
    <div className='admin-input'>
        <h1 className='house-inputs'>ADD HOUSE</h1>
        <form className='input-form' onSubmit={handleSubmit}>
            <label className='house-label'>House Type:</label>
            <select name='type' className='select-input' onInput={handleChange} value={houseDetails.type}>
                <option value="" disabled select='true' hidden >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='house-label'>Furnishing:</label>
            <select name='furnishedType' className='select-input' onInput={handleChange} value={houseDetails.furnishedType} >
                <option value="" disabled select='true' hidden>--select furnished Type--</option>
                <option>Furnished</option>
                <option>Semi-Furnished</option>
            </select>
            <label className='house-label'>Age:</label>
            <input name='age'  className='house-input' onInput={handleChange} value={houseDetails.age} type='number'/>

            <label className='house-label'>Owner Email:</label>
            <input  name='ownerEmail' className='house-input' type='email' onInput={handleChange} value={houseDetails.ownerEmail} placeholder='Owner Email'/>
            <label className='house-label'>Description:</label>
            <textarea name='description' className='house-textarea' onInput={handleChange} value={houseDetails.description} placeholder='Decribe the house'/>
            <label className='house-label'>Category:</label>
            {/* <input name='ownerEmail' className='house-input' type='text' placeholder='Owner Email'/> */}
            <select name='category'onInput={handleChange} value={houseDetails.category} className='select-input'>
                <option value="" disabled selected hidden>--select category--</option>
                <option>Rent</option>
                <option>Sale</option>
            </select>
            <label className='house-label'>Price:</label>
            <input name='price' onInput={handleChange} value={houseDetails.price} className='house-input' type='number'/>
            <label className='house-label'>Sq-feet:</label>
            <input name='SqFeet' onInput={handleChange} value={houseDetails.SqFeet} className='house-input' type='number'/>
            <label className='house-label'>Image:</label>
            <input name='imageUrl' onInput={handleChange} value={houseDetails.imageUrl} className='house-input' type='text' placeholder='Image URL' /> 
            <label className='house-label'>Area:</label>
            <input name='area' onInput={handleChange} value={area} className='house-input' type='text'/>
            <label className='house-label'>Builders:</label>
            <input name='builder' onInput={handleChange} value={builder} className='house-input' type='text'/>
            <label className='house-label'>Manager Email:</label>
            <input name='managerEmail' onInput={handleChange} value={houseDetails.managerEmail} className='house-input' type='email'/>
            <input className='add-house-button' type='submit' value='ADD'/> 
        </form>
    </div>
  )
}

export default AdminAdd