import React, { useState } from 'react'

const Services = () => {
  
  const [selectedService, setSelectedService] = useState(null)
  const [tableNumber, setTableNumber] = useState('')

  const serviceList = [
    {
      id: 1,
      pic: "/Water.png",
      title: "Water Supply",
      desc: "Request premium mineral water, sparkling water, or ice refills instantly."
    },
    {
      id: 2,
      pic: "/Clean.png", 
      title: "Clean Service",
      desc: "Quick table clearing, spill cleanup, or sanitization request for your area."
    },
    {
      id: 3,
      pic: "/Call.png", 
      title: "Call Waiter",
      desc: "Summon a server immediately to your table to take new orders or print bills."
    }
  ]

  
  const closePopup = () => {
    setSelectedService(null)
    setTableNumber('')
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!tableNumber.trim()) return
    
    alert(`Request sent! Service: ${selectedService.title} | Table: ${tableNumber}`)
    closePopup()
  }

  return (
    <div className='py-10 px-4 max-w-6xl mx-auto relative min-h-screen'>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent tracking-wide">Guest Services</h1>
        <p className="text-gray-300 mt-3">Tap an option below to request immediate assistance</p>
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {serviceList.map((service) => (
          <div key={service.id} className='flex flex-row w-full rounded-xl bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group'>
            <div className='w-full h-48 overflow-hidden'>
              <img src={service.pic} alt={service.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'/>
            </div>
            
            <div className='p-6 flex flex-col flex-grow justify-between'>
              <div>
                <h3 className='text-xl font-semibold text-white mb-2'>{service.title}</h3>
                <p className='text-nevtext text-sm leading-relaxed'>{service.desc}</p>
              </div>
              
              <button onClick={() => setSelectedService(service)}className='mt-6 w-full py-2.5 px-4 bg-gradient-to-r from-muttonTop to-muttonDown text-white font-medium text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity'> Request Now</button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          
          <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-bold text-white mb-1">Confirm Request</h2>
            <p className="text-sm text-gray-400 mb-6"> You are requesting: <span className="text-white font-medium">{selectedService.title}</span></p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="table-num" className="block text-sm font-medium text-gray-300 mb-2"> Enter Your Table Number</label>
                <input id="table-num" type="text" required placeholder="Enter Your Table Number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-muttonTop text-lg transition-colors" autoFocus/>
              </div>

        
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closePopup} className="w-1/2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-colors text-sm">Cancel</button>
                <button type="submit" className="w-1/2 py-3 px-4 rounded-xl bg-gradient-to-r from-muttonTop to-muttonDown text-white font-medium hover:opacity-90 transition-opacity text-sm shadow-md shadow-muttonTop/20">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
