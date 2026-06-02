import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Sparkles, ChevronRight, History, Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { timelineData, profileDetails } from "../data";

export default function Biography() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playAttempted, setPlayAttempted] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio("https://res.cloudinary.com/dojayb3ro/video/upload/v1780382267/let_s_try_this_again_064805225_knq3ee.mp3");
    audio.loop = true;
    audio.volume = 0.15; // Reduced volume to play subtly in the background
    
    // Sync state for loading
    audio.addEventListener("canplaythrough", () => {
      setIsAudioLoaded(true);
    });

    audioRef.current = audio;

    // State synchronizers for playback
    const handlePlayState = () => setIsPlaying(true);
    const handlePauseState = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlayState);
    audio.addEventListener("pause", handlePauseState);

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlayState);
      audio.removeEventListener("pause", handlePauseState);
      audioRef.current = null;
    };
  }, []);

  // Viewport scroll-based Intersection Observer triggers cues
  useEffect(() => {
    if (!audioRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playAttempted) {
            setPlayAttempted(true);
            
            // Trigger playback on intersection
            audioRef.current?.play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((err) => {
                console.log("Autoplay filtered by browser security framework. Awaiting manual activation trigger.", err);
              });
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [playAttempted]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Manual playback override intercepted:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section 
      ref={sectionRef}
      id="biography" 
      className="relative py-24 lg:py-32 bg-[#FBF9F5] text-royal-950 overflow-hidden px-6 lg:px-12 pointer-events-auto"
    >
      {/* Decorative floral/geometric background line art to suggest luxury heritage */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_bottom_right,_rgba(194,170,92,0.02)_0%,_transparent_50%) pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading with gold subline and royal metadata */}
        <div className="flex flex-col items-center text-center justify-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-[#96762C] uppercase"
          >
            <History className="w-3.5 h-3.5 animate-pulse" />
            <span>Corporate & Public Registry</span>
            <span className="w-1 h-1 rounded-full bg-gold-400" />
            <span>A Life of Purpose & Value</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-royal-950 tracking-tight"
          >
            The Chronological Biography
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gold-500 mt-6"
          />

          {/* Interactive Music Prelude Controller */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 bg-white border border-stone-200/80 shadow-md p-3.5 px-5 flex flex-col sm:flex-row items-center gap-4 max-w-md w-full justify-between"
          >
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Pulsing Visual Active Bars */}
              <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 border border-gold-500/10">
                <Music className={`w-4 h-4 ${isPlaying ? "animate-bounce" : ""}`} />
              </div>
              <div className="text-left">
                <p className="font-serif text-xs font-semibold text-royal-900 tracking-wide">Biography Ambient Cue</p>
                
                {/* Audio Spectrometer Bars */}
                <div className="flex gap-0.5 items-end h-3 mt-1">
                  <div className={`w-[2px] bg-gold-500 rounded-full transition-all duration-300 ${isPlaying ? "h-3.5 animate-pulse" : "h-1"}`} />
                  <div className={`w-[2px] bg-[#96762C] rounded-full transition-all duration-300 ${isPlaying ? "h-2.5 animate-bounce [animation-delay:0.1s]" : "h-1"}`} />
                  <div className={`w-[2px] bg-gold-500 rounded-full transition-all duration-300 ${isPlaying ? "h-3 animate-pulse [animation-delay:0.2s]" : "h-1"}`} />
                  <div className={`w-[2px] bg-[#96762C] rounded-full transition-all duration-300 ${isPlaying ? "h-1.5 animate-bounce [animation-delay:0.3s]" : "h-1"}`} />
                  <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest pl-1.5">
                    {isPlaying ? "ambient playback live" : "audio inactive"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 max-sm:w-full max-sm:justify-end">
              <button
                onClick={togglePlayback}
                aria-label={isPlaying ? "Pause Ambient Background Audio" : "Play Ambient Background Audio"}
                className="w-8 h-8 rounded-full bg-royal-950 text-white flex items-center justify-center hover:bg-gold-600 transition-colors cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Audio Track" : "Mute Audio Track"}
                className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-royal-950 hover:bg-stone-200/80 flex items-center justify-center transition-colors cursor-pointer border border-stone-200"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-500" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-base md:text-lg text-stone-600 max-w-2xl mt-8 font-light leading-relaxed"
          >
            "{profileDetails.introQuote}"
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 lg:pl-14 border-l border-gold-300/40 ml-2 sm:ml-4 lg:ml-8 flex flex-col gap-16 md:gap-20">
          
          {/* Subtle line glowing effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500 via-royal-950/20 to-transparent pointer-events-none" />

          {timelineData.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === timelineData.length - 1;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 text-left"
              >
                {/* Timeline Circle Bullet */}
                <span className="absolute left-[-34px] sm:left-[-50px] lg:left-[-66px] top-[18px] md:top-[38px] w-5 h-5 rounded-full bg-[#FAF8F5] border border-gold-300/60 flex items-center justify-center transition-all duration-300 group-hover:border-gold-500 group-hover:bg-[#FAF8F5] shadow-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:bg-gold-600 transition-colors duration-300" />
                </span>

                {/* Left Column: Big Year Marker */}
                <div className="md:col-span-3 flex flex-row md:flex-col items-baseline md:items-start md:pt-4">
                  <h3 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-royal-950 bg-gradient-to-r from-royal-950 to-stone-500 bg-clip-text text-transparent select-none relative">
                    {item.year}
                    <span className="absolute -top-1 right-[-4px] text-gold-500/80 text-xl font-serif max-md:hidden">•</span>
                  </h3>
                  
                  {item.location && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#96762C] uppercase mt-2 ml-4 md:ml-0 border-l border-gold-400/30 pl-2 md:pl-0 md:border-l-0">
                      <MapPin className="w-3 h-3 text-[#B3923C]" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                {/* Right Column: Life Milestones Details Card */}
                <div className="md:col-span-9 bg-white border border-stone-200/50 p-6 sm:p-8 rounded-xs shadow-xs hover:shadow-lg hover:border-gold-300/40 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white via-[#FAF9F5]/30 to-white">
                  
                  {/* Subtle top horizontal hairline border highlighting elegance */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-300/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-royal-950 tracking-tight">
                      {item.title}
                    </h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 max-sm:hidden" />
                    <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-stone-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Custom Bulleted Milestones Highlights with micro-ornaments */}
                  <div className="border-t border-stone-100 pt-5 mt-4">
                    <h5 className="font-mono text-[9px] tracking-widest text-royal-950 uppercase mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold-500/60" />
                      <span>Key Milestones & Achievements</span>
                    </h5>
                    <ul className="space-y-2.5">
                      {item.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-normal font-sans font-light">
                          <ChevronRight className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
