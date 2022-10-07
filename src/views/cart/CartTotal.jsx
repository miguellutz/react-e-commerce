import React from 'react'

function CartTotal({items}) {
  let total = 0
  items.forEach(item => total += item.price)
  return (
    <div className="cartTotal__container">
      <div className="cartInfo__container">
        <h1>Total</h1>
        <p>{`$${total}`}</p>
      </div>
    </div>
  )
}

export default CartTotal
