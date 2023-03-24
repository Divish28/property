import React from 'react'

const Home = () => {
  return (
    <div>
        <form className='filter-form'>
        <label>Area:</label>
        <select className='area-filter'>
            <option value="" disabled selected hidden>--SELECT AREA--</option>
            <option>OMR</option>
            <option>ECR</option>
        </select>
        <label>Broker:</label>
        <select className='broker-filter'>
            <option value="" disabled selected hidden>--SELECT BROKER</option>
            <option></option>
        </select>
        </form>
    </div>
  )
}

export default Home