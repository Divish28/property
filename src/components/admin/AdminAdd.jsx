import React, { useState } from 'react'
import '../../css/AdminInput.css'
import axios from 'axios'

const AdminAdd = () => {

  const [userDetials,setUserDetails]=useState({type:undefined,furnishedType:undefined,age:"",ownerEmail:"",description:"",category:undefined,price:"",SqFeet:"",imageUrl:"",area:"",builder:"",managerEmail:""})

  const handleChange = (users) => {
    setUserDetails(()=> {
      return {...userDetials,[users.target.name]:users.target.value}
    })
  }
  
  const handleSubmit = (registerSubmit) => {
    registerSubmit.preventDefault();
    let registerData = { ...userDetials };
    console.log(registerData);
    axios
      .post("http://localhost:8000/House", registerData)
      .then((res) => {
        alert("ADDED")
      })
      .catch((error) => {
        alert("error:"+error.message)
      });
  };

  return (
    <div className='admin-input'>
        <h1 className='house-inputs'>ADD HOUSE</h1>
        <form className='input-form' onSubmit={handleSubmit}>
            <label className='house-label'>Type:</label>
            <select 
            name='type' 
            className='select-input'
            onInput={handleChange} value={userDetials.type}
            >
                <option >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='house-label'>Furnished Type:</label>
            <select name='furnishedType' className='select-input' onInput={handleChange} value={userDetials.furnishedType} >
                <option>--select Type--</option>
                <option>Furnished</option>
                <option>Semi-Furnished</option>
            </select>
            <label className='house-label'>Age:</label>
            <input name='age'  className='house-input' onInput={handleChange} value={userDetials.age} type='number'/>

            <label className='house-label'>Owner Email:</label>
            <input  name='ownerEmail' className='house-input' type='email' onInput={handleChange} value={userDetials.ownerEmail} placeholder='Owner Email'/>
            <label className='house-label'>Description:</label>
            <textarea name='description' className='house-textarea' onInput={handleChange} value={userDetials.description} placeholder='Decribe the house'/>
            <label className='house-label'>Category:</label>
            {/* <input name='ownerEmail' className='house-input' type='text' placeholder='Owner Email'/> */}
            <select name='category'onInput={handleChange} value={userDetials.category} className='select-input'>
                <option>--select category--</option>
                <option>Rent</option>
                <option>Sale</option>
            </select>
            <label className='house-label'>Price:</label>
            <input name='price' onInput={handleChange} value={userDetials.price} className='house-input' type='number'/>
            <label className='house-label'>Sq-feet:</label>
            <input name='SqFeet' onInput={handleChange} value={userDetials.SqFeet} className='house-input' type='number'/>
            <label className='house-label'>Image:</label>
            <input name='imageUrl' onInput={handleChange} value={userDetials.imageUrl} className='house-input' type='text' placeholder='Image URL' /> 
            <label className='house-label'>Area:</label>
            <input name='area' onInput={handleChange} value={userDetials.area} className='house-input' type='text'/>
            <label className='house-label'>Builders:</label>
            <input name='builder' onInput={handleChange} value={userDetials.builder} className='house-input' type='text'/>
            <label className='house-label'>Manager Email:</label>
            <input name='managerEmail' onInput={handleChange} value={userDetials.managerEmail} className='house-input' type='email'/>
            <input className='add-house-button' type='submit' value='ADD'/> 
        </form>
    </div>
  )
}

export default AdminAdd