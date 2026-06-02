import { Crown, Mail, MapPin, ArrowUp, Compass } from "lucide-react";
import { profileDetails } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-royal-950 text-royal-100 border-t border-gold-500/10 py-16 px-6 lg:px-12 relative overflow-hidden select-none text-left">
      {/* Editorial aesthetic coordinates overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,170,92,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,170,92,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-royal-800/80">
          
          {/* Logo & title (Col span 5) */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-[#B3923C]/10 border border-[#B3923C]/40 flex items-center justify-center text-gold-400">
                <Crown className="w-5 h-5" />
              </span>
              <span className="font-serif text-lg tracking-wide uppercase">
                {profileDetails.name}
              </span>
            </div>
            
            <p className="font-sans font-light text-royal-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Official online registry and archive of Dr. Edidiong Dominic Nkanta. Established for corporate record-keeping, multi-sector enterprise portfolios, and philanthropy.
            </p>
            
            {/* Social links row */}
            <div className="flex items-center gap-4">
              <a
                href={profileDetails.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs border border-royal-800 hover:border-[#c2aa5c] hover:bg-royal-900/50 flex items-center justify-center text-royal-300 hover:text-gold-300 transition-all duration-300 font-mono text-xs"
                title="Follow Dr. Nkanta on X"
              >
                𝕏
              </a>
              <a
                href={profileDetails.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs border border-royal-800 hover:border-[#c2aa5c] hover:bg-royal-900/50 flex items-center justify-center text-royal-300 hover:text-gold-300 transition-all duration-300 font-mono text-xs"
                title="Connect on Facebook"
              >
                FB
              </a>
              <a
                href={profileDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs border border-royal-800 hover:border-[#c2aa5c] hover:bg-royal-900/50 flex items-center justify-center text-royal-300 hover:text-gold-300 transition-all duration-300 font-mono text-xs"
                title="Connect on LinkedIn"
              >
                In
              </a>
              <a
                href={profileDetails.socials.guardianOffice}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs border border-royal-800 hover:border-[#c2aa5c] hover:bg-royal-900/50 flex items-center justify-center text-royal-300 hover:text-gold-300 transition-all duration-300 flex items-center justify-center"
                title="Official Portal Gateway"
              >
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick links & contact details split (Col span 7) */}
          <div className="md:col-span-7 flex flex-col md:items-end justify-center">
            
            {/* Crown Offices Contact Panel */}
            <div className="flex flex-col">
              <span className="font-mono text-[9px] tracking-widest text-[#B3923C] uppercase mb-4 block">
                ✦ Secretariat Contact
              </span>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${profileDetails.contactEmail}`}
                  className="inline-flex items-center gap-2.5 text-xs text-royal-300 hover:text-gold-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-500/80 shrink-0" />
                  <span>{profileDetails.contactEmail}</span>
                </a>
                
                <div className="flex items-start gap-2.5 text-xs text-royal-400 max-w-sm">
                  <MapPin className="w-4 h-4 text-gold-500/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{profileDetails.officeAddress}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Lower footer copyright bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-10 text-xs font-mono text-royal-400">
          <div>
            <span>© {new Date().getFullYear()} Dr. Edidiong Dominic Nkanta. All Rights Protected.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-gold-300 cursor-pointer">Protocol Policies</span>
            <span className="hover:text-gold-300 cursor-pointer">Terms of Record Access</span>
            
            {/* Scroll back to top */}
            <button
              onClick={handleScrollToTop}
              className="w-8 h-8 rounded-xs bg-[#B3923C]/5 border border-[#B3923C]/20 text-[#D4C185] hover:text-[#FAF8F5] hover:bg-[#B3923C]/20 transition-all duration-300 flex items-center justify-center cursor-pointer pointer-events-auto"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
