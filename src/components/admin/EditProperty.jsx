import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../../css/EditProperty.css"




const EditProperty = () => {

    const[houseData,setHouseData] = useState({
        type:undefined,
        furnishedType:undefined,
        age:"",
        ownerEmail:"",
        description:"",
        category:undefined,
        price:"",
        SqFeet:"",
        imageUrl:"",
        area:"",
        builder:"",
        managerEmail:""
    })

    const {type,furnishedType,age,ownerEmail,description,category,price,SqFeet,imageUrl,area,builder,managerEmail} = houseData

    const {id} = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        loadData()
    },[])

    const handleChange = (event) => {
        setHouseData(()=> {
          return {...houseData,[event.target.name]:event.target.value}
        })
      }

    const loadData = async()=>{
        const response = await axios.get(`http://localhost:8000/House/${id}`)
        setHouseData(response.data)
    }

    const handleEdit = async()=>{
        await axios.put(`http://localhost:8000/House/${id}`,houseData)
        navigate("/PropertyList")
    }


    const handleCancel = ()=>{
        navigate('/PropertyList')
    }


  return (
    <div className='admin-edit-input'>
        <h1 className='house-edit-inputs'>EDIT HOUSE</h1>
        <form className='edit-input-form' >
            <label className='edit-house-label'>Type:</label>
            <select name='type' className='edit-select-input'onInput={handleChange} value={type}>
                <option >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='edit-house-label'>Furnished Type:</label>
            <select name='furnishedType' className='edit-select-input' onInput={handleChange} value={furnishedType} >
                <option>--select Type--</option>
                <option>Furnished</option>
                <option>Semi-Furnished</option>
            </select>
            <label className='edit-house-label'>Age:</label>
            <input name='age'  className='edit-house-input' onInput={handleChange} value={age} type='number'/>

            <label className='edit-house-label'>Owner Email:</label>
            <input  name='ownerEmail' className='edit-house-input' type='email' onInput={handleChange} value={ownerEmail} placeholder='Owner Email'/>
            <label className='edit-house-label'>Description:</label>
            <textarea name='description' className='house-textarea' onInput={handleChange} value={description} placeholder='Decribe the house'/>
            <label className='edit-house-label'>Category:</label>
            <select name='category'onInput={handleChange} value={category} className='edit-select-input'>
                <option>--select category--</option>
                <option>Rent</option>
                <option>Sale</option>
            </select>
            <label className='edit-house-label'>Price:</label>
            <input name='price' onInput={handleChange} value={price} className='edit-house-input' type='number'/>
            <label className='edit-house-label'>Sq-feet:</label>
            <input name='SqFeet' onInput={handleChange} value={SqFeet} className='edit-house-input' type='number'/>
            <label className='edit-house-label'>Image:</label>
            <input name='imageUrl' onInput={handleChange} value={imageUrl} className='edit-house-input' type='text' placeholder='Image URL' /> 
            <label className='edit-house-label'>Area:</label>
            <input name='area' onInput={handleChange} value={area} className='edit-house-input' type='text'/>
            <label className='edit-house-label'>Builders:</label>
            <input name='builder' onInput={handleChange} value={builder} className='edit-house-input' type='text'/>
            <label className='edit-house-label'>Manager Email:</label>
            <input name='managerEmail' onInput={handleChange} value={managerEmail} className='edit-house-input' type='email'/>
            <input className='edit-house-button' type='button' value='SAVE' onClick={handleEdit}/> 
            <button className='cancel-edit-button' onClick={handleCancel}>CANCEL</button> 
        </form>
    </div>
  )
}

export default EditProperty