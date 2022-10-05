import React from 'react'
import './rating.css'
import { RiStarSLine } from 'react-icons/ri'

function Rating() {
  return (
    <div className="stars__container">
      <RiStarSLine />
      <RiStarSLine />
      <RiStarSLine />
      <RiStarSLine />
      <RiStarSLine />
    </div>
  )
}

export default Rating
