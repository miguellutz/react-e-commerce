import React from 'react'
import Header from './components/header/Header'
import Items from './components/items/items'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Iphone from './assets/iphone.jpeg'
import Ipad from './assets/ipad.jpeg'
import Macbook from './assets/macbook.jpeg'
import Airpods from './assets/airpods.jpeg'

function App() {
  const items = [
    {
      id: 1,
      img: Iphone,
      title: 'iPhone 13 Pro',
      price: 999,
      rating: 5
    },
    {
      id: 2,
      img: Ipad,
      title: 'iPad Pro',
      price: 1099,
      rating: 4.5
    },
    {
      id: 3,
      img: Macbook,
      title: 'Macbook Pro 14"',
      price: 1999,
      rating: 4.5
    },
    {
      id: 4,
      img: Airpods,
      title: 'Airpods Pro',
      price: 99,
      rating: 5
    },
    {
      id: 5,
      img: Airpods,
      title: 'Homepod Mini',
      price: 299,
      rating: 4
    }
  ]

  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Items items={items}/>} />
          {/* <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Items items={items} />
              </>
            )}
          /> */}
          <Route path='/about' element={<About/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
