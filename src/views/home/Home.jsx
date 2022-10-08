import React from 'react'
import './home.css'

import Items from '../../components/items/items'

function Home({items, onClick}) {
  return (
    <div className="home__container">
      <Items items={items} onClick={onClick} />
    </div>
  )
}

export default Home
