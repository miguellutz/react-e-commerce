import React from 'react'
import './item.css'

function Item() {
  return (
    <div className="item__container">
      <div className="item__img">
        <img src={ require('../../assets/iphone.jpeg')} alt="iphone" />
      </div>
      <div className="item__content">
        <h2>iPhone 13</h2>
      </div>
    </div>
  )
}

export default Item
