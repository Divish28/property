import React from 'react'

const HouseCard = (house) => {
    return (
        <div className="card">
          <img src={house.imageUrl} alt={house} />
          <div className="card-body">
            <h5 className="card-title">{house.builder}</h5>
            <p className="card-text">Price: {house.price}</p>
            <p className="card-text">Location: {house.area}</p>
            <button className="button">Block</button>
          </div>
        </div>
      );
}

export default HouseCard