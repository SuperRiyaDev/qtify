import React from 'react'
import "./navbar.css"
import Logo from './logo/logo'
import FeedbackButton from './feedbackButton/feedbackButton'
import SearchBar from './searchBar/searchBar'

const Navbar = () => {
  return (
    <div className="navbar">
        <Logo/>
        <SearchBar/>
        <FeedbackButton/>
    </div>
  )
}

export default Navbar
