import React from 'react'
import './home.css'

import Items from '../../components/items/items'

function Home({items}) {
  return (
    <div className="home__container">
      <Items items={items}/>
    </div>
  )
}

export default Home
