import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, Clock, Tag, X } from 'lucide-react';

const Notification = () => {
  
  const notifications = [
    {id: 1, type: 'order', title: 'Order Confirmed', message: 'Your Chicken Biryani is being prepared by our head chef.', time: '2 mins ago', icon: <Clock className="text-aboutBtn" />,},
    {id: 2, type: 'booking', title: 'Table Reserved', message: 'Success! Your table for 4 is booked for tonight at 8:30 PM.', time: '1 hour ago', icon: <CheckCircle className="text-green-400" />,},
    {id: 3, type: 'offer', title: 'Royal Discount', message: 'Use code ROYAL20 to get 20% off on all Veg Curries today.', time: '5 hours ago', icon: <Tag className="text-nevtext" />,},
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 text-nevtext">
      <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
        <div className="bg-aboutBtn/20 p-3 rounded-2xl">
          <Bell className="text-aboutBtn" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="opacity-60 text-sm">Stay updated with your orders and bookings</p>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {notifications.map((note, index) => (
            <motion.div key={note.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex items-start gap-5 hover:bg-white/10 transition-all duration-300">
              <div className="bg-black/20 p-3 rounded-2xl mt-1">
               {note.icon}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <span className="text-xs opacity-40 font-medium text-black">{note.time}</span>
                </div>
                <p className="text-nevtext/70 mt-1 leading-relaxed"> {note.message}</p>
              </div>

              <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-full transition-all">
                <X size={16} className="text-white/40" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {notifications.length > 0 && (
        <div className="mt-8 text-center">
          <button className="text-sm font-semibold opacity-40 hover:opacity-100 hover:text-aboutBtn transition-all underline underline-offset-4">  Mark all as read</button>
        </div>
      )}
      
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 opacity-20">
          <Bell size={80} />
          <p className="mt-4 text-xl">No new notifications</p>
        </div>
      )}
    </div>
  );
};

export default Notification