import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/card.css'
import {useDispatch,useSelector} from 'react-redux'
import { blockHouse } from '../redux/action/Action'
const HouseCard = ({house}) => {

  const dispatch = useDispatch()
  
  const handleBlock= (e)=>{
    dispatch(blockHouse(e))
  }
  const blocklist =  useSelector(
    (state) => state.blocklist.blockedHouse
  );

  const navigate=useNavigate()
    return (
        <div className="card">
          <img onClick={()=>navigate('/HouseDetails/'+house.id)} src={house.imageUrl} alt="House" />
          <div className="card-body">
            <h3 className='card-title'>Builder: {house.builder}</h3>
            <h4 className="card-title">Type: {house.type}</h4>
            <h4 className='card-title'>Category: {house.category}</h4>
            <p className="card-text">Price: {house.price}</p>
            <p className="card-text">Location: {house.area}</p>
            <button className="button" onClick={handleBlock}>Block</button>
          </div>
        </div>
      );
}

export default HouseCard