import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  Globe2,
  Tv,
  GraduationCap,
  Leaf,
  Fingerprint,
  Award,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { legacyAchievements } from "../data";

export default function Legacy() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Environment" | "Service" | "Patronages">("All");

  const categories: ("All" | "Environment" | "Service" | "Patronages")[] = ["All", "Environment", "Service", "Patronages"];

  const filteredAchievements = activeCategory === "All"
    ? legacyAchievements
    : legacyAchievements.filter(item => item.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-gold-400" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-gold-400" />;
      case "Tv":
        return <Tv className="w-6 h-6 text-gold-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-gold-400" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-gold-400" />;
      case "Fingerprint":
        return <Fingerprint className="w-6 h-6 text-gold-400" />;
      default:
        return <Award className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="legacy" className="py-24 lg:py-32 bg-royal-950 text-royal-100 px-6 lg:px-12 relative overflow-hidden">
      {/* Editorial Grid Backing lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,170,92,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,170,92,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />
      
      {/* Glowing gold backdrops */}
      <div className="absolute top-[10%] right-[-10%] w-[35rem] h-[35rem] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Immersive Feature Intro Card (Span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col text-left select-none"
            >
              <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-gold-400 uppercase">
                <Award className="w-4 h-4 text-gold-400 animate-pulse" />
                <span>Corporate Portfolio & Public Impact</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-royal-50 tracking-tight leading-tight mb-6">
                A Diversified Legacy of <span className="italic font-light text-gold-200">Enterprise</span> & Human Value
              </h2>
              
              <p className="text-royal-300 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
                Through major investments in shipping, technology cloud systems, modern digital travel, and community empowerment, Dr. Edidiong Dominic Nkanta drives true socio-economic stability. True enterprise is calculated not by financial yields alone, but by staff well-being, on-time wages, and risk management standards.
              </p>

              {/* Navigation Filters as subtle editorial lines */}
              <div className="flex flex-col gap-2 border-l border-gold-300/10 pl-4 py-1 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="group flex items-center justify-between py-2 text-left pointer-events-auto"
                    aria-label={`Filter by ${cat}`}
                  >
                    <span className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                      activeCategory === cat ? "text-gold-400 font-semibold pl-2" : "text-royal-400 hover:text-royal-200"
                    }`}>
                      {cat === "All" ? "View All Verticals" : cat === "Environment" ? "Enterprise" : cat}
                    </span>
                    {activeCategory === cat && (
                      <motion.div layoutId="legacy-arrow-arrow">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>

              {/* Small Elegant Quote Banner with a fine borderline */}
              <div className="p-5 border border-gold-400/20 bg-royal-900/50 rounded-xs relative">
                <span className="font-serif italic text-xs text-gold-200 leading-relaxed block mb-2 font-light">
                  "The only language I practice is that which adds value to life. Our business must create honest employment, support families, and stand as an altar of faith."
                </span>
                <span className="font-mono text-[9px] text-royal-400 tracking-wider uppercase block">
                  — Dr. Edidiong Dominic Nkanta, Group CEO
                </span>
              </div>

            </motion.div>
          </div>

          {/* Right Side: Achievements Grid (Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredAchievements.map((item, index) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group bg-royal-900 border border-gold-500/10 hover:border-gold-400/40 p-6 rounded-xs shadow-md shadow-royal-950/40 flex flex-col justify-between hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 text-left relative overflow-hidden"
                  >
                    {/* Glowing card lighting hover effect */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div>
                      {/* Metric Category and Icon header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase px-2.5 py-0.5 bg-gold-400/5 border border-gold-400/10 rounded-full">
                          {item.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-royal-950 border border-gold-500/10 flex items-center justify-center group-hover:border-gold-400/40 group-hover:bg-gradient-to-br group-hover:from-gold-500/10 group-hover:to-transparent transition-all duration-500">
                          {renderIcon(item.icon)}
                        </div>
                      </div>

                      {/* Giant Number Value */}
                      <div className="mb-2">
                        <span className="font-serif text-3xl sm:text-4xl font-light text-gold-100 tracking-tight block">
                          {item.value}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-serif text-lg font-normal text-royal-50 tracking-normal mb-3 group-hover:text-gold-200 transition-colors duration-300">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="font-sans font-light text-xs sm:text-sm text-royal-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle ornamental dots */}
                    <div className="mt-6 pt-4 border-t border-royal-800/60 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-gold-500/40" />
                      <span className="font-mono text-[8px] text-royal-400 tracking-wider uppercase">
                        Sustained Public Audit
                      </span>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
