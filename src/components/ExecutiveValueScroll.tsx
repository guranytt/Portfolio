import React from "react";
import { motion } from "motion/react";
import { Plane, Cpu, ShieldCheck, Heart, ArrowRight, Truck, Globe } from "lucide-react";
import { profileDetails, drNkantaPortrait, businessImg1, businessImg3, businessImg4, businessImg5 } from "../data";
import GoldenFrame from "./GoldenFrame";

interface ScrollSectionItem {
  id: string;
  category: string;
  icon: React.ReactNode;
  heading: string;
  quote: string;
  body: string;
  image: string;
  imgOnRight: boolean;
}

const scrollSections: ScrollSectionItem[] = [
  {
    id: "philosophy-faith",
    category: "FOUNDATIONAL MANDATE",
    icon: <Heart className="w-5 h-5 text-gold-400" />,
    heading: "The Language of Adding Value to Life",
    quote: `"${profileDetails.introQuote}"`,
    body: "Dr. Nkanta’s primary business philosophy starts with active faith. He views diversified corporate enterprise as a practical vessel to meet Christ—by actively creating sustainable employment and ensuring staff are compensated fairly, respectfully, and promptly.",
    image: drNkantaPortrait,
    imgOnRight: true // First picture is on the right
  },
  {
    id: "aviation-concierge",
    category: "GLOBAL CONNECTIVITY",
    icon: <Plane className="w-5 h-5 text-gold-400" />,
    heading: "FlyBooking Arena World Class Platform",
    quote: '"Providing elite aviation concierge, booking systems, and absolute security."',
    body: "A high-fidelity online ecosystem designed for flight bookings, luxury hotel reservations, and swift visa assistance. FlyBooking Arena bridges international travel needs with localized expertise, redefining passenger convenience.",
    image: businessImg1,
    imgOnRight: false // Second picture is on the left
  },
  {
    id: "naija-stores",
    category: "E-COMMERCE MARKETPLACE",
    icon: <Globe className="w-5 h-5 text-gold-400" />,
    heading: "Naija Online Stores",
    quote: '"Empowering local vendors to reach a continental market seamlessly."',
    body: "A secure online marketplace empowering thousands of local vendors to catalog and trade goods directly across Nigeria. Bridging the digital divide for retail and wholesale commerce with robust logistics integration.",
    image: businessImg4,
    imgOnRight: true // Third picture is on the right
  },
  {
    id: "gsc-logistics",
    category: "GSC LOGISTICS EXPANSION",
    icon: <Truck className="w-5 h-5 text-gold-400" />,
    heading: "DHL Licensed Partnership & Global Commerce",
    quote: '"Providing High-Speed Air Freight & Authorized Outlets Supporting SMEs."',
    body: "Secured a prestigious DHL Authorized Service Partner license in 2024. GSC Logistics now operates DHL service outlets across Lagos and parts of Ogun State, giving SMEs faster access to international shipping across over 220 countries.",
    image: businessImg5,
    imgOnRight: false // Fourth picture is on the left
  },
  {
    id: "software-digital",
    category: "DIGITAL ARCHITECTURE",
    icon: <Cpu className="w-5 h-5 text-gold-400" />,
    heading: "Zentech Advanced Software Engineering",
    quote: '"Empowering modern commercial enterprises with transparent software tools."',
    body: "Serving as the official implementation specialist for world-class Zoho, RetailMan, and QuickBooks digital ecosystems. Zentech Software Hub builds the secure digital audit trails that keep dynamic businesses secure.",
    image: businessImg3, // High-quality board meeting of Dr. Nkanta - replaced stock Unsplash image
    imgOnRight: true // Fifth picture is on the right
  }
];

// Animation presets
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    x: 25, // Reveal horizontally from the side
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 110
    }
  }
};

interface SecretRevealTextProps {
  text: string;
  className?: string;
}

