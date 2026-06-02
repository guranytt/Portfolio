import { motion } from "motion/react";
import { Crown, Sparkles, Compass } from "lucide-react";
import { profileDetails } from "../data";
import GoldenFrame from "./GoldenFrame";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-royal-950 text-royal-100 overflow-hidden px-6 lg:px-12 py-20"
    >
      {/* Editorial Decorative Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-900 via-royal-950 to-royal-950 opacity-90 z-0" />
      
      {/* Subtle overlay lines resembling a blueprint/fine coordinate grid for high-profile editorial style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,170,92,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,170,92,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      
      {/* Animated Glowing Ambient Dust Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none z-0"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Editorial Headers, Name, and Title */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 select-none">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-royal-900/80 border border-gold-500/20 rounded-full w-fit mb-6 shadow-sm shadow-gold-500/5"
          >
            <Crown className="w-4.5 h-4.5 text-gold-400" />
            <span className="font-mono text-[10px] tracking-widest text-gold-300 uppercase">
              {profileDetails.honorific}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold-500" />
            <Sparkles className="w-3.5 h-3.5 text-gold-400/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-royal-50 font-normal tracking-tight mb-6"
          >
            <span className="italic block font-light text-royal-300 text-2xl sm:text-3xl tracking-wide mb-1">Esteemed Philanthropist</span>
            <span className="bg-gradient-to-r from-royal-50 via-royal-100 to-gold-200 bg-clip-text text-transparent block">
              {profileDetails.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] w-24 bg-gradient-to-r from-gold-400 to-transparent mb-6"
          />

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-lg sm:text-xl text-gold-200 font-light tracking-wide mb-6 max-w-xl"
          >
            {profileDetails.shortTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-royal-300 font-sans font-light text-sm sm:text-base leading-relaxed max-w-lg mb-8"
          >
            {profileDetails.biographySummary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#biography"
              className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-royal-950 rounded-xs font-sans font-medium text-sm text-center shadow-lg shadow-gold-500/10 transition-all duration-300 hover:shadow-gold-500/20 active:scale-[0.98]"
            >
              Explore Biography
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3.5 border border-royal-300/20 hover:border-gold-300 hover:bg-royal-900/50 text-royal-100 rounded-xs font-sans font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>View Portfolio</span>
              <Compass className="w-4 h-4 text-royal-400 group-hover:text-gold-300 transition-colors group-hover:rotate-45 duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image Display and Frame */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full max-w-[380px] md:max-w-[420px]"
          >
            <GoldenFrame 
              title={profileDetails.name} 
              subtitle="GROUP CEO & FOUNDER"
            >
              <img
                src={profileDetails.avatarImage}
                alt={profileDetails.titleAndEra}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[480px] pointer-events-none select-none transition-all duration-75 brightness-105"
              />
            </GoldenFrame>
          </motion.div>
        </div>

      </div>

      {/* Floating Quote Bottom Banner (Large Screen Only) */}
      <div className="absolute bottom-10 left-12 right-12 z-10 hidden xl:flex items-center justify-between pointer-events-none selection:bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-[400px]"
        >
          <p className="font-serif italic text-xs text-royal-400 leading-relaxed text-left">
            "{profileDetails.introQuote}"
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase">
            Est. 1981 — Corporate Secretariat
          </span>
          <div className="w-12 h-[1px] bg-gold-500/40" />
        </motion.div>
      </div>

      {/* Elegant scroll down animation cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="font-mono text-[9px] tracking-widest text-gold-400/70 uppercase mb-2 select-none"
        >
          Scroll
        </motion.p>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400/80 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-4 bg-royal-100"
          />
        </div>
      </div>
    </section>
  );
}
