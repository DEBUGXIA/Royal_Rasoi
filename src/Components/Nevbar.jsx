import React from 'react'
import Logo from './Icon/Logo'
import Nev from './Icon/nev'
import About_us from './Icon/About_us'

const Nevbar = () => {
  return (
    <div className=' bg-amber px-5 py-0.5 rounded-xl md:px-8 bg-white/5 backdrop-blur-xl shadow-lg text-nevtext flex flex-row items-center justify-between sticky top-0 w-full z-50 h-17 '>
      <Logo/>
      <Nev/>
      <About_us/>
    </div>
  )
}

export default Nevbar