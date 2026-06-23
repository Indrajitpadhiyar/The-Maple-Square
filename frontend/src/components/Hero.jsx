import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Building2, Gem, ShieldCheck } from 'lucide-react';

const banners = [
  'https://themaplesquare.in/images/banner-1.jpg',
  'https://themaplesquare.in/images/banner-2.jpg',
  'https://themaplesquare.in/images/banner-3.jpg',
  'https://themaplesquare.in/images/banner-4.jpg'
];

const badges = [
  { icon: Building2, label: 'Modern Design' },
  { icon: Gem, label: 'Luxury' },
  { icon: ShieldCheck, label: 'Trusted Builder' }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoplay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (idx) => {
    setCurrentIndex(idx);
    startAutoplay();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    startAutoplay();
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    startAutoplay();
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={banners[currentIndex]}
            alt={`Luxury Property View ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-primary/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

      {/* Gold Atmospheric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gold/[0.06] blur-[120px] rounded-full" />

      {/* Main Content Grid */}
      <div className="relative z-10 h-full flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/[0.08] border border-gold/20 text-gold text-[11px] tracking-[0.2em] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Transforming the future of living
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-serif font-bold leading-[0.95] mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/90">
                THE
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[120px] gold-gradient-text mt-1">
                MAPLE
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/90 mt-1">
                SQUARE
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-offwhite/60 text-base sm:text-lg font-light max-w-lg mb-8 leading-relaxed"
          >
            Start your journey towards exceptional living today.
            Premium commercial & residential spaces in the heart of the city.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-gold px-8 py-4 rounded-full text-[12px] sm:text-[13px] tracking-[0.15em] flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#gallery"
              className="btn-outline-gold px-8 py-4 rounded-full text-[12px] sm:text-[13px] tracking-[0.15em]"
            >
              Explore
            </a>
          </motion.div>
        </div>

        {/* Right Side — Badges (Desktop) */}
        <div className="hidden lg:flex flex-col items-end justify-center pr-16 gap-4">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + idx * 0.15 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card-gold hover:bg-gold/[0.08] transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <badge.icon size={18} className="text-gold" />
              </div>
              <span className="text-offwhite/80 text-sm tracking-wider font-medium group-hover:text-offwhite transition-colors duration-300">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pb-8">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="group relative"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`h-[3px] rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-10 bg-gold'
                      : 'w-4 bg-white/20 group-hover:bg-white/40'
                  }`} />
                </button>
              ))}
              <span className="text-white/30 text-xs tracking-wider font-medium ml-4">
                {String(currentIndex + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
              </span>
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
