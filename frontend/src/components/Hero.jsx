import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  'https://themaplesquare.in/images/banner-1.jpg',
  'https://themaplesquare.in/images/banner-2.jpg',
  'https://themaplesquare.in/images/banner-3.jpg',
  'https://themaplesquare.in/images/banner-4.jpg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={banners[currentIndex]}
          alt={`Luxury Property View ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://themaplesquare.in/images/the-maple-square-logo.png"
            alt="The Maple Square"
            className="w-32 md:w-48 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          <span className="text-gold">Prime.</span> Prestigious. <span className="italic font-light">Profitable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-2xl text-offwhite/90 font-light mb-10 max-w-2xl mx-auto"
        >
          Experience uncompromised luxury and strategic location at The Maple Square.
          Your gateway to a premium lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-primary font-semibold text-sm tracking-widest uppercase hover:bg-gold-hover transition-all duration-300"
          >
            Schedule a Visit
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-gold text-gold font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-primary transition-all duration-300"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
