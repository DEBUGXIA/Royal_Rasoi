import React from 'react'
import { Link } from 'react-router-dom'
import { Bell, ImageOff } from 'lucide-react'
import About from '../../Pages/About'
import Notification from '../../Pages/Notification'

const About_us = () => {
  return (
    <div className=' flex flex-row gap-5'>
      <div className='mt-2'><Link to="/Notification"><Bell /></Link></div>
      <div><button className=' bg-white text-aboutBtn text-lg font-semibold tracking-wide rounded-lg px-3 py-1 shadow-lg shadow-gray-900/50 '><Link to="/About">About</Link></button></div>
    </div>
  )
}

export default About_us