import React from 'react'
import Nevbar from './Components/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contacts from './Pages/Contacts'
import About_us from './Components/Icon/About_us'
import Cart from './Pages/Cart'
import Notification from './Pages/Notification'
import Booking from './Pages/Booking'
import About from './Pages/About'

const App = () => {
  return (
    <div className='p-5 bg-[url(/public/Body.svg)] bg-cover overflow-x-hidden scroll-smooth min-h-screen overflow-y-auto w-[100%] aspect-[16/9]'>
      <Nevbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Notification' element={<Notification/>}/>
      <Route path='/About_us' element={<About_us/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </div>
  )
}

export default App