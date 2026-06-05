import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function ReferringPage() {
  return (
    <div className="relative pt-24 pb-32 bg-[#FAF8F5] min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100/50 border border-gold-200/50 text-gold-800 text-sm font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            Official References
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-royal-950 tracking-tight leading-tight mb-8">
            Referring <span className="font-semibold text-royal-800">Partners & Endorsements</span>
          </h1>
          
          <p className="text-lg text-royal-700/80 leading-relaxed">
            Our network of trusted partners, official references, and associated entities that collaborate in our global vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-royal-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-royal-950 mb-3">Corporate References</h3>
            <p className="text-royal-700/80 leading-relaxed mb-6">
              Information regarding our institutional and corporate references serving as official backing for our business initiatives.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gold-700 font-medium hover:text-gold-600 transition-colors">
              View details <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-royal-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-royal-950 mb-3">Affiliated Entities</h3>
            <p className="text-royal-700/80 leading-relaxed mb-6">
              A comprehensive directory of affiliated business ventures, partner organizations, and structural subsidiaries.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gold-700 font-medium hover:text-gold-600 transition-colors">
              View details <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-royal-950 text-white rounded-full font-medium tracking-wide hover:bg-gold-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-royal-900/20"
          >
            Request Official Reference
            <ArrowRight className="w-5 h-5 text-white/50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
