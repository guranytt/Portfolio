import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crown, Menu, X, Mail } from "lucide-react";
import { profileDetails } from "../data";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "biography", label: "Chronology" },
    { id: "philosophy-scroll", label: "Pillars" },
    { id: "legacy", label: "Enterprise" },
    { id: "portfolio", label: "Portfolio" },
    { id: "media", label: "Gallery" },
    { id: "testimonials", label: "Endorsements" }
  ];

  // Track page scroll coordinates for highlighting active section and updating background
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar Glassy Background trigger
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section Highlight logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset threshold

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec) {
          const offsetTop = sec.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEl = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 85; // offset navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 border-b select-none ${
          isScrolled
            ? "bg-royal-950/90 backdrop-blur-md border-gold-500/10 py-3.5 shadow-xl shadow-royal-950/20"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Branding */}
          <button
            onClick={() => scrollToEl("hero")}
            className="flex items-center gap-2 text-left pointer-events-auto group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-royal-950 shadow-md group-hover:shadow-gold-500/10 transition-shadow">
              <Crown className="w-5 h-5 text-royal-950" />
            </div>
            <div>
              <span className="font-serif text-base tracking-wide font-normal max-sm:hidden block text-royal-100 uppercase">
                {profileDetails.name}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase block leading-none">
                CEO Secretariat
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link row */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToEl(link.id)}
                className="relative py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                <span className={`${
                  activeSection === link.id
                    ? "text-gold-400 font-semibold"
                    : "text-royal-300 hover:text-royal-100"
                }`}>
                  {link.label}
                </span>

                {/* Animated lower underline */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-underline-bar"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Action button */}
          <div className="hidden lg:flex items-center">
            <a
              href={`mailto:${profileDetails.contactEmail}`}
              className="px-5 py-2.5 bg-royal-900 hover:bg-royal-800 border border-gold-500/20 hover:border-gold-400/40 text-gold-300 font-mono text-[9px] tracking-widest uppercase rounded-xs transition-all duration-300 flex items-center gap-1.5 pointer-events-auto"
            >
              <Mail className="w-3.5 h-3.5 text-[#B3923C]" />
              <span>Contact Secretariat</span>
            </a>
          </div>

          {/* Mobile Menu Action trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-royal-200 hover:text-[#B3923C] hover:bg-royal-900 border border-royal-800 rounded-xs transition-colors pointer-events-auto cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Offscreen Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-[69px] inset-x-0 z-30 bg-royal-950 border-b border-gold-500/10 shadow-2xl overflow-hidden py-6 px-6 lg:hidden flex flex-col gap-5 text-left pointer-events-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToEl(link.id)}
                className={`py-2 text-left font-mono text-[11px] tracking-widest uppercase transition-colors pointer-events-auto cursor-pointer border-b border-royal-900/50 pb-2 ${
                  activeSection === link.id ? "text-gold-400 font-semibold" : "text-royal-300"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href={`mailto:${profileDetails.contactEmail}`}
              className="w-full text-center py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-royal-950 font-mono text-[10px] tracking-widest uppercase font-semibold transition-colors pointer-events-auto block"
            >
              Contact Office
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
