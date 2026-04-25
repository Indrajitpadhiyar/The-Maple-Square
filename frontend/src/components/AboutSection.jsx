import { motion } from 'framer-motion';
import { MapPin, Shield, Star, Crown } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-gold" />,
    title: "Prime Location",
    description: "Situated in the heart of the city with seamless connectivity to major hubs, schools, and hospitals."
  },
  {
    icon: <Crown className="w-8 h-8 text-gold" />,
    title: "Prestigious Living",
    description: "Architectural brilliance combined with world-class amenities designed for the elite."
  },
  {
    icon: <Star className="w-8 h-8 text-gold" />,
    title: "Profitable Investment",
    description: "Guaranteed high returns on investment with our meticulously planned commercial and residential spaces."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold" />,
    title: "Secure Environment",
    description: "24/7 advanced multi-tier security systems ensuring absolute peace of mind."
  }
];

export default function AboutSection() {
  return (
    <section id="layout" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold opacity-5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-gold font-sans tracking-widest uppercase text-sm mb-3 font-semibold"
          >
            Discover Excellence
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white max-w-3xl mx-auto"
          >
            Redefining Urban Spaces with Elegance and Vision
          </motion.h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px w-24 bg-gold mx-auto mt-8 Origin-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-gold/50 transition-all duration-300 group rounded-sm"
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{feature.title}</h4>
              <p className="text-offwhite/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
