import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  FileText,
  Volume2,
  Calendar,
  Sparkles,
  Search,
  ChevronRight,
  X,
  Compass,
  CornerDownRight,
  ExternalLink
} from "lucide-react";
import { portfolioItems } from "../data";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"All" | "speeches" | "projects" | "appearances" | "publications">("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters: { value: typeof activeFilter; label: string }[] = [
    { value: "All", label: "All Works" },
    { value: "projects", label: "Major Projects" },
    { value: "speeches", label: "Key Speeches" },
    { value: "publications", label: "Publications" },
    { value: "appearances", label: "Appearances" }
  ];

  const filteredItems = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category: PortfolioItem["category"]) => {
    switch (category) {
      case "speeches":
        return <Volume2 className="w-4.5 h-4.5 text-gold-500" />;
      case "projects":
        return <Compass className="w-4.5 h-4.5 text-gold-500" />;
      case "publications":
        return <BookOpen className="w-4.5 h-4.5 text-gold-500" />;
      case "appearances":
        return <FileText className="w-4.5 h-4.5 text-gold-500" />;
    }
  };

  const getCategoryLabel = (category: PortfolioItem["category"]) => {
    switch (category) {
      case "speeches": return "Executive Address";
      case "projects": return "Corporate Venture";
      case "publications": return "Risk Statement / Study";
      case "appearances": return "Keynote Address";
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#FAF8F5] text-royal-950 px-6 lg:px-12 relative overflow-hidden text-left">
      {/* Editorial Watermark */}
      <div className="absolute right-[-10rem] top-[5rem] font-serif text-[18rem] text-stone-100/40 select-none font-bold rotate-90 pointer-events-none uppercase">
        ARCHIVUM
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading & Introduction */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-[#96762C] uppercase">
              <Compass className="w-4 h-4 text-[#B3923C]" />
              <span>CORPORATE ARCHIVES</span>
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              <span>CURATED WORKS</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-royal-950">
              Executive Focus & <span className="italic block sm:inline font-light text-stone-500">Corporate Records</span>
            </h2>
          </div>

          <div className="max-w-md md:text-right">
            <p className="font-sans font-light text-stone-500 text-sm sm:text-base leading-relaxed">
              Explore the documented publications, risk blueprints, global logistics models, and tax consultations authored by Dr. Edidiong Dominic Nkanta.
            </p>
          </div>
        </div>

        {/* Category Filters with thin border styling */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-stone-200 pb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 border ${
                activeFilter === f.value
                  ? "bg-royal-950 border-royal-950 text-white shadow-sm font-semibold"
                  : "border-stone-200 bg-white hover:border-[#C5A880] text-stone-600 hover:text-royal-950"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Archive grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedItem(item)}
                className="group bg-white border border-stone-200 rounded-none overflow-hidden cursor-pointer flex flex-col hover:border-gold-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Featured Image Frame in Full Aspect Ratio */}
                {item.featuredImage ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-950 border-b border-gold-500/10 flex items-center justify-center p-2">
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain filter brightness-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs border border-stone-200/50 p-2 text-royal-950">
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>
                ) : (
                  // Typographic alternative for speech-only items to evoke vintage editorial pamphlets
                  <div className="h-48 sm:h-52 bg-gradient-to-br from-royal-900 to-royal-950 flex flex-col justify-between p-6 border-b border-royal-800 text-left relative overflow-hidden select-none">
                    <div className="absolute right-[-2rem] top-[-2rem] font-serif font-black text-6xl text-royal-800/20">
                      “
                    </div>
                    
                    <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase block">
                      {getCategoryLabel(item.category)}
                    </span>

                    {item.quote ? (
                      <p className="font-serif italic text-sm text-royal-200 font-light leading-relaxed mb-4">
                        "{item.quote.text.substring(0, 100)}..."
                      </p>
                    ) : (
                      <p className="font-serif italic text-sm text-[#E5DAAF] font-light leading-relaxed mb-4">
                        "The conservation of historic crafts is not a retrospective indulgence; it is a blueprint for continuous resilience."
                      </p>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-[#C5A880]" />
                      <span className="font-mono text-[9px] text-royal-400 tracking-wider font-light uppercase">
                        Official Transcript Available
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    {/* Header Details */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        {item.featuredImage && getCategoryIcon(item.category)}
                        <span className="font-mono text-[9px] tracking-widest text-[#96762C] uppercase font-light">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 font-mono text-[9px] text-stone-400">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-serif text-xl font-normal text-royal-950 tracking-tight mb-2 group-hover:text-gold-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="font-mono text-[10px] tracking-wide text-stone-400 font-light mb-4">
                      {item.subtitle}
                    </p>

                    {/* Brief Summary */}
                    <p className="text-stone-500 font-sans font-light text-xs sm:text-sm leading-relaxed mb-6">
                      {item.summary}
                    </p>
                  </div>

                  {/* Read More Trigger Line */}
                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-widest uppercase font-medium text-stone-800 group-hover:text-[#B3923C] group-hover:pl-1 transition-all duration-300">
                      Examine Curated Files
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Drawer Overlay for reading selected portfolio piece */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden select-none">
              {/* Dark backglass */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-royal-950/70 backdrop-blur-sm pointer-events-auto"
              />

              {/* Central Drawer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative bg-[#FAF8F5] border border-gold-300 max-w-4xl w-full max-h-[85vh] rounded-none shadow-2xl z-11 overflow-y-auto pointer-events-auto"
              >
                
                {/* Header Decoration Line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-gold-500 via-[#C5A880] to-[#E5DAAF]" />

                {/* Close Button top corner */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-white border border-stone-200 hover:border-gold-400 text-stone-600 hover:text-royal-950 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Large Banner Image inside Modal */}
                {selectedItem.featuredImage && (
                  <div className="relative h-64 md:h-80 w-full overflow-hidden bg-stone-900 border-b border-stone-200">
                    <img
                      src={selectedItem.featuredImage}
                      alt={selectedItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <span className="font-mono text-[9px] tracking-widest text-[#E5DAAF] uppercase block mb-1">
                        {getCategoryLabel(selectedItem.category)}
                      </span>
                      <h2 className="font-serif text-2xl md:text-4xl font-normal tracking-tight">
                        {selectedItem.title}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Modal Detail Body */}
                <div className="px-6 py-8 md:p-10 text-left">
                  
                  {/* Title block if not in banner */}
                  {!selectedItem.featuredImage && (
                    <div className="border-b border-stone-200 pb-6 mb-6">
                      <span className="font-mono text-[10px] tracking-widest text-[#96762C] uppercase block mb-2 font-medium">
                        ✦ {getCategoryLabel(selectedItem.category)}
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl font-normal text-royal-950 tracking-tight leading-tight mb-2">
                        {selectedItem.title}
                      </h2>
                      <p className="font-mono text-[11px] tracking-widest text-stone-400 uppercase font-light">
                        {selectedItem.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Metadata Details */}
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-stone-500 text-xs py-3 border-y border-stone-200/60 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B3923C]" />
                      <span>Release Date: {selectedItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3923C]" />
                      <span>Registry Type: Verified Corporate Record</span>
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Extensive Transcript Narrative (col-span 8) */}
                    <div className="lg:col-span-8">
                      <p className="font-serif italic text-base md:text-lg text-stone-700 font-light leading-relaxed mb-6 border-b border-stone-100 pb-6 select-text selection:bg-[#E5DAAF]/50">
                        {selectedItem.summary}
                      </p>
                      
                      <div className="text-[#121217] font-sans font-light text-sm md:text-base leading-relaxed tracking-wide space-y-4 select-text selection:bg-[#E5DAAF]/50">
                        {selectedItem.body.split("\n\n").map((para, pIdx) => (
                          <p key={pIdx} className="flex gap-3">
                            <CornerDownRight className="w-4.5 h-4.5 text-gold-500 shrink-0 mt-1 max-md:hidden opacity-40" />
                            <span>{para}</span>
                          </p>
                        ))}
                      </div>

                      {/* Display tags */}
                      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-stone-200">
                        {selectedItem.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white border border-stone-200 text-[#96762C] font-mono text-[9px] tracking-widest uppercase rounded-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Exquisite Quotes, Sidebars for Citation & Document Signatures (col-span 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      
                      {selectedItem.quote && (
                        <div className="p-5 bg-white border border-[#C5A880]/30 border-l-[3px] border-l-[#C5A880] text-left">
                          <p className="font-serif italic text-xs md:text-sm text-stone-700 leading-relaxed mb-3">
                            "{selectedItem.quote.text}"
                          </p>
                          <span className="font-mono text-[9px] text-[#96762C] tracking-wide uppercase font-light">
                            — {selectedItem.quote.source}
                          </span>
                        </div>
                      )}

                      <div className="p-5 border border-stone-200 bg-white flex flex-col gap-4 text-xs font-mono text-stone-600">
                        <h4 className="font-mono text-[10px] text-royal-950 font-bold border-b border-stone-100 pb-2 uppercase tracking-widest">
                          Archival Status
                        </h4>
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase">Authorization</p>
                          <p className="text-royal-950 text-[11px] font-medium">HRH Crown Secretariat</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase">Geographical Scope</p>
                          <p className="text-royal-950 text-[11px] font-medium">Valerius Realm & Sovereign Partners</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase">Access Classification</p>
                          <p className="text-royal-950 text-[11px] font-medium">Public Trust Standard-11</p>
                        </div>
                        
                        <div className="mt-2 pt-2 border-t border-stone-100">
                          <button className="w-full py-2 bg-royal-950 hover:bg-royal-900 border border-royal-950 hover:border-royal-900 text-white font-mono text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 font-medium select-none cursor-pointer">
                            <span>Request Printed Copy</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
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
