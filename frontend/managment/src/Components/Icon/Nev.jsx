import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../Pages/Menu'
import Order from '../../Pages/Order'
import Payment from '../../Pages/Payment'

const Nev = () => {
  return (
    <div className=' flex flex-row items-center gap-20 text-lg font-semibold tracking-wide bg-white/5 backdrop-blur-xl border-2 border-gray-800/20 rounded-3xl px-5 py-1 h-10 '>
      <Link to="/Menu">Menu</Link>
      <Link to="/Order">Order</Link>
      <Link to="/Payment">Payment</Link>
    </div>
  )
}

export default Nev