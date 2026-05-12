import React from 'react'
import { Link } from 'react-router-dom'
import { Bell, ImageOff, Mail } from 'lucide-react'
import Mailbox from '../../Pages/Mailbox'
import Notification from '../../Pages/Notification'

const About_us = () => {
  return (
    <div className=' flex flex-row gap-5'>
      <div className='border-2 border-gray-500/50 p-2 rounded-b-full rounded-t-full hover:border-gray-800/20'><Link to="/Notification"><Bell /></Link></div>
      <div className='border-2 border-gray-500/50 p-2 rounded-b-full rounded-t-full hover:border-gray-800/20'><Link to="/Mail"><Mail color="#836C11" /></Link></div>
    </div>
  )
}

export default About_us