import React from 'react'
import './header.css'
import { AiFillAmazonCircle } from 'react-icons/ai'

function Header() {
  return (
    <div className="container header__container">
      <AiFillAmazonCircle />
      <input type="text" name="searchbar" id="searchbar" placeholder="Search" />
    </div>
  )
}

export default Header
