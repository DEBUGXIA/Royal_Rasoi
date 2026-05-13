import React, { useState } from 'react';
import { Search, CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const EditMenu = () => {
  
  const [menu, setMenu] = useState({
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
  });

  const [isOn, setIsOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSwitch = () => setIsOn(!isOn);

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesVeg = isOn ? item.type === "veg" : true;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesVeg && matchesSearch;
    });
  };

 
  const handleItemEdit = (sectionKey, originalIndex, field, value) => {
    setMenu((prevMenu) => {
      const updatedSection = [...prevMenu[sectionKey]];
      updatedSection[originalIndex] = {
        ...updatedSection[originalIndex],
        [field]: value
      };
      return { ...prevMenu, [sectionKey]: updatedSection };
    });
  };

  
  const MenuSection = ({ items, sectionKey }) => {
    const filtered = filterItems(items);
    if (filtered.length === 0) return null;

    return (
      <div className="flex flex-col gap-8 p-10 justify-center">
        {filtered.map((item) => {
          
          const originalIndex = menu[sectionKey].findIndex((i) => i.name === item.name);

          return (
            <div key={originalIndex} className='flex flex-row items-center justify-between bg-amber-100 border-2 border-gray-800/20 rounded-2xl px-3 py-1 shadow-lg hover:shadow-2xl w-full gap-4'>
              
              <div className="relative group w-20 h-20 flex items-center justify-center overflow-hidden rounded">
                <img src={item.image} alt={item.name} className='w-full object-cover'/>
                <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      handleItemEdit(sectionKey, originalIndex, 'image', url);
                    }}}  className='absolute inset-0 opacity-0 cursor-pointer' />
              </div>
              
              <div className="flex-1">
                <input type="text" value={item.name} onChange={(e) => handleItemEdit(sectionKey, originalIndex, 'name', e.target.value)} className="bg-transparent border-b border-dashed border-gray-400 focus:border-solid focus:outline-none w-full font-medium" />
                <span className="text-xs text-gray-500 block mt-0.5">({item.type})</span>
              </div>

              <div>
                <input  type="text"  value={item.price} onChange={(e) => handleItemEdit(sectionKey, originalIndex, 'price', e.target.value)} className="bg-transparent border-b border-dashed border-gray-400 focus:border-solid focus:outline-none w-20 text-right font-medium"/>
              </div>

              
              <div>
                <Link to="/Menu">
                  <CircleCheckBig color="#5d5b5b" className="hover:scale-110 transition-transform" />
                </Link>
              </div>

            </div>
          );
        })}
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
        {Object.keys(menu).map((key) => (
          <MenuSection key={key} sectionKey={key} items={menu[key]} />
        ))}
      </div>
    </div>
  );
};

export default EditMenu;
