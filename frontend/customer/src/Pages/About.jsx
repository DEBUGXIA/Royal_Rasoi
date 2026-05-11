import React from 'react'

const About = () => {
  return (
     <div className=" text-white px-6 py-12">

      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent tracking-wide">About Royal Rasoi</h1>
        <p className="text-gray-300 mt-4 leading-relaxed">Where tradition meets luxury dining. At Royal Rasoi, we don’t just serve food — we craft experiences that stay with you long after the last bite.</p>
      </div>

     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10">
          <h2 className="text-2xl font-semibold text-[#e6c77e] mb-4"> Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Inspired by the richness of Indian heritage and royal kitchens, Royal Rasoi 
            was founded to bring authentic flavors into a modern, elegant setting. 
            Every dish reflects passion, tradition, and a touch of luxury.
          </p>
        </div>

      
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="restaurant" className="w-full h-full object-cover"/>
        </div>

      </div>

      
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center border border-white/10">
          <h3 className="text-xl font-semibold text-[#e6c77e] mb-2">Authentic Taste</h3>
          <p className="text-gray-400 text-sm"> Traditional recipes crafted with premium ingredients.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center border border-white/10">
          <h3 className="text-xl font-semibold text-[#e6c77e] mb-2">Luxury Ambience</h3>
          <p className="text-gray-400 text-sm"> Experience dining in a royal and elegant environment.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center border border-white/10">
          <h3 className="text-xl font-semibold text-[#e6c77e] mb-2">Exceptional Service</h3>
          <p className="text-gray-400 text-sm"> Hospitality that makes every visit unforgettable.</p>
        </div>

      </div>

      {/* Footer Quote */}
      <div className="text-center mt-20">
        <p className="text-[#e6c77e] italic text-lg"> "Dining is not just eating — it’s an experience."</p>
      </div>
</div>
  )
}

export default About