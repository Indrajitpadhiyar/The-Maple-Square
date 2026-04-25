import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary pt-24 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <img 
              src="https://themaplesquare.in/images/the-maple-square-logo.png" 
              alt="The Maple Square Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-offwhite/70 text-sm leading-relaxed mb-6">
              The Maple Square defines luxury living. Elevate your lifestyle with our premium residences and state-of-the-art amenities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-bold text-xs uppercase">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-bold text-xs uppercase">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-bold text-xs uppercase">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Layout', 'Floor Plans', 'Amenities', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-offwhite/70 hover:text-gold transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-offwhite/70 text-sm">
                  123 Maple Avenue, Elite District, Premium City 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                <span className="text-offwhite/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                <span className="text-offwhite/70 text-sm">info@themaplesquare.in</span>
              </li>
            </ul>
          </div>

          {/* Inquiry Form */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Inquiry</h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full bg-gold text-primary font-bold uppercase tracking-widest text-sm py-3 hover:bg-gold-hover transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-offwhite/50 text-sm">
            &copy; {new Date().getFullYear()} The Maple Square. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
