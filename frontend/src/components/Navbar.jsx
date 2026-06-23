import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#layout' },
  { name: 'Floor Plans', href: '#floor-plans' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id], footer[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'bg-primary/80 backdrop-blur-xl border border-white/[0.06] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] mx-4 sm:mx-6 lg:mx-auto px-6' : ''
        } transition-all duration-500`}>
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src="https://themaplesquare.in/images/the-maple-square-logo.png"
                  alt="The Maple Square Logo"
                  className="h-10 w-auto relative mix-blend-screen brightness-110 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="gold-gradient-text font-serif text-lg md:text-xl font-bold tracking-[0.15em] uppercase">
                  The Maple
                </span>
                <span className="text-muted font-sans text-[9px] uppercase tracking-[0.5em] mt-0.5 ml-0.5">
                  Square
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-[13px] tracking-[0.12em] uppercase font-medium transition-all duration-300 group"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive ? 'text-gold' : 'text-offwhite/70 group-hover:text-offwhite'
                    }`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="btn-gold px-6 py-2.5 rounded-full text-[12px] tracking-[0.15em] flex items-center gap-2"
              >
                <span>Inquire Now</span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light transition-colors"
                aria-label="Toggle Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-surface/95 backdrop-blur-2xl z-50 border-l border-white/[0.06] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                  <span className="gold-gradient-text font-serif text-lg font-bold tracking-widest uppercase">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 px-6 py-8 space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06, duration: 0.4 }}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-gold bg-gold/[0.06]'
                          : 'text-offwhite/70 hover:text-offwhite hover:bg-white/[0.03]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="opacity-40" />
                    </motion.a>
                  ))}
                </div>

                {/* Drawer Footer */}
                <div className="px-6 py-6 border-t border-white/[0.06]">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-gold w-full py-4 rounded-xl text-sm tracking-[0.15em] flex items-center justify-center gap-2"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
