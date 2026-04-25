import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, LayoutGrid } from 'lucide-react';

const plans = [
  {
    id: "ground",
    title: "Ground Floor",
    desc: "Our layout is designed keeping in mind what the client will like. Everything is laid out to make it efficient for you to shop or relax. You will find the utmost comfort and luxury here.",
    image: "https://themaplesquare.in/images/Ground-Floor-Plan.jpg"
  },
  {
    id: "first",
    title: "First Floor",
    desc: "Designing the perfect commercial complex requires immense talent. Our team has come together to create a plan that offers incredible benefits to business and shop owners.",
    image: "https://themaplesquare.in/images/First-Floor-Plan.jpg"
  },
  {
    id: "second",
    title: "Second Floor",
    desc: "The Maple Square has ample open space, with a floor plan that is easy to navigate. Footfall is guaranteed when the design is alluring and the layout is easy to move around.",
    image: "https://themaplesquare.in/images/First-Floor-Plan.jpg" // Fallback to First floor layout if missing
  },
  {
    id: "third",
    title: "Third Floor",
    desc: "The epitome of modern design, the symbol of luxury, and aesthetics that impress design sensibilities come together to create the masterpiece that is The Maple Square.",
    image: "https://themaplesquare.in/images/Third-Floor-Plan.jpg"
  },
  {
    id: "fourth",
    title: "Fourth Floor",
    desc: "Premium corporate spaces designed to optimize productivity and offer the absolute best working environment for elite enterprises.",
    image: "https://themaplesquare.in/images/Fourth-Floor-Plan.jpg"
  },
  {
    id: "fifth",
    title: "Fifth Floor",
    desc: "Spacious areas meticulously configured for enterprise-level operations and high-end commercial services.",
    image: "https://themaplesquare.in/images/Fifth-Floor-Plan.jpg"
  },
  {
    id: "sixth",
    title: "Sixth Floor",
    desc: "Exclusive top-floor arrangements with spectacular structural views, ultimate privacy, and unparalleled premium built quality.",
    image: "https://themaplesquare.in/images/Sixth-Floor-Plan.jpg"
  }
];

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="floor-plans" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-3 text-gold font-sans tracking-widest uppercase text-sm font-semibold"
          >
            <LayoutGrid size={16} />
            <span>Master Layouts</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white max-w-3xl mx-auto"
          >
            Distinctive Floor Plans
          </motion.h3>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {plans.map((plan, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={plan.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-widest ${
                  isActive ? 'text-primary' : 'text-offwhite hover:text-gold'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-floor-tab"
                    className="absolute inset-0 bg-gold rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{plan.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area with Animation */}
        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-sm relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <h4 className="text-3xl font-serif text-white mb-6 border-b border-gold/30 pb-4 inline-block">
                  {plans[activeTab].title} <span className="text-gold">Plan</span>
                </h4>
                <p className="text-offwhite/80 leading-relaxed text-lg font-light mb-8">
                  {plans[activeTab].desc}
                </p>
                
                <div className="flex items-center gap-4 text-gold/80 text-sm tracking-widest uppercase font-semibold">
                  <Maximize2 size={18} />
                  <span>Interactive Map Preview Below</span>
                </div>
              </div>

              <div className="w-full lg:w-2/3 bg-black/40 p-4 rounded-sm border border-white/10 group relative shadow-2xl">
                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={plans[activeTab].image} 
                  alt={`${plans[activeTab].title} Blueprint`}
                  className="w-full h-auto object-contain max-h-[600px] mx-auto drop-shadow-lg scale-[0.98] group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
