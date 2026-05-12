import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const BookingItem = ({ data }) => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6,  ease: "easeInOut" }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 40 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
      damping: 18,
    }}
    whileHover={{ scale: 1.05 }}
    className="flex-1 flex justify-center items-center mt-10 md:mt-0"
  >
    <motion.img
      src={data.image}
      alt={data.title}
      width={data.width}
      className="drop-shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
  </motion.div>
</motion.div>
  );
};

export default function Booking() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const inventory = [
    {title: "iOS 18",image: "public/Services1.svg", width: "700"},
    {title: "AirPods 4",image: "public/Services2.svg",width: "500"},
    {title: "Family2", image:"public/Services3.svg", width: "400"},
    {title: "Family3", image:"public/Services4.svg", width:"700" }
    
  ];

  // Automatic transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inventory.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [inventory.length]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <BookingItem key={currentIndex} data={inventory[currentIndex]} />
      </AnimatePresence>
    </div>
  );
}