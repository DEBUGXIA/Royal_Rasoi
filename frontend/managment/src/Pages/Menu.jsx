import React, { useState } from 'react';
import { Search, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Menu = () => {
  const [isOn, setIsOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSwitch = () => setIsOn(!isOn);


  const menuData = {
    starters: [
      { name: "Mutton Seekh kebab", price: "420/-", image: "public/Food.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" />, Time:"5 min", },
      { name: "Paneer Tikka", price: "260/-", image: "public/Food1.svg", type: "veg", edit:<SquarePen color="#5d5b5b" />},
      { name: "Chicken Tikka", price: "300/-", image: "public/Food2.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chicken Seekh Kebab", price: "320/-", image: "public/Food3.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Drums of Heaven", price: "340/-", image: "public/Food4.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
    ],
    breads: [
      { name: "Butter Naan", price: "50/-", image: "public/Food5.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Garlic Naan", price: "70/-", image: "public/Food6.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Tandoori Roti", price: "30/-", image: "public/Food7.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Lachha Paratha", price: "60/-", image: "public/Food8.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Stuffed Kulcha", price: "90/-", image: "public/Food9.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
    ],
    noodles: [
      { name: "Veg Hokien Noodles", price: "230/-", image: "public/Food10.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Veg Hakka Noodles", price: "230/-", image: "public/Food13.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chi Hokien Noodles", price: "250/-", image: "public/Food11.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Mix Hokien Noodles", price: "310/-", image: "public/Food12.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chi Hakka Noodles", price: "250/-", image: "public/Food14.svg", type: "nonveg",  edit:<SquarePen color="#5d5b5b" /> },
    ],
    rice: [
      { name: "Veg Biryani", price: "180/-", image: "public/Food15.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Jeera Rice", price: "160/-", image: "public/Food17.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Veg Pulao", price: "200/-", image: "public/Food18.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chicken Biryani", price: "250/-", image: "public/Food16.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chicken Pulao", price: "250/-", image: "public/Food19.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
    ],
    vegCurry: [
      { name: "Paneer Butter Masala", price: "260/-", image: "public/Food20.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Kadai Paneer", price: "240/-", image: "public/Food21.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Palak Paneer", price: "240/-", image: "public/Food22.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Mix Veg Curry", price: "200/-", image: "public/Food23.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Dal Makhani", price: "220/-", image: "public/Food24.svg", type: "veg", edit:<SquarePen color="#5d5b5b" /> },
    ],
    nonVegCurry: [
      { name: "Butter Chicken", price: "320/-", image: "public/Food25.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chicken Curry", price: "280/-", image: "public/Food26.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Chicken Korma", price: "300/-", image: "public/Food27.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Mutton Rogan Josh", price: "380/-", image: "public/Food28.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
      { name: "Fish Curry", price: "320/-", image: "public/Food29.svg", type: "nonveg", edit:<SquarePen color="#5d5b5b" /> },
    ],
    Desert: [
      { name: "Gulab Jamun", price: "120/-", image: "public/Food30.svg", type: "veg" },
      { name: "Rasgulla", price: "100/-", image: "public/Food31.svg", type: "veg" },
      { name: "Gajar Ka Halwa", price: "160/-", image: "public/Food32.svg", type: "veg" },
      { name: "Kheer", price: "1400/-", image: "public/Food33.svg", type: "veg" },
      { name: "Kulfi", price: "120/-", image: "public/Food34.svg", type: "veg" },
    ]
  };


  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesVeg = isOn ? item.type === "veg" : true;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesVeg && matchesSearch;
    });
  };

  
  const MenuSection = ({ items }) => {
    const filtered = filterItems(items);
    if (filtered.length === 0) return null;

    return (
      <div className="flex flex-col gap-8 p-10 justify-center">
        {filtered.map((item, index) => (
          <div key={index} className=' flex flex-row items-center justify-between bg-amber-100 border-2 border-gray-800/20 rounded-2xl px-3 py-1 shadow-lg hover:shadow-2xl w-full'>
            <div><img src={item.image} alt={item.name}  className='w-20'/></div>
            <div>{item.name} ({item.type}) <p className=' text-xs text-gray-800/50 font-semibold'>{item.Time}</p></div>
            <div>{item.price}</div>
            <div><button><Link to='/EditMenu'>{item.edit}</Link></button></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className='flex flex-row items-end mt-5 justify-end gap-10 px-10'>

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