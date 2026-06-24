import { motion } from 'framer-motion';
import { MapPin, Shield, Star, Crown } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Situated in the heart of the city with seamless connectivity to major hubs, schools, and hospitals.",
    stat: "01"
  },
  {
    icon: Crown,
    title: "Prestigious Living",
    description: "Architectural brilliance combined with world-class amenities designed for the elite.",
    stat: "02"
  },
  {
    icon: Star,
    title: "Profitable Investment",
    description: "Guaranteed high returns on investment with meticulously planned commercial and residential spaces.",
    stat: "03"
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "24/7 advanced multi-tier security systems ensuring absolute peace of mind.",
    stat: "04"
  }
];

export default function AboutSection() {
  return (
    <section id="layout" className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="section-divider" />

      <div className="py-28 bg-surface relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold opacity-[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.02] blur-[180px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gold/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/[0.02] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/10 text-black/80 text-[11px] tracking-[0.2em] uppercase font-bold mb-6 font-sans"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              Discover Excellence
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne text-offwhite max-w-3xl mx-auto leading-tight"
            >
              Redefining Urban Spaces
              <br />
              with <span className="gold-gradient-text italic font-serif">Elegance</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px w-20 mx-auto mt-8 bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 glass-card rounded-2xl transition-all duration-500 group-hover:bg-[#F4F4F4]/50" />
                  <div className="absolute inset-0 gold-border-glow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-8">
                    {/* Number */}
                    <span className="absolute top-6 right-6 text-black/5 text-5xl font-syne font-bold group-hover:text-black/10 transition-colors duration-500">
                      {feature.stat}
                    </span>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-xl bg-black/[0.03] flex items-center justify-center group-hover:bg-black/[0.08] group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-syne text-offwhite mb-3 group-hover:text-black transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light group-hover:w-12 transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="section-divider" />
    </section>
  );
}
