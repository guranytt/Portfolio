import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Play,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Heart
} from "lucide-react";
import { mediaGallery } from "../data";
import GoldenFrame from "./GoldenFrame";

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Available Filter Categories
  const categories = ["All", "Official", "Family", "Diplomacy"];

  const filteredGallery = activeCategory === "All"
    ? mediaGallery
    : mediaGallery.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? filteredGallery.length - 1 : prev! - 1));
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === filteredGallery.length - 1 ? 0 : prev! + 1));
    setIsZoomed(false);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section id="media" className="py-24 lg:py-32 bg-royal-950 text-royal-100 px-6 lg:px-12 relative overflow-hidden text-left">
      {/* Decorative luxury lines background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(194,170,92,0.015)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Gallery Heading */}
        <div className="flex flex-col items-center text-center justify-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-[#B3923C] uppercase">
            <Camera className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>ENTERPRISE HUB & CHRONICLES</span>
            <span className="w-1 h-1 rounded-full bg-gold-500" />
            <span>OPERATIONAL PHOTO LOGS</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-royal-50">
            The Corporate Presence in <span className="italic font-light text-gold-200">Images</span>
          </h2>
          
          <div className="h-[2px] w-12 bg-gold-500/60 mt-6" />
        </div>

        {/* Gallery Category Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-royal-800 pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "text-gold-300 font-semibold border-b border-gold-400 pb-2 translate-y-[2px]"
                  : "text-royal-400 hover:text-royal-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Preserving Full Size and Resolution inside Exquisite Museum Frames */}
        {filteredGallery.length === 0 ? (
          <div className="text-center py-24 border border-royal-800 bg-royal-900/20">
            <p className="font-serif text-xl font-light text-royal-400 italic">This archive vault is currently vacant.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setIsZoomed(false);
                  }}
                  className="flex items-center justify-center h-full cursor-pointer hover:scale-[1.01] transition-transform duration-500"
                >
                  <GoldenFrame title={item.title} subtitle={item.category}>
                    {/* Frame content - strictly preserving image size and native resolution using object-contain in a premium square museum panel */}
                    <div className="w-full aspect-square md:aspect-[4/3] bg-[#0c0903] relative flex items-center justify-center p-3 sm:p-4 overflow-hidden select-none group">
                      <img
                        src={item.src}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] filter brightness-105"
                      />
                      
                      {/* Interactive Elegant Hover Metadata Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 flex flex-col justify-end text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1.5 font-mono text-[8px] text-gold-400 tracking-wider mb-1.5">
                          <Calendar className="w-3 h-3 text-gold-500" />
                          <span>{item.date || "2026-06-02"}</span>
                        </div>

                        <h3 className="font-serif text-base text-royal-50 tracking-wide font-normal mb-1">
                          {item.title}
                        </h3>

                        <p className="text-royal-300 font-sans font-light text-[10px] leading-relaxed line-clamp-2 max-w-xs">
                          {item.description}
                        </p>
                      </div>

                      {/* Video indicator overlay */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                          <span className="w-10 h-10 rounded-full bg-gold-500/90 text-royal-950 flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 fill-current text-royal-950 ml-0.5" />
                          </span>
                        </div>
                      )}

                      {/* Expand indicator icon top-right */}
                      <div className="absolute top-3 right-3 text-royal-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                    </div>
                  </GoldenFrame>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Lightbox Modal slider view */}
        <AnimatePresence>
          {activeLightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden select-none">
              
              {/* Backglass element */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setLightboxIndex(null);
                  setIsZoomed(false);
                }}
                className="absolute inset-0 bg-royal-950/95 backdrop-blur-md pointer-events-auto"
              />

              {/* Close Button top-right corner */}
              <button
                onClick={() => {
                  setLightboxIndex(null);
                  setIsZoomed(false);
                }}
                className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-royal-900 border border-royal-800 hover:border-gold-400 text-royal-300 hover:text-gold-200 transition-colors pointer-events-auto cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-6 z-20 w-12 h-12 rounded-full bg-royal-900/80 hover:bg-royal-900 border border-royal-800 hover:border-gold-500 text-royal-200 flex items-center justify-center transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 z-20 w-12 h-12 rounded-full bg-royal-900/80 hover:bg-royal-900 border border-royal-800 hover:border-gold-500 text-royal-200 flex items-center justify-center transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Central Lightbox Panel Frame */}
              <motion.div
                key={activeLightboxItem.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-5xl w-full flex flex-col md:flex-row items-center bg-royal-900 border border-royal-800 max-h-[85vh] z-11 overflow-hidden shadow-2xl p-4 sm:p-6"
              >
                
                {/* Photo half screen with majestic gold framing */}
                <div className="relative w-full md:w-3/5 min-h-[40vh] md:min-h-[55vh] flex items-center justify-center select-text">
                  <GoldenFrame title={activeLightboxItem.title} subtitle={activeLightboxItem.category}>
                    <div 
                      className={`relative w-full overflow-auto flex items-center justify-center transition-all duration-300 max-h-[50vh] ${
                        isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                      }`}
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#B3923C transparent" }}
                      onClick={() => setIsZoomed(!isZoomed)}
                      title={isZoomed ? "Click to Fit Frame" : "Click to View at 100% Native Resolution"}
                    >
                      <img
                        src={activeLightboxItem.src}
                        alt={activeLightboxItem.title}
                        referrerPolicy="no-referrer"
                        className={`transition-all duration-300 ${
                          isZoomed 
                            ? "max-w-none max-h-none w-auto h-auto select-none pointer-events-auto" 
                            : "w-full h-auto object-contain max-h-[45vh] pointer-events-none"
                        }`}
                      />
                    </div>
                  </GoldenFrame>
                  {activeLightboxItem.type === "video" && (
                    <div className="absolute inset-0 bg-royal-950/30 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-gold-400 text-royal-950 flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-current text-royal-950 ml-1" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Description half screen */}
                <div className="p-6 md:p-10 w-full md:w-2/5 text-left flex flex-col justify-between self-stretch bg-royal-900 overflow-y-auto">
                  
                  <div>
                    {/* Header badge details */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase px-2.5 py-0.5 bg-gold-400/5 border border-gold-400/10 rounded-full">
                        {activeLightboxItem.category}
                      </span>
                      
                      <div className="flex items-center gap-1 font-mono text-[10px] text-royal-400">
                        <Calendar className="w-3.5 h-3.5 text-royal-400" />
                        <span>{activeLightboxItem.date || "2026-06-02"}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-light text-royal-50 tracking-tight mb-4">
                      {activeLightboxItem.title}
                    </h3>

                    {/* Divider line */}
                    <div className="h-[1px] w-12 bg-gold-500/40 mb-6" />

                    {/* Full Description text */}
                    <p className="text-royal-300 font-sans font-light text-sm leading-relaxed mb-6 select-text selection:bg-[#E5DAAF]/40">
                      {activeLightboxItem.description}
                    </p>

                    {/* Resolution toggle control */}
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="w-full py-2 px-3 bg-royal-800/80 hover:bg-gold-500/15 border border-royal-700 hover:border-gold-500/40 text-royal-200 hover:text-gold-200 text-[11px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mb-6"
                    >
                      <span>🔍</span> 
                      <span>{isZoomed ? "Fit Image to Frame" : "Display at Normal Native Resolution"}</span>
                    </button>
                  </div>

                  {/* Metadata and Signage */}
                  <div className="pt-6 border-t border-royal-800/85">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gold-500/60" />
                        <span className="font-mono text-[9px] tracking-wider text-royal-400 uppercase">
                          CEO Secretariat Record
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-[10px] text-[#C5A880] font-mono">
                        <Heart className="w-3.5 h-3.5 text-[#B3923C] animate-pulse" />
                        <span>Corporate Fleet Asset</span>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
