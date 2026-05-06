import React from 'react'
import { Search } from 'lucide-react'
import {Link} from 'react-router-dom'

const Menu = () => {

  const starter1 = [
  {name: "Mutton Seekh kebab",price: "420/-",image: "public/Food.svg"},
  { name: "Paneer Tikka", price: "260/-", image: "public/Food1.svg" },
  { name: "Chicken Tikka", price: "300/-", image: "public/Food2.svg" },
  { name: "Chicken Seekh Kebab", price: "320/-", image: "public/Food3.svg" },
  { name: "Drums of Heaven", price: "340/-", image: "public/Food4.svg" },
];

const handleAddToCart = (starter1, maincoures1, maincoures2, maincoures3, maincoures4, maincoures5) => {
    console.log("Added to cart:", starter1,maincoures1, maincoures2, maincoures3, maincoures4, maincoures5);
};


  const maincoures1 = [
  {name: "Butter Naan",price: "50/-",image: "public/Food5.svg"},
  { name: "Garlic Naan", price: "70/-", image: "public/Food6.svg" },
  { name: "Tandoori Roti", price: "30/-", image: "public/Food7.svg" },
  { name: "Lachha Paratha", price: "60/-", image: "public/Food8.svg" },
  { name: "Stuffed Kulcha", price: "90/-", image: "public/Food9.svg" },
];


const maincoures2 = [
  {name: "Veg Hokien Noodles",price: "230/-",image: "public/Food10.svg"},
  { name: "Chi Hokien Noodles", price: "250/-", image: "public/Food11.svg" },
  { name: "Mix Hokien Noodles", price: "310/-", image: "public/Food12.svg" },
  { name: "Veg Hakka Noodles", price: "230/-", image: "public/Food13.svg" },
  { name: "Chi Hakka Noodles", price: "250/-", image: "public/Food14.svg" },
];


const maincoures3 = [
  {name: "Veg Biryani",price: "180/-",image: "public/Food15.svg"},
  { name: "Chicken Biryani", price: "250/-", image: "public/Food16.svg" },
  { name: "Jeera Rice", price: "160/-", image: "public/Food17.svg" },
  { name: "Veg Pulao", price: "200/-", image: "public/Food18.svg" },
  { name: "Chicken Pulao", price: "250/-", image: "public/Food19.svg" },
];



const maincoures4 = [
  {name: "Paneer Butter Masala",price: "260/-",image: "public/Food20.svg"},
  { name: "Kadai Panee", price: "240/-", image: "public/Food21.svg" },
  { name: "Palak Paneer", price: "240/-", image: "public/Food22.svg" },
  { name: "Mix Veg Curry", price: "200/-", image: "public/Food23.svg" },
  { name: "Dal Makhani", price: "220/-", image: "public/Food24.svg" },
];


const maincoures5 = [
  {name: "Butter Chicken",price: "320/-",image: "public/Food25.svg"},
  { name: "Chicken Curry", price: "280/-", image: "public/Food26.svg" },
  { name: "Chicken Korma", price: "300/-", image: "public/Food27.svg" },
  { name: "Mutton Rogan Josh", price: "380/-", image: "public/Food28.svg" },
  { name: "Fish Curry", price: "320/-", image: "public/Food29.svg" },
];


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


      <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {starter1.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>


    <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {maincoures1.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>

    <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {maincoures2.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>

    <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {maincoures3.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>


    <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {maincoures4.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>

    <div className='px-10 ml-5'><div className="flex flex-row-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-10 items-center justify-between">
      {maincoures5.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
          <img
            src={item.image}
            alt={item.name}
            className="w-[180px] mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>

          {/* Price */}
          <p className=" text-lg mt-1 text-nevtext">₹{item.price}</p>

          {/* Button */}
          <div className="mt-4">
            <button onClick={() => handleAddToCart(item)}className=" bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div></div>


    </div>
  )
}

export default Menu