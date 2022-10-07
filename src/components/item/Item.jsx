import React from 'react'
import './item.css'

import Button from '../button/Button'
import Rating from '../rating/Rating'

import { BsCart } from 'react-icons/bs'

function Item({item}) {
  return (
    <div className="item__container" id={item.id}>
      <div className="item__img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="item__content">
        <div className="item__info">
          <h2>{item.title}</h2>
          <Rating />
          <p>{`$${item.price}`}</p>
        </div>
        <div className="shop__container">
          <Button text="Quantity" class="btn btn-qty" />
          <Button text={<BsCart />} class="btn btn-cart"/>
        </div>
      </div>
    </div>
  )
}

export default Item
