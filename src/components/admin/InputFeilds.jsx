import React from 'react'

const InputFeilds = () => {
  return (
    <div>
                <form className='edit-input-form' >
            <label className='edit-house-label'>Type:</label>
            <select name='type' className='edit-select-input'onInput={handleChange} value={type}>
                <option value="" disabled selected hidden >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='edit-house-label'>Furnished Type:</label>
            <select name='furnishedType' className='edit-select-input' onInput={handleChange} value={furnishedType} >
                <option value="" disabled selected hidden>--select Type--</option>
                <option>Furnished</option> 
                <option>Semi-Furnished</option>
            </select>
            <label className='edit-house-label'>Age:</label>
            <input name='age' className='edit-house-input' onInput={handleChange} value={age} type='number'/>

            <label className='edit-house-label'>Owner Email:</label>
            <input  name='ownerEmail' className='edit-house-input' type='email' onInput={handleChange} value={ownerEmail} placeholder='Owner Email'/>
            <label className='edit-house-label'>Description:</label>
            <textarea name='description' className='house-textarea' onInput={handleChange} value={description} placeholder='Decribe the house'/>
            <label className='edit-house-label'>Category:</label>
            <select name='category'onInput={handleChange} value={category} className='edit-select-input'>
                <option value="" disabled selected hidden>--select category--</option>
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

export default InputFeilds