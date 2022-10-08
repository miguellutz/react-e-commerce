import React from 'react'
import './items.css'

import Item from '../item/Item'

function items({items, onClick}) {
  return (
    <div className="items__container">
      {items.map((item) => {
        return <Item item={item} key={item.id} onClick={onClick} />
      })}
    </div>
  )
}

export default items
