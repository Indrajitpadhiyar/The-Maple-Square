import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, Home, Maximize2, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Scroll animations via framer-motion (Top-Level Hooks)
  const { scrollY } = useScroll();
  const yBgText = useTransform(scrollY, [0, 600], [0, -120]);
  const yBuilding = useTransform(scrollY, [0, 600], [0, -35]);
  const yReflection = useTransform(scrollY, [0, 600], [0, 15]);
  const opacityBgText = useTransform(scrollY, [0, 450], [1, 0]);
  const scaleBuilding = useTransform(scrollY, [0, 600], [1, 1.03]);

  // Loading progress animation
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [isLoading]);

  // 3D Tilt mouse interaction on building
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Focus tilt sensitivity specifically on the right half of the screen
    const x = (e.clientX - rect.left) / rect.width - 0.7; 
    const y = (e.clientY - rect.top) / rect.height - 0.5; 
    
    setTilt({
      x: -y * 8, 
      y: x * 8   
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      {/* Luxury Cinematic Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#FBFBFB] flex flex-col items-center justify-center text-[#0A0A0A] overflow-hidden"
            exit={{ 
              opacity: 0,
              y: "-100%",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            {/* Background elements in loading screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-[#F4F4F4]/40 to-white pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center max-w-md w-full px-8 text-center">
              {/* Gold Logo Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <svg className="w-10 h-10 text-[#FFB800] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3s-.3 1.8-.8 2.6c-.6-.4-1.3-.9-2.1-1.2.2.9.2 1.8-.1 2.6-.7-.3-1.4-.7-2.2-1 .4 1 .2 2.1-.5 2.8-.8-.2-1.6-.4-2.4-.6.6.9.7 2 .2 2.9-.8-.1-1.6-.2-2.4-.2 1 1 1.4 2.1 1 3.2-.8.1-1.6.4-2.3.8 1.4.3 2.1.9 2.5 2-.8.4-1.4 1-1.8 1.8 1.8-.2 3.1-.9 3.8-2-.4 1-.4 2.1-.2 3.2.9-.6 1.7-1.4 2.3-2.4 0 .9.2 1.8.6 2.6 1.1-1.3 1.6-2.9 1.5-4.6.4 1 .9 1.9 1.6 2.7.3-1 .2-2.1-.2-3.1.6.5 1.3 1 2.1 1.3 0-1.1-.4-2.1-1.2-2.9.7-.1 1.4-.1 2 .1-.4-1-1.2-1.8-2.2-2.2.8-.5 1.5-1.1 2-2-.8.2-1.6.5-2.3 1 .1-1.1-.3-2.1-1-2.9.8.4 1.5 1 2 1.8-.1-1.1-.7-2-1.6-2.5-.2.8-.7 1.5-1.3 2 .2-1.3.1-2.7-.4-3.9z" />
                  <path d="M12.5 16.5v5.5a.5.5 0 01-1 0v-5.5a.5.5 0 011 0z" />
                </svg>
              </motion.div>

              {/* Brand Reveal */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="font-serif text-sm tracking-[0.4em] font-semibold text-black uppercase mb-12"
              >
                THE MAPLE SQUARE
              </motion.h2>

              {/* Silhouette Reveal Layer */}
              <div className="relative w-48 h-32 mb-8 opacity-10 select-none pointer-events-none">
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.2 }}
                  src="/building.png" 
                  alt="silhouette" 
                  className="w-full h-full object-contain filter brightness-0"
                />
              </div>

              {/* Progress Line Bar */}
              <div className="w-48 h-[1px] bg-black/[0.08] relative rounded-full overflow-hidden mb-3">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#FFB800]"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              
              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-black/40">
                Loading Residences — {Math.min(loadingProgress, 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Luxury Hero Section */}
      <section
        id="home"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[960px] lg:h-screen w-full bg-[#0A0A0A] lg:bg-[#FBFBFB] text-white lg:text-[#0A0A0A] overflow-hidden flex flex-col justify-between pt-32 pb-12 transition-colors duration-500"
      >
        {/* Luxury Background Patterns & Soft Geometric Lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Gradients */}
          <div className="absolute top-0 right-0 w-[45%] h-[75%] bg-gradient-to-bl from-[#FFB800]/[0.025] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-[35%] h-[55%] bg-gradient-to-tr from-[#FFB800]/[0.015] via-transparent to-transparent" />
          
          {/* Vertical Fine Lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 lg:via-black/[0.04] to-transparent" />
          <div className="absolute left-[38%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 lg:via-black/[0.04] to-transparent hidden md:block" />
          <div className="absolute right-[35%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 lg:via-black/[0.04] to-transparent hidden lg:block" />
          
          {/* Horizontal Fine Lines */}
          <div className="absolute top-[28%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 lg:via-black/[0.04] to-transparent" />
          <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 lg:via-black/[0.04] to-transparent hidden md:block" />
        </div>

        {/* Ambient fade/glow effect on the left corner */}
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#FFB800]/[0.06] via-transparent to-transparent rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="absolute inset-x-0 top-[18%] sm:top-[12%] md:top-[4%] z-10 select-none pointer-events-none w-full flex justify-center">
          <motion.div 
            style={{ y: yBgText, opacity: opacityBgText }}
            className="md:translate-x-[6vw] lg:translate-x-[10vw] xl:translate-x-[12vw]"
          >
            <h1 className="font-serif font-normal leading-[0.75] tracking-[-0.04em] text-[clamp(7.5rem,23.5vw,25rem)] text-[#FFB800]/90 lg:text-[#FFB800]/80 text-center">
              Maple
            </h1>
          </motion.div>
        </div>

        {/* Core Content Area */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Left Content Area: 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-25">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Luxury Label */}
              <span className="inline-flex items-center gap-2 text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#FFB800] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                LUXURY RESIDENCES
              </span>

              {/* Main Heading */}
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.08] tracking-[-0.02em] text-white lg:text-[#0A0A0A] font-light mb-6">
                Elevating
                <br />
                Urban Living
              </h2>

              {/* Description */}
              <p className="text-white/70 lg:text-black/55 text-sm sm:text-base font-light leading-relaxed max-w-md mb-10 font-sans">
                Premium luxury residences designed for modern lifestyles with world-class amenities and architectural excellence.
              </p>

              {/* Buttons with Premium Interactions */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <a
                  href="#layout"
                  className="magnetic-btn group relative inline-flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#202020] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  <span>Explore Residences</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#contact"
                  className="magnetic-btn group inline-flex items-center gap-3 bg-white/10 lg:bg-white/60 hover:bg-white/20 lg:hover:bg-white border border-white/20 lg:border-black/10 hover:border-white/40 lg:hover:border-black/35 text-white lg:text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
                >
                  <div className="w-5 h-5 rounded-full bg-white/10 lg:bg-black/5 flex items-center justify-center transition-colors group-hover:bg-white/20 lg:group-hover:bg-black/10">
                    <Play size={10} className="fill-current text-white lg:text-black translate-x-[1px]" />
                  </div>
                  <span>Watch Video</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Spacer to push content correctly */}
          <div className="hidden lg:block lg:col-span-7 h-2" />
        </div>

        {/* Absolute Right-Aligned Building Container (Right-0, Massive scale layout, full cover on mobile) */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[55vw] xl:w-[52vw] z-0 lg:z-20 pointer-events-none">
          <motion.div 
            style={{ 
              y: yBuilding, 
              scale: scaleBuilding,
              rotateX: tilt.x,
              rotateY: tilt.y,
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.9, y: 80 }}
            animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.9 : 1.16, y: isLoading ? 80 : -10 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full pointer-events-auto select-none cursor-pointer"
          >
            {/* The primary building render - absolute bottom-right to prevent size collapse, covers full screen on mobile */}
            <img
              src="/building.png"
              alt="Luxury Tower Apartment Architecture Render"
              className="absolute right-0 bottom-0 w-full h-full lg:w-[95%] lg:h-auto lg:max-h-[85vh] object-cover lg:object-contain object-center lg:object-right-bottom opacity-35 lg:opacity-100 drop-shadow-[0_25px_65px_rgba(0,0,0,0.16)] z-10"
            />

            {/* Flipped ground reflection (Subtle reflection on the polished floor) */}
            <motion.div 
              style={{ y: yReflection }}
              className="absolute top-[96%] right-0 w-[95%] sm:w-[85%] lg:w-[95%] h-auto opacity-[0.08] pointer-events-none select-none z-0 hidden lg:block"
            >
              <img
                src="/building.png"
                alt="Building ground reflection"
                className="w-full h-auto object-contain object-right-top luxury-reflection"
              />
            </motion.div>

            {/* Glowing Landscape node points */}
            <div className="absolute bottom-[3%] right-[8%] w-2.5 h-2.5 bg-[#FFB800] rounded-full blur-[2px] shadow-[0_0_14px_#FFB800] animate-ping z-20 hidden lg:block" />
            <div className="absolute bottom-[5%] right-[25%] w-2.5 h-2.5 bg-[#FFB800] rounded-full blur-[2px] shadow-[0_0_14px_#FFB800] animate-ping z-20 hidden lg:block" />
          </motion.div>
        </div>

        {/* Bottom Area: Floating Action/Stats Dock and Location */}
        <div className="relative z-30 w-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mt-auto">
          
          {/* Glassmorphism Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 40 : 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] p-6 sm:p-7 flex-1 max-w-4xl border border-white/10 lg:border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.03)] bg-white/5 lg:bg-white/75 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 md:divide-x divide-white/10 lg:divide-black/[0.06]">
              {/* Residence Stat */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 lg:bg-black/[0.03] flex items-center justify-center shrink-0">
                  <Home size={18} className="text-[#FFB800]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal leading-none text-white lg:text-black">24</h4>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 lg:text-black/50 mt-1">Residences</p>
                </div>
              </div>

              {/* Area Stat */}
              <div className="flex items-start gap-4 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-white/10 lg:bg-black/[0.03] flex items-center justify-center shrink-0">
                  <Maximize2 size={18} className="text-[#FFB800]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal leading-none text-white lg:text-black">18,500</h4>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 lg:text-black/50 mt-1">SQ FT Clubhouse</p>
                </div>
              </div>

              {/* Landscaped Stat */}
              <div className="flex items-start gap-4 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-white/10 lg:bg-black/[0.03] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2s-.3 1.8-.8 2.6c-.6-.4-1.3-.9-2.1-1.2.2.9.2 1.8-.1 2.6-.7-.3-1.4-.7-2.2-1.4 1 .2 2.1-.5 2.8-.8-.2-1.6-.4-2.4-.6.6.9.7 2 .2 2.9-.8-.1-1.6-.2-2.4-.2 1 1 1.4 2.1 1 3.2-.8.1-1.6.4-2.3.8 1.4.3 2.1.9 2.5 2-.8.4-1.4 1-1.8 1.8 1.8-.2 3.1-.9 3.8-2-.4 1-.4 2.1-.2 3.2.9-.6 1.7-1.4 2.3-2.4 0 .9.2 1.8.6 2.6 1.1-1.3 1.6-2.9 1.5-4.6.4 1 .9 1.9 1.6 2.7.3-1 .2-2.1-.2-3.1.6.5 1.3 1 2.1 1.3 0-1.1-.4-2.1-1.2-2.9.7-.1 1.4-.1 2 .1-.4-1-1.2-1.8-2.2-2.2.8-.5 1.5-1.1 2-2-.8.2-1.6.5-2.3 1 .1-1.1-.3-2.1-1-2.9.8.4 1.5 1 2 1.8-.1-1.1-.7-2-1.6-2.5-.2.8-.7 1.5-1.3 2 .2-1.3.1-2.7-.4-3.9z" />
                    <path d="M12.5 16.5v5.5a.5.5 0 01-1 0v-5.5a.5.5 0 011 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal leading-none text-white lg:text-black">2.4</h4>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 lg:text-black/50 mt-1">Acres Ground</p>
                </div>
              </div>

              {/* Security Stat */}
              <div className="flex items-start gap-4 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-white/10 lg:bg-black/[0.03] flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#FFB800]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal leading-none text-white lg:text-black">24/7</h4>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 lg:text-black/50 mt-1">Concierge & Security</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location details (Liquid glass style) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 20 : 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="flex flex-row md:flex-col justify-between items-center md:items-end gap-3 shrink-0"
          >
            {/* Prime Location Indicator with Premium Liquid Glass Background */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/20 lg:border-black/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] bg-white/10 lg:bg-white/45 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-[#FFB800]" />
              </div>
              <div className="text-left">
                <span className="text-[8px] uppercase tracking-wider font-bold text-white/50 lg:text-black/45">Prime Location</span>
                <h5 className="font-serif text-xs font-semibold text-white lg:text-black leading-none mt-1">Beverly Hills, California</h5>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Side Floating Award Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 30 : 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-30 select-none hidden sm:block"
        >
          <div className="bg-white/10 lg:bg-white/85 backdrop-blur-xl border border-white/20 lg:border-black/[0.04] py-6 px-4 rounded-full flex flex-col items-center shadow-[0_12px_36px_rgba(0,0,0,0.05)] animate-slow-bob max-w-[76px] text-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFB800]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3s-.3 1.8-.8 2.6c-.6-.4-1.3-.9-2.1-1.2.2.9.2 1.8-.1 2.6-.7-.3-1.4-.7-2.2-1 .4 1 .2 2.1-.5 2.8-.8-.2-1.6-.4-2.4-.6.6.9.7 2 .2 2.9-.8-.1-1.6-.2-2.4-.2 1 1 1.4 2.1 1 3.2-.8.1-1.6.4-2.3.8 1.4.3 2.1.9 2.5 2-.8.4-1.4 1-1.8 1.8 1.8-.2 3.1-.9 3.8-2-.4 1-.4 2.1-.2 3.2.9-.6 1.7-1.4 2.3-2.4 0 .9.2 1.8.6 2.6 1.1-1.3 1.6-2.9 1.5-4.6.4 1 .9 1.9 1.6 2.7.3-1 .2-2.1-.2-3.1.6.5 1.3 1 2.1 1.3 0-1.1-.4-2.1-1.2-2.9.7-.1 1.4-.1 2 .1-.4-1-1.2-1.8-2.2-2.2.8-.5 1.5-1.1 2-2-.8.2-1.6.5-2.3 1 .1-1.1-.3-2.1-1-2.9.8.4 1.5 1 2 1.8-.1-1.1-.7-2-1.6-2.5-.2.8-.7 1.5-1.3 2 .2-1.3.1-2.7-.4-3.9z" />
                <path d="M12.5 16.5v5.5a.5.5 0 01-1 0v-5.5a.5.5 0 011 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[8px] leading-[1.25] uppercase tracking-wider font-extrabold text-white/50 lg:text-black/50">Award Winning Design</span>
              <div className="w-5 h-px bg-white/20 lg:bg-black/10 mx-auto" />
              <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#FFB800]">2026</span>
            </div>
          </div>
        </motion.div>

        {/* Left Side Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoading ? 0 : 0.6, y: isLoading ? -20 : 0 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="fixed left-6 sm:left-8 bottom-12 z-30 select-none hidden sm:flex flex-col items-center gap-4 group cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('layout');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-white lg:text-black font-extrabold [writing-mode:vertical-lr] rotate-180 mb-2 transition-colors group-hover:text-[#FFB800]">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 lg:border-black/10 flex items-center justify-center transition-colors group-hover:border-[#FFB800]">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={12} className="rotate-90 text-white lg:text-black group-hover:text-[#FFB800] transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
