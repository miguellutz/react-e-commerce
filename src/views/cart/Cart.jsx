import React from 'react'
import './cart.css'

import CartTotal from './CartTotal'
import Items from '../../components/items/items'

function Cart({items}) {
  const cartItems = items.filter(item => (item.cart === true));

  return (
    <div className="cart__container">
      <div className="cart__header">
        <h1>Cart Overview</h1>
      </div>
      <Items items={cartItems} />
      <CartTotal items={cartItems} />
    </div>
  )
}

export default Cart
