import React from 'react'

// <------- Components -------->
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

// <---------- Views ----------->
import Home from './views/home/Home'
import Cart from './views/cart/Cart'
import Account from './views/account/Account'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// <--------- Images ----------->
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
      rating: 5,
      cart: true
    },
    {
      id: 2,
      img: Ipad,
      title: 'iPad Pro',
      price: 1099,
      rating: 4.5,
      cart: false
    },
    {
      id: 3,
      img: Macbook,
      title: 'Macbook Pro 14"',
      price: 1999,
      rating: 4.5,
      cart: true
    },
    {
      id: 4,
      img: Airpods,
      title: 'Airpods Pro',
      price: 99,
      rating: 5,
      cart: true
    },
    {
      id: 5,
      img: Airpods,
      title: 'Homepod Mini',
      price: 299,
      rating: 4,
      cart: false
    }
  ]

  // const toggleCart = (item) => item.cart = !item.cart
  const toggleCart = () => console.log('click')

  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home items={items} onClick={toggleCart} />} />
          <Route path='/cart' element={<Cart items={items}/>} />
          {// React V6 component replaced by element for Route
          }
          <Route path='/account' element={<Account/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
