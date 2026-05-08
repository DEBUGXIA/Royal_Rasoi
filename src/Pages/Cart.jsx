import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


const Cart = ({ cartItems = [], updateQuantity = () => {}, removeFromCart = () => {} }) => {
  
  
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price?.toString().replace(/[^\d]/g, '')) || 0;
    return acc + price * (item.quantity || 1);
  }, 0);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-nevtext px-4">
        <motion.div  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <ShoppingBag size={100} className="mx-auto mb-6 opacity-20" />
          <h2 className="text-3xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="opacity-60 mb-8">Looks like you haven't added any Royal flavors yet.</p>
          <Link  to="/menu" className="inline-flex items-center gap-2 bg-gradient-to-r from-aboutBtn to-nevtext px-8 py-3 rounded-full text-black font-bold hover:shadow-lg transition-all" >
            <ChevronLeft size={20} /> Back to Menu </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 text-nevtext">
      <header className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl font-bold">Your Selection</h1>
          <p className="opacity-60 mt-1">{cartItems.length} items in your tray</p>
        </div>
        <Link to="/menu" className="text-sm font-medium hover:text-aboutBtn transition-colors"> Continue Shopping</Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode='popLayout'>
            {cartItems.map((item) => (
              <motion.div key={item.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex flex-col sm:flex-row items-center gap-6" >
                <img  src={item.image}  alt={item.name}  className="w-24 h-24 object-contain bg-black/20 rounded-2xl p-2" />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className={`text-xs uppercase tracking-widest ${item.type === 'veg' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.type}
                  </span>
                  <p className="text-aboutBtn font-bold mt-1">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-4 bg-white/5 rounded-2xl px-4 py-2 border border-white/5">
                  <button  onClick={() => updateQuantity(item.name, -1)} className="p-1 hover:text-aboutBtn transition-colors disabled:opacity-30" disabled={item.quantity <= 1}>
                    <Minus size={18} />
                  </button>
                  <span className="font-bold text-lg min-w-[20px] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, 1)} className="p-1 hover:text-aboutBtn transition-colors">
                    <Plus size={18} />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.name)} className="p-3 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all">
                  <Trash2 size={22} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] sticky top-28 shadow-2xl">
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-4 text-nevtext/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹15</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>₹{tax.toFixed(0)}</span>
              </div>
              
              <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <p className="text-sm opacity-60">Grand Total</p>
                  <p className="text-3xl font-black text-aboutBtn">₹{(total + 15).toFixed(0)}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 bg-gradient-to-r from-aboutBtn to-nevtext py-4 rounded-2xl text-black font-black text-lg shadow-[0_10px_20px_rgba(204,188,140,0.2)] hover:shadow-[0_15px_30px_rgba(204,188,140,0.3)] hover:-translate-y-1 transition-all active:scale-95"> Place Order </button>
            
            <p className="text-[10px] text-center mt-6 opacity-40 uppercase tracking-tighter"> Secure Checkout Powered by Royal Rasoi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart