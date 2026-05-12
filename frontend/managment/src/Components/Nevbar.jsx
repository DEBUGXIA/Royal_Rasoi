import React from 'react'
import Logo from './Icon/Logo'
import Nev from './Icon/nev'
import About_us from './Icon/About_us'

const Nevbar = () => {
  return (
    <div className='px-5 py-0.5 text-aboutBtn flex flex-row items-center justify-between sticky top-0 w-full z-50 h-17 '>
      <Logo/>
      <Nev/>
      <About_us/>
    </div>
  )
}

export default Nevbar