// Splits text into words to animated them horizontally on scroll reveal
function ScrollRevealWords({ text, className }: SecretRevealTextProps) {
  const words = text.split(" ");
  
  return (
    <motion.span 
      variants={containerVariants}
      className={`inline-flex flex-wrap gap-x-1.5 gap-y-1 ${className || ""}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="overflow-hidden inline-block py-0.5">
          <motion.span 
            variants={wordVariants} 
            className="inline-block origin-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function ExecutiveValueScroll() {
  return (
    <section 
      id="philosophy-scroll" 
      className="relative bg-gradient-to-b from-[#FAF8F5] via-[#f7f4ed] to-[#FAF8F5] py-24 px-6 lg:px-12 overflow-hidden border-t border-b border-stone-200"
    >
      {/* Decorative Traditional Watermark/Geometrics */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4c185_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-[radial-gradient(circle_at_center,rgba(212,193,133,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.25em] text-[#96762C] uppercase font-semibold block mb-4"
          >
            ✦ VISUAL CHRONOLOGY & VALUES ✦
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-royal-950 tracking-tight leading-none mb-6"
          >
            The Pillars of <span className="italic font-light text-stone-500">Corporate Stewardship</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gold-500/60 mx-auto mt-6" 
          />
        </div>

        {/* Alternating Scroll Content List */}
        <div className="space-y-32 md:space-y-48">
          {scrollSections.map((item, index) => (
            <div 
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
            >
              
              {/* Picture Column (First Right, Second Left, Alternating) */}
              <div 
                className={`col-span-1 lg:col-span-6 ${
                  item.imgOnRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }} // Triggers scroll-reveal repeatedly
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full relative shadow-2xl"
                >
                  <GoldenFrame title={item.heading} subtitle={item.category}>
                    <div className="w-full h-[360px] sm:h-[420px] bg-stone-950 border-b border-gold-500/10 flex items-center justify-center p-2.5 overflow-hidden relative group">
                      <div className="absolute inset-0 bg-stone-900 animate-pulse" />
                      <img 
                        src={item.image} 
                        alt={item.heading}
                        className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-105 contrast-95 transition-transform duration-700 hover:scale-[1.02] relative z-10"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-gold-500/10 mix-blend-overlay" />
                    </div>
                  </GoldenFrame>

                  {/* Absolute elegant numbers signifier */}
                  <div className={`absolute -top-6 ${item.imgOnRight ? "-left-4" : "-right-4"} bg-[#3f2e10] text-[#FAF8F5] font-serif text-xs px-3 py-1.5 tracking-wider border border-[#d4c185]/30 shadow-lg rounded-xs z-30`}>
                    CHAPTER 0{index + 1}
                  </div>
                </motion.div>
              </div>

              {/* Text Column with Words Staggered Reveal */}
              <div 
                className={`col-span-1 lg:col-span-6 flex flex-col justify-center text-left ${
                  item.imgOnRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }} // Repeated triggers on scroll
                  className="space-y-6"
                >
                  {/* Category Indicator */}
                  <motion.div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-full bg-gold-100/60 border border-gold-500/15 flex items-center justify-center text-gold-700">
                      {item.icon}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-[#96762C] uppercase font-bold">
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Title Word Reveal */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-royal-950 tracking-tight leading-snug">
                    <ScrollRevealWords text={item.heading} />
                  </h3>

                  {/* Editorial Accent Quote */}
                  <div className="pl-4 border-l-2 border-[#d4c185] py-1 bg-gold-200/[0.08]" id={`quote-frame-${item.id}`}>
                    <p className="font-serif italic text-[#5b4317] text-sm md:text-base font-light leading-relaxed">
                      <ScrollRevealWords text={item.quote} className="italic text-stone-700" />
                    </p>
                  </div>

                  {/* Descriptive Body Copy */}
                  <p className="text-zinc-600 font-sans font-light text-sm md:text-base leading-relaxed">
                    <ScrollRevealWords text={item.body} />
                  </p>

                  {/* Small Action Signifier */}
                  <motion.div 
                    variants={containerVariants}
                    className="pt-2"
                  >
                    <a
                      href={`mailto:${profileDetails.contactEmail}`}
                      className="inline-flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#96762C] hover:text-[#3f2e10] uppercase font-bold group border-b border-[#d4c185]/40 pb-1 transition-colors pointer-events-auto"
                    >
                      <span>Inquire regarding this chapter</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>

                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
