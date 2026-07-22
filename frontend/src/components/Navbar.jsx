import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Residences", href: "#layout" },
  { name: "Amenities", href: "#floor-plans" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const MapleLeafIcon = () => (
  <svg
    className="w-5 h-5 text-[#FFB800] fill-current transition-transform duration-500 hover:rotate-12"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3s-.3 1.8-.8 2.6c-.6-.4-1.3-.9-2.1-1.2.2.9.2 1.8-.1 2.6-.7-.3-1.4-.7-2.2-1 .4 1 .2 2.1-.5 2.8-.8-.2-1.6-.4-2.4-.6.6.9.7 2 .2 2.9-.8-.1-1.6-.2-2.4-.2 1 1 1.4 2.1 1 3.2-.8.1-1.6.4-2.3.8 1.4.3 2.1.9 2.5 2-.8.4-1.4 1-1.8 1.8 1.8-.2 3.1-.9 3.8-2-.4 1-.4 2.1-.2 3.2.9-.6 1.7-1.4 2.3-2.4 0 .9.2 1.8.6 2.6 1.1-1.3 1.6-2.9 1.5-4.6.4 1 .9 1.9 1.6 2.7.3-1 .2-2.1-.2-3.1.6.5 1.3 1 2.1 1.3 0-1.1-.4-2.1-1.2-2.9.7-.1 1.4-.1 2 .1-.4-1-1.2-1.8-2.2-2.2.8-.5 1.5-1.1 2-2-.8.2-1.6.5-2.3 1 .1-1.1-.3-2.1-1-2.9.8.4 1.5 1 2 1.8-.1-1.1-.7-2-1.6-2.5-.2.8-.7 1.5-1.3 2 .2-1.3.1-2.7-.4-3.9z" />
    <path d="M12.5 16.5v5.5a.5.5 0 01-1 0v-5.5a.5.5 0 011 0z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      { rootMargin: "-30% 0px -70% 0px" },
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 w-full ${
          scrolled
            ? "py-3 bg-white/75 backdrop-blur-xl border-b border-black/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Left side: Luxury Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <MapleLeafIcon />
              <span className="font-serif text-[12px] sm:text-[14px] tracking-[0.3em] font-semibold text-black uppercase select-none transition-colors duration-300">
                MAPLE
              </span>
            </a>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive =
                  activeSection === sectionId ||
                  (sectionId === "layout" && activeSection === "layout");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative py-2 text-[10px] uppercase tracking-[0.2em] font-bold font-sans transition-all duration-300 group/link"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-black"
                          : "text-black/55 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot-active"
                        className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#FFB800]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right side: Private Tour Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-black/10 bg-white/40 hover:bg-black hover:text-white hover:border-black px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold transition-all duration-300 gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md"
              >
                <span>Schedule a Private Tour</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              </a>
            </div>

            {/* Mobile Menu Button toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-white/80 border border-black/[0.05] flex items-center justify-center text-black hover:bg-white transition-all shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
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
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-45"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-[280px] bg-white z-50 border-l border-black/[0.04] shadow-[0_0_50px_rgba(0,0,0,0.05)] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-black/[0.04]">
                <div className="flex items-center gap-2">
                  <MapleLeafIcon />
                  <span className="font-serif text-[11px] tracking-[0.2em] font-semibold text-black uppercase">
                    MAPLE
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white border border-black/[0.04] flex items-center justify-center text-black hover:bg-black/5 transition-all"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex-1 px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className={`flex items-center justify-between px-5 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-bold transition-all duration-200 ${
                        isActive
                          ? "text-white bg-black"
                          : "text-black/60 hover:text-black hover:bg-black/[0.03]"
                      }`}
                    >
                      <span>{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="p-6 border-t border-black/[0.04]">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#0A0A0A] hover:bg-[#222] text-white py-4 rounded-full text-[10px] tracking-[0.18em] font-bold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Schedule Tour</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
