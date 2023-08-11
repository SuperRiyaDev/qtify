import React from 'react'
import "./heroSection.css"
import headphoneImg from "../../assests/vibrating-headphone 1.svg"

const HeroSection = () => {
  return (
    <div className="heroSection">
        <div className="text-section">
            <div className="first-line">100 Thousand Songs, ad-free</div>
            <div className="second-line">Over thousands podcast episodes</div>
        </div>
        <div className="headphone-section">
            <img src={headphoneImg} alt='vibrating-headphone-img'/>
        </div>
        </div>
  )
}

export default HeroSection