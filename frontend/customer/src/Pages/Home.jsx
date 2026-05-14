import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const foodInventory = [
    {
      title: "Mutton",
      subtitle: "Seekh Kebab",
      price: "420/-",
      image: "public/Food.svg",
      description: "Finely minced mutton infused with royal Indian spices, skewered and flame-grilled in a tandoor for a smoky, succulent finish—served with refreshing mint chutney and pickled onions."
    },
    {
      title: "Chicken",
      subtitle: "Hakka Noodles",
      price: "250/-",
      image: "public/Food14.svg",
      width: "500",
      description: "Wok-tossed strands of perfect noodles thrown together with tender shredded chicken, crisp colorful vegetables, and aromatic savory Chinese spices for a classic street-style flavor."
    },
    {
      title: "Mutton",
      subtitle: "Rogan Josh",
      price: "380/-",
      image: "public/Food28.svg",
      width:"600",
      description: "A signature Kashmiri delicacy featuring tender chunks of mutton slow-cooked in a rich, brilliant red gravy flavored with aromatic kashmiri chillies, ginger, and authentic whole spices."
    },
    {
      title: "Kulfi",
      subtitle: "Malai Pistachio",
      price: "120/-",
      image: "public/Food34.svg",
      width:"700",
      description: "Traditional dense Indian frozen dessert made from milk reduced slowly over hours, enriched with premium saffron strands, green cardamom, and a generous crunch of chopped pistachios."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodInventory.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [foodInventory.length])

  const currentItem = foodInventory[currentIndex]

  return (
    <div>
      <div className='flex flex-row items-center mt-5'>
        
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}className='flex flex-row gap-5 w-full'>
          
          <div className='px-5 ml-10 w-1/2'>
            <div className='px-3 py-20 flex flex-col w-full'>
              
              <motion.div initial={{ opacity: 0, x: -20 }}animate={{ opacity: 1, x: 0 }}transition={{ duration: 0.5, delay: 0.1 }}>
                <h1 className='text-9xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent'>{currentItem.title}</h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h1 className='text-nevtext font-thin font-mutton2 text-6xl mt-2'> {currentItem.subtitle}</h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p className='text-nevtext text-lg font-mutton tracking-wide mt-15'> {currentItem.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
                <h1 className='text-6xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop via-muttonTop to-muttonDown bg-clip-text text-transparent mt-10'>{currentItem.price}</h1>
              </motion.div>

              
              <div className='flex flex-row mt-15 gap-15'>
                <div>
                  <button className='bg-gradient-to-r from-aboutBtn to-nevtext px-10 py-2 font-semibold text-2xl rounded-2xl text-black active:scale-95 transition-transform'>Add To Cart</button>
                </div>
                <div>
                  <h1 className='text-nevtext text-2xl font-semibold mt-2'>
                    <Link to="/Cart">View Cart</Link>
                  </h1>
                </div>
              </div>

            </div>
          </div>

          
          <div className='w-1/2 flex justify-center items-center'>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8,ease: "easeOut", type: "spring",stiffness: 70, damping: 18,}} whileHover={{ scale: 1.05 }}className="w-full flex justify-center items-center">
              <motion.img src={currentItem.image} alt={currentItem.title} width={currentItem.width} className="drop-shadow-xl h-auto" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}/>
            </motion.div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Home
