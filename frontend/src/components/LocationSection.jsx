import { motion } from "framer-motion";
import { GraduationCap, Train, Milestone, Compass, Briefcase, MapPin, ArrowRight } from "lucide-react";

const landmarks = [
  {
    icon: GraduationCap,
    title: "Narmada College",
    description: "Reputable educational institution offering premier learning programs.",
    time: "2 Mins",
    distance: "1.2 km",
    category: "Education",
  },
  {
    icon: Train,
    title: "Bharuch Railway Station",
    description: "Major transit network connecting to Gujarat's major industrial cities.",
    time: "12 Mins",
    distance: "6.5 km",
    category: "Transit",
  },
  {
    icon: Milestone,
    title: "National Highway 48 (NH-48)",
    description: "Seamless arterial expressway connectivity to Vadodara and Surat.",
    time: "15 Mins",
    distance: "9.0 km",
    category: "Connectivity",
  },
  {
    icon: Compass,
    title: "Shuklatirth Riverfront",
    description: "Peaceful natural riverfront and ancient temples for peaceful weekends.",
    time: "10 Mins",
    distance: "5.8 km",
    category: "Recreation",
  },
  {
    icon: Briefcase,
    title: "Dahej SEZ / Industrial Area",
    description: "Fast-growing industrial corridor offering excellent business opportunities.",
    time: "45 Mins",
    distance: "38 km",
    category: "Business Hub",
  },
];

export default function LocationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-28 border-t border-black/[0.03]">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold opacity-[0.02] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/10 text-black/80 text-[11px] tracking-[0.2em] uppercase font-bold mb-6 font-sans"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Prime Location
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne text-offwhite max-w-3xl mx-auto leading-tight"
          >
            The Strategic Center of <span className="gold-gradient-text italic font-serif">Bharuch</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px w-20 mx-auto mt-8 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Connectivity Landmarks List */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-black mb-4">
                Connected Centrality, Pure Serenity
              </h3>
              <p className="text-muted text-sm sm:text-base font-light leading-relaxed max-w-md font-sans">
                Located on Tavra-Shuklatirth Road, near Narmada College in Tavra, Bharuch. The Maple Square offers unmatched access to key regions while preserving an elite, tranquil lifestyle.
              </p>
            </motion.div>

            {/* Landmarks List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {landmarks.map((landmark, idx) => {
                const Icon = landmark.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative flex items-center justify-between p-4 rounded-2xl border border-black/[0.04] bg-white/40 backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-gold/20"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className="w-11 h-11 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-center shrink-0 group-hover:bg-gold/5 group-hover:border-gold/15 transition-all duration-300">
                        <Icon size={18} className="text-black/75 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-wider font-extrabold text-gold">
                          {landmark.category}
                        </span>
                        <h4 className="font-syne text-sm font-semibold text-black leading-tight mt-0.5">
                          {landmark.title}
                        </h4>
                        <p className="text-[11px] text-muted font-light font-sans mt-0.5 max-w-[220px] sm:max-w-[320px] truncate">
                          {landmark.description}
                        </p>
                      </div>
                    </div>
                    {/* Time & Distance Badge */}
                    <div className="text-right shrink-0">
                      <span className="block font-serif text-sm font-semibold text-black leading-none">
                        {landmark.time}
                      </span>
                      <span className="text-[9px] text-muted font-sans font-medium block mt-1">
                        {landmark.distance}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Styled Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 w-full flex flex-col gap-6"
          >
            {/* Map Frame Container */}
            <div className="relative rounded-[28px] overflow-hidden border border-black/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.04)] bg-white p-2.5 h-[350px] sm:h-[450px] lg:h-[520px] group">
              {/* Gold Accents inside the map border */}
              <div className="absolute inset-0 rounded-[28px] border border-gold/15 pointer-events-none z-10 m-2.5" />
              
              {/* Map Iframe */}
              <iframe
                src="https://maps.google.com/maps?q=The%20Maple%20Square,%20Tavra-Shuklatirth%20Road,%20Bharuch&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full rounded-[20px] border-0 transition-all duration-700 grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                allowFullScreen=""
                loading="lazy"
                title="The Maple Square Location Map"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map CTA Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFB800]/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-gold" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-muted">Project Coordinates</span>
                  <h5 className="font-syne text-xs font-semibold text-black leading-none mt-1">Tavra-Shuklatirth Road, Tavra, Bharuch</h5>
                </div>
              </div>
              
              <a
                href="https://maps.google.com/?q=The+Maple+Square+Bharuch"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-gold hover:text-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(255,184,0,0.2)]"
              >
                <span>Open in Google Maps</span>
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
