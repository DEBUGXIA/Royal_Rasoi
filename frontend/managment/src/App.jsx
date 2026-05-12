import React, { useState } from 'react'
import Nevbar from './Components/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Menu from './Pages/Menu'
import Notification from './Pages/Notification'
import Mailbox from './Pages/Mailbox'
import Order from './Pages/Order'
import Payment from './Pages/Payment'

const App = () => {

  return (
    <div className='p-5 bg-[#FFF6DE] bg-cover overflow-x-hidden scroll-smooth min-h-screen overflow-y-auto w-[100%] aspect-[16/9] px-40 py-5'>
      <Nevbar />

      <Routes>

        <Route path='/Menu' element={<Menu />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Mailbox' element={<Mailbox />} />
      </Routes>
    </div>
  )
}

export default App