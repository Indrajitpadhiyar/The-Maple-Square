import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Images, ArrowRight, Phone, MessageSquare } from 'lucide-react';

const projectDetails = [
  {
    title: "Premium Showrooms & Retail",
    category: "Retail Spaces",
    shortDesc: "High-visibility double-height commercial showrooms designed for luxury brands.",
    image: "https://themaplesquare.in/images/banner-5.jpg",
    specs: [
      { label: "Floor Level", value: "Ground & First Floor" },
      { label: "Ceiling Height", value: "14 Feet (Double Height)" },
      { label: "Ideal For", value: "Flagship Stores, Luxury Boutiques, Cafes" },
      { label: "Security Level", value: "24/7 CCTV & Multi-Tier Screening" },
      { label: "Footfall View", value: "Direct street-front promenade access" }
    ],
    fullDesc: "Designed to offer maximum brand visibility, these premium commercial showrooms feature extensive floor-to-ceiling glass frontages, expansive modular layouts, and direct street access. Perfect for flagship retail outlets, upscale restaurants, and elite lifestyle brands looking to establish a prestigious footprint in a high-density, luxury zone."
  },
  {
    title: "Elite Corporate Suites",
    category: "Office Suites",
    shortDesc: "State-of-the-art office environments optimizing productivity and corporate stature.",
    image: "https://themaplesquare.in/images/banner-6.jpg",
    specs: [
      { label: "Floor Level", value: "Second & Third Floor" },
      { label: "Configuration", value: "Flexible Open-Plan Office Suites" },
      { label: "Ideal For", value: "IT Firms, Corporate Headquarters, Agencies" },
      { label: "Air Circulation", value: "Centralized VRV climate control" },
      { label: "Connectivity", value: "Gigabit-grade fiber pre-installed" }
    ],
    fullDesc: "Elevate your enterprise presence with our meticulously configured corporate suites. Featuring abundant natural light filtration, advanced acoustic dampening insulation, and robust uninterruptible power systems, these office spaces are engineered to inspire collaboration, drive productivity, and impress visiting clients."
  },
  {
    title: "Luxury Duplex Residences",
    category: "Elite Housing",
    shortDesc: "Sophisticated multi-level residences combining privacy with premium comfort.",
    image: "https://themaplesquare.in/images/banner-7.jpg",
    specs: [
      { label: "Floor Level", value: "Fourth & Fifth Floor" },
      { label: "BHK Plan", value: "4 BHK Spacious Luxury Duplexes" },
      { label: "Ideal For", value: "Premium family lifestyle, executives" },
      { label: "Sky Balcony", value: "Extensive panoramic sunset deck" },
      { label: "Home Automation", value: "Smart security & light control ready" }
    ],
    fullDesc: "Redefining premium family living, these duplex residences boast sprawling double-height living rooms, premium imported Italian marble tiling, and modular European kitchens with premium fittings. Each duplex offers isolated master wings and panoramic terrace views overlooking the city's elite districts."
  },
  {
    title: "The Sky Penthouse Suite",
    category: "Rooftop Luxury",
    shortDesc: "An exclusive top-floor villa with bespoke finishes and 360-degree vistas.",
    image: "https://themaplesquare.in/images/banner-8.jpg",
    specs: [
      { label: "Floor Level", value: "Sixth Floor (Top Level)" },
      { label: "BHK Plan", value: "5 BHK Bespoke Sky Penthouse" },
      { label: "Bespoke Amenity", value: "Private infinity plunge pool & deck" },
      { label: "Elevator Access", value: "Direct elevator entry card security" },
      { label: "Acoustic Seal", value: "Fully soundproofed glass pane windows" }
    ],
    fullDesc: "The ultimate crown jewel of The Maple Square. Spanning the entire top floor, the Sky Penthouse features a private rooftop terrace, customized bar deck, and floor-to-ceiling glass panel walls offering uninhibited 360-degree views of the city. Perfect for individuals seeking unmatched prestige and bespoke architectural elegance."
  }
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % projectDetails.length);
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev - 1 + projectDetails.length) % projectDetails.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <section id="gallery" className="relative overflow-hidden">
      <div className="section-divider" />

      <div className="py-28 bg-[#F4F4F4] relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#FFB800]/[0.03] blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/10 text-black/85 text-[11px] tracking-[0.2em] uppercase font-bold mb-6 font-sans"
              >
                <Images size={14} />
                <span>A Glimpse of Perfection</span>
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-syne text-black leading-tight"
              >
                Visual <span className="gold-gradient-text italic font-serif">Gallery</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-zinc-600 text-sm max-w-sm leading-relaxed"
            >
              Explore the exquisite spaces and premium finishes that define The Maple Square experience. Click a card to view detailed specifications.
            </motion.p>
          </div>

          {/* Gallery Grid — Bento Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {projectDetails.map((project, idx) => {
              // Bento layout: first image is large spanning 7 cols, second 5 cols, third 5 cols, fourth 7 cols
              const spanClasses = [
                'md:col-span-7 aspect-[16/10]',
                'md:col-span-5 aspect-[4/3]',
                'md:col-span-5 aspect-[4/3]',
                'md:col-span-7 aspect-[16/10]',
              ];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5 ${spanClasses[idx % spanClasses.length]}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    {/* Top Tag & Index */}
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[#FFB800] text-[9px] uppercase tracking-wider font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                        {project.category}
                      </span>
                      <span className="text-white/40 text-[10px] tracking-wider uppercase font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div>
                      <h3 className="text-white font-serif text-lg md:text-xl font-bold mb-1 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-xs line-clamp-2 max-w-sm mb-3">
                        {project.shortDesc}
                      </p>
                      
                      {/* Call-to-action button indicator */}
                      <span className="inline-flex items-center gap-1 text-[#FFB800] text-[10px] tracking-widest uppercase font-bold group-hover:text-white transition-colors duration-300">
                        <span>Explore Space</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Gold border draw overlay on hover */}
                  <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-[#FFB800]/25 transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Luxury Split-Screen Detailed Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0F0F0F] border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] overflow-hidden flex flex-col md:flex-row relative shadow-2xl z-50 font-sans text-zinc-300"
            >
              {/* Close Button on Desktop */}
              <button
                className="absolute top-5 right-5 hidden md:flex w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer z-50"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Left Side: Dynamic Image Area */}
              <div className="md:w-1/2 relative bg-black flex items-center justify-center h-[300px] md:h-auto overflow-hidden">
                <img
                  src={projectDetails[selectedIndex].image}
                  alt={projectDetails[selectedIndex].title}
                  className="w-full h-full object-cover select-none"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {/* Left/Right controls (Inside image block) */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] transition-all cursor-pointer z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev - 1 + projectDetails.length) % projectDetails.length);
                  }}
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] transition-all cursor-pointer z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev + 1) % projectDetails.length);
                  }}
                  aria-label="Next Image"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Close Button on Mobile Overlay */}
                <button
                  className="absolute top-4 right-4 md:hidden w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white"
                  onClick={() => setSelectedIndex(null)}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Right Side: Detailed Brochure Details */}
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-[85vh]">
                <div>
                  {/* Category Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB800]/[0.05] border border-[#FFB800]/20 text-[#FFB800] text-[9px] uppercase tracking-wider font-bold mb-3 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                    {projectDetails[selectedIndex].category}
                  </span>

                  {/* Main Title */}
                  <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                    {projectDetails[selectedIndex].title}
                  </h3>

                  {/* Detailed Brochure Text */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {projectDetails[selectedIndex].fullDesc}
                  </p>

                  {/* Technical Specifications Area */}
                  <div className="mb-6">
                    <h4 className="text-white text-[10px] tracking-widest uppercase font-bold font-syne mb-2 pb-1.5 border-b border-white/5">
                      Technical Specifications
                    </h4>
                    <div className="divide-y divide-white/[0.04]">
                      {projectDetails[selectedIndex].specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex justify-between py-2.5 text-xs">
                          <span className="text-zinc-500">{spec.label}</span>
                          <span className="text-zinc-300 font-semibold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Inquiry Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20The%20Maple%20Square%20-%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-[9px] tracking-[0.15em] font-bold uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_12px_rgba(37,211,102,0.15)]"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 py-3 border border-white/20 hover:border-[#FFB800] hover:text-[#FFB800] text-white rounded-xl text-[9px] tracking-[0.15em] font-bold uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone size={12} />
                    <span>Call Concierge</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-divider" />
    </section>
  );
}
