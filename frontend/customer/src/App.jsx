import React, { useState } from 'react'
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
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExisting = prev.find((item) => item.name === product.name);
      if (isExisting) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };
  
  const updateQuantity = (name, amount) => {
    setCartItems(prev => prev.map(item => 
      item.name === name ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  return (
    <div className='p-5 bg-[url(/public/Body.svg)] bg-cover overflow-x-hidden scroll-smooth min-h-screen overflow-y-auto w-[100%] aspect-[16/9] px-30 py-5'>
      <Nevbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu addToCart={addToCart} />} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Cart' element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/About_us' element={<About_us />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App