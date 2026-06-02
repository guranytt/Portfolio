import React from "react";
import { Crown } from "lucide-react";

interface GoldenFrameProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function GoldenFrame({ children, title, subtitle }: GoldenFrameProps) {
  return (
    <div className="relative p-3 sm:p-5 md:p-6 bg-gradient-to-tr from-[#5b4317] via-[#d4c185] to-[#785b20] border-[3px] border-[#3f2e10] shadow-[0_25px_60px_-15px_rgba(13,14,17,0.7)] rounded-xs overflow-hidden select-none group w-full max-w-full">
      
      {/* Outer Metallic Gold Trim / Highlight Lines */}
      <div className="absolute inset-[2px] border border-[#f4edd8]/40 pointer-events-none z-10" />
      <div className="absolute inset-[6px] border border-[#5b4317]/50 pointer-events-none z-10" />

      {/* Ornate Gold Corner Filigree Brackets */}
      {/* Top Left */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#faf8f5] pointer-events-none z-20 flex items-center justify-center">
        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />
      </div>
      {/* Top Right */}
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#faf8f5] pointer-events-none z-20 flex items-center justify-center">
        <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#faf8f5] pointer-events-none z-20 flex items-center justify-center">
        <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#faf8f5] pointer-events-none z-20 flex items-center justify-center">
        <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />
      </div>

      {/* Decorative Royal Motif on top of the border */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#3f2e10]/80 px-2.5 py-0.5 rounded-full border border-[#d4c185]/30 flex items-center gap-1 z-20 scale-75 shadow-md">
        <Crown className="w-3 h-3 text-[#d4c185]" />
        <span className="font-mono text-[7px] tracking-widest text-[#f4edd8] uppercase font-light">REGISTRAR</span>
      </div>

      {/* Elegant Ivory/Cream Mount (Matte Board) Inner Core */}
      <div className="p-2 sm:p-3 md:p-4 bg-[#FAF9F5] border-[2px] border-[#3f2e10] shadow-[inset_0_4px_12px_rgba(13,14,17,0.15)] flex flex-col items-center">
        
        {/* Fine inner gold lining inside the matte border */}
        <div className="w-full relative p-1 bg-white border border-[#d4c185]/40 shadow-inner">
          
          {/* Main Visual Node Holding Content */}
          <div className="bg-stone-950 overflow-hidden w-full flex items-center justify-center relative shadow-md">
            {children}
          </div>
          
          {/* Fine inner gold bevel detail line underneath the photo */}
          <div className="absolute inset-0 border border-[#785b20]/20 pointer-events-none" />
        </div>

        {/* Traditional Brass Museum Nameplate at the bottom of the frame matte */}
        {(title || subtitle) && (
          <div className="mt-4 px-5 py-2 bg-gradient-to-b from-[#f4edd8] via-[#e5daaf] to-[#d4c185] border border-[#785b20]/60 shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center max-w-[90%] rounded-xs select-text">
            {title && (
              <h4 className="font-serif text-xs md:text-sm text-[#3f2e10] font-bold tracking-tight uppercase leading-none">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="font-mono text-[8px] tracking-widest text-[#5b4317] uppercase font-medium mt-0.5 leading-none">
                {subtitle}
              </p>
            )}
          </div>
        )}

      </div>

      {/* Subtle dust overlay for authentic texture */}
      <div className="absolute inset-0 bg-radial-gradient(circle,_transparent_50%,_rgba(63,46,16,0.15)_100%) pointer-events-none" />
    </div>
  );
}
