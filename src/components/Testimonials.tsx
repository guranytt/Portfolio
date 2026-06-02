import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Award } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeItem = testimonialsData[index];

  // Motion Variants for slide transition effects
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#FBF9F5] text-royal-950 px-6 lg:px-12 relative overflow-hidden select-none">
      
      {/* Decorative large backdrop quote bracket */}
      <div className="absolute left-[5%] top-[10%] font-serif text-[18rem] text-stone-200/40 select-none font-light leading-none z-0">
        “
      </div>
      <div className="absolute right-[5%] bottom-[10%] font-serif text-[18rem] text-stone-200/40 select-none font-light leading-none z-0">
        ”
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center justify-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-[#96762C] uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>EXCHANGE OF VALUE & FAITH</span>
            <span className="w-1 h-1 rounded-full bg-gold-400" />
            <span>GLOBAL TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-royal-950">
            Professional Witness & <span className="italic font-light text-stone-500">Endorsements</span>
          </h2>
        </div>

        {/* Carousel Container Frame */}
        <div className="relative min-h-[420px] md:min-h-[340px] flex flex-col justify-between">
          
          {/* Animated Quote area */}
          <div className="overflow-hidden relative w-full flex-grow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center px-4 md:px-12 py-6 flex flex-col items-center"
              >
                {/* Antique Quote Icon */}
                <Quote className="w-10 h-10 text-gold-400 mb-8 opacity-70" />

                {/* Main Quote text */}
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-stone-800 max-w-3xl mb-8">
                  "{activeItem.quote}"
                </p>

                {/* Mini Divider Gold Accent */}
                <div className="w-8 h-[1.5px] bg-[#C5A880] mb-6" />

                {/* Author Credentials Row */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Initials Badge */}
                  <div className="w-11 h-11 rounded-full bg-white border border-gold-300 shadow-xs flex items-center justify-center font-serif text-sm font-medium text-[#96762C] select-none uppercase">
                    {activeItem.initials}
                  </div>
                  
                  <div className="text-left sm:border-l sm:border-stone-200 sm:pl-4">
                    <h4 className="font-serif text-base font-normal text-royal-950 tracking-wide">
                      {activeItem.author}
                    </h4>
                    <p className="font-mono text-[10px] tracking-widest text-[#B3923C] uppercase mt-0.5">
                      {activeItem.role}
                    </p>
                    <p className="font-sans font-light text-[11px] text-stone-400 mt-0.5">
                      {activeItem.organization}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls bottom alignment */}
          <div className="flex items-center justify-between mt-12 px-4 md:px-12 border-t border-stone-200/60 pt-6">
            
            {/* Slide Index (e.g. 01 / 03) */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold text-[#96762C]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-[1px] bg-stone-300 relative">
                <motion.div
                  layoutId="indicator-bar"
                  style={{
                    width: `${((index + 1) / testimonialsData.length) * 100}%`
                  }}
                  className="absolute top-0 bottom-0 left-0 bg-gold-500"
                />
              </div>
              <span className="font-mono text-[11px] text-stone-400">
                {String(testimonialsData.length).padStart(2, "0")}
              </span>
            </div>

            {/* Micro Dot Indicators */}
            <div className="flex items-center gap-2 max-sm:hidden">
              {testimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > index ? 1 : -1);
                    setIndex(dotIdx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                    index === dotIdx ? "bg-gold-500 w-4" : "bg-stone-300"
                  }`}
                />
              ))}
            </div>

            {/* Chevron Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 flex items-center justify-center border border-stone-200 hover:border-gold-400 bg-white hover:text-[#96762C] transition-all pointer-events-auto cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleNext}
                className="w-9 h-9 flex items-center justify-center border border-stone-200 hover:border-gold-400 bg-white hover:text-[#96762C] transition-all pointer-events-auto cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
