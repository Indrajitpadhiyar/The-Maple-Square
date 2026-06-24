import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, LayoutGrid, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: "ground",
    title: "Ground Floor",
    shortTitle: "Ground",
    desc: "Our layout is designed keeping in mind what the client will like. Everything is laid out to make it efficient for you to shop or relax. You will find the utmost comfort and luxury here.",
    image: "https://themaplesquare.in/images/Ground-Floor-Plan.jpg"
  },
  {
    id: "first",
    title: "First Floor",
    shortTitle: "1st",
    desc: "Designing the perfect commercial complex requires immense talent. Our team has come together to create a plan that offers incredible benefits to business and shop owners.",
    image: "https://themaplesquare.in/images/First-Floor-Plan.jpg"
  },
  {
    id: "second",
    title: "Second Floor",
    shortTitle: "2nd",
    desc: "The Maple Square has ample open space, with a floor plan that is easy to navigate. Footfall is guaranteed when the design is alluring and the layout is easy to move around.",
    image: "https://themaplesquare.in/images/First-Floor-Plan.jpg"
  },
  {
    id: "third",
    title: "Third Floor",
    shortTitle: "3rd",
    desc: "The epitome of modern design, the symbol of luxury, and aesthetics that impress design sensibilities come together to create the masterpiece that is The Maple Square.",
    image: "https://themaplesquare.in/images/Third-Floor-Plan.jpg"
  },
  {
    id: "fourth",
    title: "Fourth Floor",
    shortTitle: "4th",
    desc: "Premium corporate spaces designed to optimize productivity and offer the absolute best working environment for elite enterprises.",
    image: "https://themaplesquare.in/images/Fourth-Floor-Plan.jpg"
  },
  {
    id: "fifth",
    title: "Fifth Floor",
    shortTitle: "5th",
    desc: "Spacious areas meticulously configured for enterprise-level operations and high-end commercial services.",
    image: "https://themaplesquare.in/images/Fifth-Floor-Plan.jpg"
  },
  {
    id: "sixth",
    title: "Sixth Floor",
    shortTitle: "6th",
    desc: "Exclusive top-floor arrangements with spectacular structural views, ultimate privacy, and unparalleled premium built quality.",
    image: "https://themaplesquare.in/images/Sixth-Floor-Plan.jpg"
  }
];

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="floor-plans" className="py-28 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold opacity-[0.02] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gold/20 animate-float" />
      <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-gold/15 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/10 text-black/85 text-[11px] tracking-[0.2em] uppercase font-bold mb-6 font-sans"
          >
            <LayoutGrid size={14} />
            <span>Master Layouts</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne text-offwhite max-w-3xl mx-auto leading-tight"
          >
            Distinctive <span className="gold-gradient-text italic font-serif">Floor Plans</span>
          </motion.h2>
        </div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {plans.map((plan, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={plan.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-2.5 text-[12px] font-bold transition-all duration-300 uppercase tracking-[0.12em] rounded-full ${
                  isActive ? 'text-white' : 'text-black/50 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-floor-tab"
                    className="absolute inset-0 bg-[#0A0A0A] rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 hidden sm:inline">{plan.title}</span>
                <span className="relative z-10 sm:hidden">{plan.shortTitle}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <div className="glass-card p-6 md:p-10 rounded-2xl relative overflow-hidden min-h-[450px] lg:min-h-[550px] flex items-center">
          {/* Inner gold glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex flex-col lg:flex-row gap-10 items-center"
            >
              {/* Text Content */}
              <div className="w-full lg:w-[35%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-black/[0.04] flex items-center justify-center">
                    <span className="text-black font-syne font-bold text-sm">
                      {String(activeTab + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent" />
                </div>

                <h3 className="text-3xl md:text-4xl font-syne text-offwhite mb-2">
                  {plans[activeTab].title}
                </h3>
                <span className="text-black/50 text-xs tracking-widest uppercase font-bold mb-6">
                  Layout Plan
                </span>

                <p className="text-muted leading-relaxed text-base mb-8">
                  {plans[activeTab].desc}
                </p>

                <div className="flex items-center gap-3 text-black/80 text-sm tracking-wider uppercase font-semibold group cursor-default">
                  <Maximize2 size={16} />
                  <span>Interactive Preview</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[65%] relative group">
                <div className="bg-surface rounded-xl p-3 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden">
                  {/* Top Bar Window Accent */}
                  <div className="flex items-center gap-2 mb-3 px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                    <span className="text-[10px] text-muted/40 tracking-wider ml-2 uppercase">Blueprint View</span>
                  </div>

                  <div className="relative overflow-hidden rounded-lg bg-black/[0.01]">
                    <img
                      src={plans[activeTab].image}
                      alt={`${plans[activeTab].title} Blueprint`}
                      className="w-full h-auto object-contain max-h-[500px] mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
