import React from 'react'
import './item.css'

import Button from '../button/Button'

import Rating from '../rating/Rating'
// import Ipad from '../../assets/ipad.jpeg'
// import Macbook from '../../assets/macbook.jpeg'
// import Airpods from '../../assets/airpods.jpeg'

import { BsCart } from 'react-icons/bs'

function Item({item}) {
  return (
      <div className="item__container">
        <div className="item__img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="item__content">
          <div className="item__info">
            <h2>{item.title}</h2>
            <Rating />
            <p>{`$${item.price}`}</p>
          </div>
          <div className="cart__container">
            <Button text="Quantity" />
            <BsCart />
          </div>
        </div>
      </div>
  )
}
      /*<div className="item__container">
        <div className="item__img">
          <img src={Ipad} alt="iphone" />
        </div>
        <div className="item__content">
          <div className="item__info">
            <h2>iPad Pro</h2>
            <Rating />
            <p>$1099</p>
          </div>
          <div className="cart__container">
            <BsCart />
          </div>
        </div>
      </div>

      <div className="item__container">
        <div className="item__img">
          <img src={Macbook} alt="iphone" />
        </div>
        <div className="item__content">
          <div className="item__info">
            <h2>Macbook Pro</h2>
            <Rating />
            <p>$1999</p>
          </div>
          <div className="cart__container">
            <BsCart />
          </div>
        </div>
      </div>

      <div className="item__container">
        <div className="item__img">
          <img src={Airpods} alt="iphone" />
        </div>
        <div className="item__content">
          <div className="item__info">
            <h2>Airpods Pro</h2>
            <Rating />
            <p>$199</p>
          </div>
          <div className="cart__container">
            <BsCart />
          </div>
        </div>
      </div> */

export default Item
