import React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div className=' flex flex-row items-center mt-5'>
        <search className=' flex flex-row items-center gap-10 w-150 bg-  border-2 border-nevtext rounded-3xl px-5 py-2 ml-130'>
          <div><Search color="#DCCC8C" strokeWidth={2} /></div>
          <div>
            <form className=' w-200'>
              <input name="Sraech" id="Search" placeholder="Search Your Favorite Food . . ." className=' w-200 text-lg font-medium text-nevtext'/>
            </form>
          </div>
        </search>
      </div>

      <div className=' flex flex-row gap-5 w-full'>


        <div className='px-5 ml-10 w-1/2'><div className=' px-3 py-20 flex flex-col w-full'>
          
          <div><h1 className='text-9xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent'>Mutton</h1></div>

          <div><h1 className=' text-nevtext font-thin font-mutton2 text-6xl mt-2'>Seekh Kebab</h1></div>

          <div><p className=' text-nevtext text-lg font-mutton tracking-wide mt-15'>Finely minced mutton infused with royal Indian spices, skewered<br/> and flame-grilled in a tandoor for a smoky, succulent finish—<br/>served with refreshing mint chutney and pickled onions.</p></div>

          <div><h1 className='text-6xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop via-muttonTop to-muttonDown bg-clip-text text-transparent mt-10'>420/-</h1></div>

          <div className=' flex flex-row mt-15 gap-15'>
            <div>
              <button className=' bg-gradient-to-r from-aboutBtn to-nevtext px-10 py-2 font-semibold text-2xl rounded-2xl text-black'>Add To Cart</button>
            </div>
            <div><h1 className=' text-nevtext text-2xl font-semibold mt-2'><Link to="/Cart">View Cart</Link></h1></div>
          </div>

        </div></div>

        <div className='w-1/2'>
          <img src="public/Food.svg" alt="Food" />
        </div>

      </div>
    </div>
  )
}

export default Home