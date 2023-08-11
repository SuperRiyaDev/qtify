import React from 'react'
import card from"../../../assests/cardCover.svg"
import "./card.css"

const Card = () => {
  return (
    <div className="card">
        <div className="first-grp">
        <img src={card} alt='card-img'/>
        <div className='follow-text'>
            <span>100M Follows</span>
        </div>
        </div>
        <div className="title-text">
        <p>New English Songs</p>
        </div>
    </div>
  )
}

export default Card