import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from "framer-motion";

const Menu = () => {
  const [isOn, setIsOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSwitch = () => setIsOn(!isOn);


  const menuData = {
    starters: [
      { name: "Mutton Seekh kebab", price: "420/-", image: "public/Food.svg", type: "nonveg" },
      { name: "Paneer Tikka", price: "260/-", image: "public/Food1.svg", type: "veg" },
      { name: "Chicken Tikka", price: "300/-", image: "public/Food2.svg", type: "nonveg" },
      { name: "Chicken Seekh Kebab", price: "320/-", image: "public/Food3.svg", type: "nonveg" },
      { name: "Drums of Heaven", price: "340/-", image: "public/Food4.svg", type: "nonveg" },
    ],
    breads: [
      { name: "Butter Naan", price: "50/-", image: "public/Food5.svg", type: "veg" },
      { name: "Garlic Naan", price: "70/-", image: "public/Food6.svg", type: "veg" },
      { name: "Tandoori Roti", price: "30/-", image: "public/Food7.svg", type: "veg" },
      { name: "Lachha Paratha", price: "60/-", image: "public/Food8.svg", type: "veg" },
      { name: "Stuffed Kulcha", price: "90/-", image: "public/Food9.svg", type: "veg" },
    ],
    noodles: [
      { name: "Veg Hokien Noodles", price: "230/-", image: "public/Food10.svg", type: "veg" },
      { name: "Veg Hakka Noodles", price: "230/-", image: "public/Food13.svg", type: "veg" },
      { name: "Chi Hokien Noodles", price: "250/-", image: "public/Food11.svg", type: "nonveg" },
      { name: "Mix Hokien Noodles", price: "310/-", image: "public/Food12.svg", type: "nonveg" },
      { name: "Chi Hakka Noodles", price: "250/-", image: "public/Food14.svg", type: "nonveg" },
    ],
    rice: [
      { name: "Veg Biryani", price: "180/-", image: "public/Food15.svg", type: "veg" },
      { name: "Jeera Rice", price: "160/-", image: "public/Food17.svg", type: "veg" },
      { name: "Veg Pulao", price: "200/-", image: "public/Food18.svg", type: "veg" },
      { name: "Chicken Biryani", price: "250/-", image: "public/Food16.svg", type: "nonveg" },
      { name: "Chicken Pulao", price: "250/-", image: "public/Food19.svg", type: "nonveg" },
    ],
    vegCurry: [
      { name: "Paneer Butter Masala", price: "260/-", image: "public/Food20.svg", type: "veg" },
      { name: "Kadai Paneer", price: "240/-", image: "public/Food21.svg", type: "veg" },
      { name: "Palak Paneer", price: "240/-", image: "public/Food22.svg", type: "veg" },
      { name: "Mix Veg Curry", price: "200/-", image: "public/Food23.svg", type: "veg" },
      { name: "Dal Makhani", price: "220/-", image: "public/Food24.svg", type: "veg" },
    ],
    nonVegCurry: [
      { name: "Butter Chicken", price: "320/-", image: "public/Food25.svg", type: "nonveg" },
      { name: "Chicken Curry", price: "280/-", image: "public/Food26.svg", type: "nonveg" },
      { name: "Chicken Korma", price: "300/-", image: "public/Food27.svg", type: "nonveg" },
      { name: "Mutton Rogan Josh", price: "380/-", image: "public/Food28.svg", type: "nonveg" },
      { name: "Fish Curry", price: "320/-", image: "public/Food29.svg", type: "nonveg" },
    ]
  };

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesVeg = isOn ? item.type === "veg" : true;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesVeg && matchesSearch;
    });
  };

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item.name);
  };

  // Reusable Section Component
  const MenuSection = ({ items }) => {
    const filtered = filterItems(items);
    if (filtered.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-8 p-10 justify-center">
        {filtered.map((item, index) => (
          <motion.div  layout key={item.name}  className="bg-white/5 backdrop-blur-xl rounded-2xl text-center p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl w-[250px]">
            <img src={item.image} alt={item.name} className="w-[180px] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-nevtext">{item.name}</h2>
            <p className="text-lg mt-1 text-nevtext">₹{item.price}</p>
            <div className="mt-4">
              <button onClick={() => handleAddToCart(item)} className="bg-gradient-to-r from-aboutBtn to-nevtext font-semibold text-black px-4 py-2 rounded-lg transition duration-300"> Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className='flex flex-row items-center mt-5 justify-center gap-10 px-10'>
        <div className='flex flex-row items-center gap-4 w-full max-w-2xl border-2 border-nevtext rounded-3xl px-5 py-2'>
          <Search color="#DCCC8C" strokeWidth={2} />
          <input type="text" placeholder="Search Your Favorite Food . . ."  className='w-full bg-transparent outline-none text-lg font-medium text-nevtext' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <div className='text-lg font-medium text-nevtext'>Veg</div>
          <div onClick={toggleSwitch} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-green-600' : 'bg-gray-400'}`} style={{ border: "2px solid #DCCC8C" }}>
            <motion.div className="bg-[#836C11] w-4 h-4 rounded-full" animate={{ x: isOn ? 24 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}/>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {Object.values(menuData).map((section, idx) => (
          <MenuSection key={idx} items={section} />
        ))}
      </div>
    </div>
  );
};

export default Menu;