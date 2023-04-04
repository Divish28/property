import React from 'react'

const InputFeilds = (action,inputValue) => {
  return (
    <div>
        <form className='input-form' >
            <label className='house-label'>Type:</label>
            <select name='type' className='select-input'onInput={handleChange} value={type}>
                <option value="" disabled selected hidden >--select Type--</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
            </select>
            <label className='house-label'>Furnished Type:</label>
            <select name='furnishedType' className='select-input' onInput={handleChange} value={furnishedType} >
                <option value="" disabled selected hidden>--select Type--</option>
                <option>Furnished</option> 
                <option>Semi-Furnished</option>
            </select>
            <label className='house-label'>Age:</label>
            <input name='age' className='house-input' onInput={handleChange} value={age} type='number'/>

            <label className='house-label'>Owner Email:</label>
            <input  name='ownerEmail' className='house-input' type='email' onInput={handleChange} value={ownerEmail} placeholder='Owner Email'/>
            <label className='house-label'>Description:</label>
            <textarea name='description' className='house-textarea' onInput={handleChange} value={description} placeholder='Decribe the house'/>
            <label className='house-label'>Category:</label>
            <select name='category'onInput={handleChange} value={category} className='select-input'>
                <option value="" disabled selected hidden>--select category--</option>
                <option>Rent</option>
                <option>Sale</option>
            </select>
            <label className='house-label'>Price:</label>
            <input name='price' onInput={handleChange} value={price} className='house-input' type='number'/>
            <label className='house-label'>Sq-feet:</label>
            <input name='SqFeet' onInput={handleChange} value={SqFeet} className='house-input' type='number'/>
            <label className='house-label'>Image:</label>
            <input name='imageUrl' onInput={handleChange} value={imageUrl} className='house-input' type='text' placeholder='Image URL' /> 
            <label className='house-label'>Area:</label>
            <input name='area' onInput={handleChange} value={area} className='house-input' type='text'/>
            <label className='house-label'>Builders:</label>
            <input name='builder' onInput={handleChange} value={builder} className='house-input' type='text'/>
            <label className='house-label'>Manager Email:</label>
            <input name='managerEmail' onInput={handleChange} value={managerEmail} className='house-input' type='email'/>
            <input className='house-button' type='button' value='SAVE' onClick={handleEdit}/> 
            <button className='cancel-button' onClick={handleCancel}>CANCEL</button> 
        </form>
    </div>
  )
}

export default InputFeilds