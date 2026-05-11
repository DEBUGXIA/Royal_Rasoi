import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-scree text-white px-6 py-12">
      
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-300 mt-3">
          We'd love to hear from you — Reach out anytime
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10">
          <h2 className="text-2xl font-semibold text-[#e6c77e] mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#e6c77e]" />
              <span className="text-gray-300">royalrasoi@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#e6c77e]" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#e6c77e]" />
              <span className="text-gray-300">
                Kolkata, India
              </span>
            </div>
          </div>

          
          <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#e6c77e] to-transparent" />

          <p className="text-gray-400 mt-6 text-sm">
            Open daily: 10 AM – 11 PM
          </p>
        </div>

      
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10">
          <h2 className="text-2xl font-semibold text-[#e6c77e] mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e] text-white"/>

            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e] text-white"/>

            <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:outline-none focus:border-[#e6c77e] text-white"/>

            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#e6c77e] to-[#c2a96a] text-black font-semibold hover:opacity-90 transition duration-300 shadow-md">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}