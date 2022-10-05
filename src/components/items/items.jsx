import React from 'react'

import Item from '../item/Item'

function items({items}) {
  return (
    <>
      {items.map((item) => {
        return <Item item={item} />
      })}
    </>
  )
}

export default items
