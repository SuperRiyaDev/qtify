import React from 'react'
import card from"../../../assests/cardCover.svg"
import "./card.css"

const Card = ({item}) => {
  // console.log(item,"from card")
  return (
    <div className="vid-card">
        <div className="first-grp">
        <img src={item.image} alt='card-img'/>
        <div className='follow-text'>
            <span>{item.follows} Follows</span>
        </div>
        </div>
        <div className="title-text">
        <p>{item.title}</p>
        </div>
    </div>
  )
}

export default Card