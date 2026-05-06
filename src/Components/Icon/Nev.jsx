import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import Menu from '../../Pages/Menu'
import Contacts from '../../Pages/Contacts'
import Cart from '../../Pages/Cart'
import Booking from '../../Pages/Booking'

const Nev = () => {
  return (
    <div className=' flex flex-row items-center gap-20 text-lg font-semibold tracking-wide'>
      <Link to="/">Home</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/Booking">Booking</Link>
      <Link to="/Contacts">Services</Link>
      <Link to="/Cart">Cart</Link>
    </div>
  )
}

export default Nev