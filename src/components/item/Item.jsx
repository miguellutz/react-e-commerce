import React from 'react'
import './item.css'

import { BsCart } from 'react-icons/bs'

import Rating from '../rating/Rating'

function Item() {
  return (
    <div className="item__container">
      <div className="item__img">
        <img src={ require('../../assets/iphone.jpeg')} alt="iphone" />
      </div>
      <div className="item__content">
        <div className="item__info">
          <h2>iPhone 13</h2>
          <Rating />
          <p>$899</p>
        </div>
        <div className="cart__container">
          <BsCart />
        </div>
      </div>
    </div>
  )
}

export default Item
