import React, { useState } from 'react'
import './nav.css'

import { Link } from 'react-router-dom'

import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'


function Nav() {
  const [activeNav, setActiveNav] = useState('/')

  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiFillHome /></Link>
      <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><FaShoppingCart /></Link>
      <Link to="/account" onClick={() => setActiveNav('/account')} className={activeNav === '/account' ? 'active' : ''}><BsFillPersonFill /></Link>
      {/* <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#cart" onClick={() => setActiveNav('#cart')} className={activeNav === '#cart' ? 'active' : ''}><FaShoppingCart /></a>
      <a href="#profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}><BsFillPersonFill /></a> */}
    </nav>
  )
}

export default Nav
