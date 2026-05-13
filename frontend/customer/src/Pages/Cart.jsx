import React, { useState } from 'react';
import { ShoppingBag, ChevronRight, Truck, CreditCard, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const [cart, setCart] = useState([
    { name: "Mutton Seekh kebab", price: "420/-", image: "public/Food.svg", type: "nonveg", qty: 1 },
    { name: "Paneer Tikka", price: "260/-", image: "public/Food1.svg", type: "veg", qty: 2 },
    { name: "Veg Hakka Noodles", price: "230/-", image: "public/Food13.svg", type: "veg", qty: 1 }
  ]);

  // Clean currency syntax string (e.g. "420/-") to floating number
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace('/-', '')) || 0;
  };

  // Up/down quantity and absolute structural mutation controls
  const updateQty = (index, delta) => {
    const updated = [...cart];
    updated[index].qty = Math.max(1, updated[index].qty + delta);
    setCart(updated);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Dynamic real-time calculation aggregators
  const subtotal = cart.reduce((acc, item) => acc + (parsePrice(item.price) * item.qty), 0);
  const gstTax = subtotal * 0.05; // 5% GST for restaurant items
  const deliveryCharge = subtotal > 500 || subtotal === 0 ? 0 : 40;
  const grandTotal = subtotal + gstTax + deliveryCharge;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-nevtext">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Map Path */}
        <nav className="flex items-center space-x-2 text-sm text-nevtext mb-6">
          <span className="hover:text-amber-900 cursor-pointer">Menu</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-nevtext font-semibold">Current Order Summary</span>
        </nav>

        {/* Page Top Header */}
        <div className="border-b border-amber-900/10 pb-5 mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-nevtext">Review Your Order</h1>
          <p className="text-sm text-nevtext mt-1">Please confirm your culinary selections before checking out.</p>
        </div>

        {cart.length === 0 ? (
          /* Empty Active Session State Graphic */
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-amber-100/40 rounded-2xl border-2 border-dashed border-amber-900/20"
          >
            <ShoppingBag className="w-16 h-16 mx-auto text-amber-800/40 mb-4" />
            <h2 className="text-xl font-bold text-amber-950">Your basket is empty</h2>
            <p className="text-slate-500 mt-1 max-w-xs mx-auto text-sm">Head back to our main menu to add delicious items to your plate.</p>
          </motion.div>
        ) : (
          /* Structural Split Layout Screen Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Content Column Block: Active Items Checklist */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-amber-900/10 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-amber-100/50 border-b border-amber-900/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-800" />
                    <h2 className="font-bold text-amber-950">Selected Dishes</h2>
                  </div>
                  <span className="text-xs bg-amber-900/10 text-amber-900 font-bold px-2.5 py-1 rounded-full">
                    {cart.reduce((total, i) => total + i.qty, 0)} Items
                  </span>
                </div>

                <ul className="divide-y divide-amber-900/5">
                  <AnimatePresence>
                    {cart.map((item, idx) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50, height: 0, padding: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 flex items-center gap-4 group"
                      >
                        {/* Menu Matching Thumbnail Asset */}
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded-xl bg-amber-100/60 flex-shrink-0 border border-amber-900/10" 
                        />
                        
                        {/* Item Label Identity Metadata */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">{item.name}</h3>
                            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} title={item.type}/>
                          </div>
                          <p className="text-xs font-semibold text-amber-800 mt-0.5">{item.price} each</p>
                        </div>

                        {/* Interactive Dynamic Item Incrementer Core Counter */}
                        <div className="flex items-center border border-amber-900/20 bg-amber-50/50 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQty(idx, -1)}
                            className="p-1.5 hover:bg-amber-100 text-amber-900 transition"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <span className="px-3 font-bold text-sm text-amber-950 w-8 text-center">{item.qty}</span>
                          <button 
                            onClick={() => updateQty(idx, 1)}
                            className="p-1.5 hover:bg-amber-100 text-amber-900 transition"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Extended Calculation Subtotal Field Block */}
                        <div className="text-right min-w-[70px]">
                          <span className="font-bold text-slate-900">{(parsePrice(item.price) * item.qty)}/-</span>
                        </div>

                        {/* Mutation Action Delete Node Trigger */}
                        <button 
                          onClick={() => removeItem(idx)}
                          className="text-slate-400 hover:text-red-600 p-1 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>

              {/* Free Delivery Progression Status Component Banner */}
              {subtotal < 500 && (
                <div className="bg-amber-100 border border-amber-200 p-4 rounded-xl text-xs sm:text-sm text-amber-950 flex items-center justify-between">
                  <span>Add <strong>{(500 - subtotal)}/-</strong> more to unlock <strong>Free Delivery!</strong></span>
                  <span className="font-bold text-amber-900">Threshold: 500/-</span>
                </div>
              )}
            </div>

            {/* Right Content Column Block: Invoicing & Payment Layout Form */}
            <div className="space-y-6">
              
              {/* Delivery Node Address Metadata Card */}
              <div className="bg-white p-5 rounded-2xl border border-amber-900/10 shadow-sm">
                <h3 className="font-bold text-amber-950 mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Truck className="w-4 h-4 text-amber-800" /> Delivery Target Point
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 space-y-1 bg-amber-50/40 p-3 rounded-xl border border-amber-900/5">
                  <p className="font-bold text-slate-900">Your Main Table / Address</p>
                  <p className="text-slate-500">Table 4, Floor 1 (Dine-in Session)</p>
                </div>
              </div>

              {/* Payment Execution Selector Input Context Module */}
              <div className="bg-white p-5 rounded-2xl border border-amber-900/10 shadow-sm">
                <h3 className="font-bold text-amber-950 mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <CreditCard className="w-4 h-4 text-amber-800" /> Settlement Processor
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <label className="border-2 border-amber-600 bg-amber-50/30 p-2.5 rounded-xl flex flex-col items-center gap-1 cursor-pointer">
                    <span className="text-amber-950">Pay via UPI</span>
                  </label>
                  <label className="border border-slate-200 hover:border-amber-600 p-2.5 rounded-xl flex flex-col items-center gap-1 cursor-pointer transition">
                    <span className="text-slate-600">Pay Counter Cash</span>
                  </label>
                </div>
              </div>

              {/* Precise Financial Aggregation Ledger Card */}
              <div className="bg-white p-5 rounded-2xl border border-amber-900/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900" />
                <h3 className="font-bold text-amber-950 mb-4 text-sm sm:text-base">Order Receipt Invoice</h3>
                
                <div className="space-y-3 text-xs sm:text-sm border-b border-dashed border-amber-900/20 pb-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Dishes Subtotal</span>
                    <span className="font-medium">{subtotal}/-</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Restaurant GST (5%)</span>
                    <span className="font-medium">{gstTax.toFixed(2)}/-</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery/Service Fee</span>
                    <span className="font-medium">
                      {deliveryCharge === 0 ? <span className="text-green-600 font-bold">FREE</span> : `${deliveryCharge}/-`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center font-extrabold text-base sm:text-lg text-slate-900 pt-4">
                  <span className="text-amber-950">Grand Total</span>
                  <span className="text-amber-900 bg-amber-100 px-3 py-1 rounded-xl">{grandTotal.toFixed(2)}/-</span>
                </div>

                {/* Main Interactive Call-To-Action Process Form Submit Button Node */}
                <button className="w-full mt-5 bg-amber-800 hover:bg-amber-900 text-white py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg transform active:scale-[0.99]">
                  Place & Authenticate Order
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart
