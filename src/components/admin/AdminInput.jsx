import React from 'react'
import '../../css/AdminInput.css'

const AdminInput = () => {
  return (
    <div className='admin-input'>
        <h1 className='house-inputs'>HOUSE INPUTS</h1>
        <form className='input-form'>
            <label className='house-label'>Type:</label>
            <select className='select-input'>
                <option >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='house-label'>Furnished type:</label>
            <select className='select-input'>
                <option>--select Type--</option>
                <option>Furnished</option>
                <option>Semi-Furnished</option>
            </select>
            <label className='house-label'>Age:</label>
            <input className='house-input' type='number'/>
            <label className='house-label'>Owner E-mail:</label>
            <input className='house-input' type='email' placeholder='Owner Email'/>
            <label className='house-label'>Description:</label>
            <textarea className='house-textarea' type='textarea' placeholder='Decribe the house'/>
            <label className='house-label'>Category:</label>
            <select className='select-input'>
                <option>--select category--</option>
                <option>Rent</option>
                <option>Sale</option>
            </select>
            <label className='house-label'>Price:</label>
            <input className='house-input' type='number'/>
            <label className='house-label'>Sq-feet:</label>
            <input className='house-input' type='number'/>
            <label className='house-label'>Image:</label>
            <input className='house-input' type='text' placeholder='Image URL' /> 
            <input className='add-house-button' type='submit' value='add'/> 
        </form>
    </div>
  )
}

export default AdminInput