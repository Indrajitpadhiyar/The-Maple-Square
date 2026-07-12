import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Clock,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Residences", href: "#layout" },
  { label: "Amenities", href: "#floor-plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "FB", name: "Facebook", href: "#" },
  { label: "IG", name: "Instagram", href: "#" },
  { label: "YT", name: "YouTube", href: "#" },
];

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 2c-5.516 0-9.99 4.474-9.99 9.99 0 2.028.608 3.912 1.65 5.485L2 22l4.673-1.529c1.51.986 3.307 1.558 5.239 1.558 5.516 0 10.029-4.474 10.029-9.99C21.94 6.474 17.547 2 12.031 2zm6.275 14.28c-.255.718-1.5 1.398-2.073 1.488-.512.08-1.18.148-1.89-.098-.44-.153-.996-.347-1.748-.67-3.197-1.373-5.263-4.63-5.422-4.842-.16-.212-1.285-1.716-1.285-3.28 0-1.564.815-2.33 1.107-2.637.292-.308.64-.383.856-.383.216 0 .433.003.62.01.19.008.44-.074.69.53.254.618.874 2.13.95 2.285.076.155.127.336.025.542-.1.206-.153.33-.305.51-.153.18-.32.378-.456.505-.152.14-.312.293-.135.597.177.304.788 1.3 1.696 2.107.973.865 1.79 1.135 2.093 1.287.303.153.48.127.658-.077.178-.206.762-.888.966-1.196.204-.308.407-.257.687-.154.28.103 1.777.838 2.082.993.305.155.508.232.584.36.076.13.076.753-.18 1.47z" />
  </svg>
);

