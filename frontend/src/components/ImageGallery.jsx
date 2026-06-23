import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const images = [
  'https://themaplesquare.in/images/banner-5.jpg',
  'https://themaplesquare.in/images/banner-6.jpg',
  'https://themaplesquare.in/images/banner-7.jpg',
  'https://themaplesquare.in/images/banner-8.jpg'
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
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

      <div className="py-28 bg-surface-alt relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gold/[0.03] blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/[0.06] border border-gold/15 text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6"
              >
                <Images size={14} />
                <span>A Glimpse of Perfection</span>
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
              >
                Visual <span className="gold-gradient-text italic">Gallery</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted text-sm max-w-sm leading-relaxed"
            >
              Explore the exquisite spaces and premium finishes that define The Maple Square experience.
            </motion.p>
          </div>

          {/* Gallery Grid — Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {images.map((src, idx) => {
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
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spanClasses[idx % spanClasses.length]}`}
                >
                  <img
                    src={src}
                    alt={`The Maple Square Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full border-2 border-gold/50 flex items-center justify-center mb-4 scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn className="text-gold" size={22} />
                    </div>
                    <span className="text-offwhite text-[12px] tracking-[0.2em] uppercase font-semibold">
                      View Full
                    </span>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-gold/80 text-[10px] tracking-wider uppercase font-medium">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/20 transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all z-50"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev + 1) % images.length);
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIndex}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                src={images[selectedIndex]}
                alt="Enlarged Gallery Image"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl select-none"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(idx);
                  }}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    idx === selectedIndex ? 'w-8 bg-gold' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-divider" />
    </section>
  );
}
