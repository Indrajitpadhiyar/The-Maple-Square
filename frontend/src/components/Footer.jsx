import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#layout' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { label: 'FB', name: 'Facebook' },
  { label: 'IG', name: 'Instagram' },
  { label: 'YT', name: 'YouTube' }
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top CTA Band */}
      <div className="relative bg-surface py-20 overflow-hidden">
        {/* Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/[0.05] blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/[0.06] border border-gold/15 text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Ready to Invest?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
          >
            Let's Build Your
            <br />
            <span className="gold-gradient-text italic">Future Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-muted text-base max-w-lg mx-auto mb-10"
          >
            Schedule a visit or reach out to our team for personalized guidance on securing your premium space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+919876543210"
              className="btn-gold px-8 py-4 rounded-full text-[12px] tracking-[0.15em] flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:info@themaplesquare.in"
              className="btn-outline-gold px-8 py-4 rounded-full text-[12px] tracking-[0.15em] flex items-center justify-center gap-2"
            >
              <Mail size={14} />
              <span>Email Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Main Footer */}
      <div className="bg-primary pt-16 pb-8 relative">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.02] blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://themaplesquare.in/images/the-maple-square-logo.png"
                  alt="The Maple Square Logo"
                  className="h-12 w-auto mix-blend-screen"
                />
                <div className="flex flex-col leading-none">
                  <span className="gold-gradient-text font-serif text-lg font-bold tracking-[0.15em] uppercase">
                    The Maple
                  </span>
                  <span className="text-muted text-[9px] uppercase tracking-[0.5em] mt-0.5 ml-0.5">
                    Square
                  </span>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs">
                The Maple Square defines luxury living. Elevate your lifestyle with our premium residences and state-of-the-art amenities.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-muted hover:text-gold hover:bg-gold/[0.08] hover:border-gold/30 transition-all duration-300 text-xs font-bold tracking-wide"
                    aria-label={social.name}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold rounded-full" />
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-gold/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/[0.15] transition-colors">
                    <MapPin className="text-gold" size={16} />
                  </div>
                  <span className="text-muted text-sm leading-relaxed">
                    123 Maple Avenue, Elite District, Premium City 400001
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-gold/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.15] transition-colors">
                    <Phone className="text-gold" size={16} />
                  </div>
                  <span className="text-muted text-sm">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-gold/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.15] transition-colors">
                    <Mail className="text-gold" size={16} />
                  </div>
                  <span className="text-muted text-sm">info@themaplesquare.in</span>
                </li>
              </ul>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold rounded-full" />
                Quick Inquiry
              </h4>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-xl text-[12px] tracking-[0.15em] flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Submit Request</span>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted/50 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} The Maple Square. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted/40 tracking-wider">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