export default function Footer() {
  const [localTime, setLocalTime] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [loungeOpen, setLoungeOpen] = useState(true);
  const [isWaHovered, setIsWaHovered] = useState(false);

  // India local time clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // India Sales Lounge status checker
  useEffect(() => {
    const checkLoungeStatus = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const hour = parseInt(formatter.format(new Date()), 10);
      setLoungeOpen(hour >= 9 && hour < 20); // Open between 9:00 AM and 8:00 PM
    };
    checkLoungeStatus();
    const statusInterval = setInterval(checkLoungeStatus, 60000);
    return () => clearInterval(statusInterval);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowScrollBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0A0A0A] text-zinc-300 font-sans border-t border-white/[0.03]"
    >
      {/* Decorative Radial Gold Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/[0.015] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB800]/[0.015] blur-[180px] rounded-full pointer-events-none" />

      {/* Decorative Fine-Line Grid (Luxury Branding Motif) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />
        <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />
      </div>

      {/* Top CTA Band (Compact & Immersive) */}
      <div className="relative py-16 overflow-hidden border-b border-white/[0.04] z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/[0.05] border border-[#FFB800]/20 text-[#FFB800] text-[9px] tracking-[0.25em] uppercase font-bold mb-4 font-sans"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
            Ready to Invest?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.2] mb-4"
          >
            Let's Build Your <br />
            <span className="bg-gradient-to-r from-white via-[#FFE89C] to-[#FFB800] bg-clip-text text-transparent font-serif italic">
              Future Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto mb-8 leading-relaxed"
          >
            Schedule a private viewing session or reach out directly to our
            investment advisory team to secure your premium space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row gap-3 justify-center items-center"
          >
            <a
              href="tel:+919876543210"
              className="group relative px-6 py-3 rounded-full overflow-hidden bg-white text-black font-sans font-bold text-[9px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#FFB800] hover:text-black hover:shadow-[0_8px_24px_rgba(255,184,0,0.2)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone
                size={11}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span>Schedule Tour</span>
            </a>
            <a
              href="mailto:info@themaplesquare.in"
              className="group px-6 py-3 rounded-full border border-white/20 bg-transparent text-white font-sans font-bold text-[9px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#FFB800] hover:text-[#FFB800] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Mail
                size={11}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span>Email Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Info Section (Tighter 3-column layout) */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            {/* Brand Column (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src="https://themaplesquare.in/images/the-maple-square-logo.png"
                    alt="The Maple Square Logo"
                    className="h-10 w-auto mix-blend-screen"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-serif text-base font-bold tracking-[0.15em] uppercase">
                      The Maple
                    </span>
                    <span className="text-zinc-500 text-[8px] uppercase tracking-[0.5em] mt-0.5 ml-0.5">
                      Square
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                  The Maple Square represents the pinnacle of luxury
                  architecture. Designed for the discerning elite, our premium
                  residences and corporate suites merge master craftsmanship
                  with strategic centrality.
                </p>
              </div>

              {/* Social Links with fluid hover background rise */}
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black transition-all duration-500 overflow-hidden"
                    aria-label={social.name}
                  >
                    <span className="absolute inset-0 bg-[#FFB800] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="relative z-10 text-[9px] font-bold tracking-wide transition-colors duration-500 group-hover:text-black">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column (lg:col-span-3 lg:col-start-7) */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-white font-syne text-[10px] uppercase tracking-[0.25em] mb-5 flex items-center gap-1.5">
                <span className="w-1.5 h-2.5 bg-[#FFB800] rounded-full" />
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group text-zinc-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1"
                    >
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFB800] flex-shrink-0"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-syne text-[10px] uppercase tracking-[0.25em] mb-5 flex items-center gap-1.5">
                <span className="w-1.5 h-2.5 bg-[#FFB800] rounded-full" />
                Get in Touch
              </h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="text-[#FFB800]" size={12} />
                  </div>
                  <div>
                    <a
                      href="https://maps.google.com/?q=The+Maple+Square+Bharuch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-[#FFB800] transition-colors text-xs sm:text-sm leading-relaxed"
                    >
                      The Maple Square, Tavra-Shuklatirth Road, near Narmada College, Tavra, Bharuch, Gujarat 392011
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#FFB800]" size={12} />
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-zinc-400 hover:text-[#FFB800] transition-colors text-xs sm:text-sm"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#FFB800]" size={12} />
                  </div>
                  <a
                    href="mailto:info@themaplesquare.in"
                    className="text-zinc-400 hover:text-[#FFB800] transition-colors text-xs sm:text-sm"
                  >
                    info@themaplesquare.in
                  </a>
                </li>
                <li className="flex items-start gap-2.5 pt-3.5 border-t border-white/[0.04]">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="text-[#FFB800]" size={12} />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[8px] block uppercase tracking-wider font-semibold">
                      Sales Lounge
                    </span>
                    <span className="text-zinc-400 text-xs sm:text-sm">
                      Open Daily: 9:00 AM — 8:00 PM
                    </span>

                    {/* Live status badge */}
                    <div className="flex items-center gap-1.5 mt-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${loungeOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
                      />
                      <span className="text-zinc-500 text-[10px] uppercase font-sans tracking-wider font-bold">
                        {loungeOpen ? "Open Now" : "Closed"}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 relative">
            {/* Elegant Background Watermark (Watermark Motif) */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-sans font-black text-[9vw] tracking-[0.2em] text-white/[0.012] select-none pointer-events-none uppercase z-0">
              MAPLE
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left relative z-10">
              <p className="text-zinc-500 text-xs tracking-wider">
                &copy; {new Date().getFullYear()} The Maple Square. All rights
                reserved.
              </p>

              {/* India Local Time Indicator */}
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>New Delhi, IN: {localTime || "12:00:00 PM"}</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs text-zinc-500 tracking-wider relative z-10">
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Real estate regulatory disclaimer */}
        </div>
      </div>

      {/* Floating Scroll-to-Top circular progress button (Moved up to bottom-24) */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-40 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FFB800] hover:text-white transition-colors duration-300 shadow-lg group hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Back to Top"
          >
            {/* SVG Circular Progress tracker */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2.5"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#FFB800"
                strokeWidth="2.5"
                fill="transparent"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                className="transition-all duration-150 ease-out"
              />
            </svg>
            <ArrowUp
              size={16}
              className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Expandable Contact Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20The%20Maple%20Square.%20Could%20you%20please%20provide%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsWaHovered(true)}
        onMouseLeave={() => setIsWaHovered(false)}
        className="fixed bottom-8 right-8 z-40 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
        animate={{ width: isWaHovered ? 160 : 48 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="absolute left-3.5 flex items-center justify-center">
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {isWaHovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.1 }}
              className="pl-9 pr-4 font-sans font-bold text-[10px] tracking-[0.15em] uppercase text-white whitespace-nowrap"
            >
              Chat with us
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </footer>
  );
}
