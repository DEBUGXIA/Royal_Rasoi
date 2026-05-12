import { Calendar, Clock, Users } from "lucide-react";

export default function BookingPage() {
  return (
    <div className=" text-white px-6 py-12">

    
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent tracking-wide"> Book a Table</h1>
        <p className="text-gray-300 mt-3"> Turn this holy day into beautiful family memories with us.</p>
      </div>

      
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-lg border border-white/10">

        <form className="grid md:grid-cols-2 gap-6">

          
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]"/>
          </div>

          
          <div>
            <label className="text-sm text-gray-300">Phone Number</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]"/>
          </div>

          
          <div className="relative">
            <label className="text-sm text-gray-300">Date</label>
            <Calendar className="absolute right-4 top-11 text-[#e6c77e]" />
            <input type="date" className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]"/>
          </div>

          
          <div className="relative">
            <label className="text-sm text-gray-300">Time</label>
            <Clock className="absolute right-4 top-11 text-[#e6c77e]" />
            <input type="time" className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]" />
          </div>

          
          <div className="relative">
            <label className="text-sm text-gray-300">Guests</label>
            <Users className="absolute right-4 top-11 text-[#e6c77e]" />
            <select className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5+ People</option>
            </select>
          </div>

          
          <div>
            <label className="text-sm text-gray-300">Occasion</label>
            <select className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]">
              <option>Casual Dining</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meeting</option>
            </select>
          </div>

        
          <div className="md:col-span-2">
            <label className="text-sm text-gray-300">Special Request</label>
            <textarea rows="4" placeholder="Any special arrangements..." className="w-full mt-2 px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e]"/>
          </div>

          
          <div className="md:col-span-2 flex items-center justify-center">
            <button type="submit" className="w-100 py-3 rounded-lg bg-gradient-to-r from-[#e6c77e] to-[#c2a96a] text-black font-semibold hover:opacity-90 transition duration-300 shadow-md">
              Confirm Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}