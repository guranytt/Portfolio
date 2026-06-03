import { Target, Lightbulb, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisionPage() {
  return (
    <div className="relative pt-24 pb-32 bg-[#FAF8F5] min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100/50 border border-gold-200/50 text-gold-800 text-sm font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            Global Vision
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-royal-950 tracking-tight leading-tight mb-8">
            Shaping the Future of <span className="font-semibold text-royal-800">Industry & Innovation</span>
          </h1>
          
          <p className="text-lg text-royal-700/80 leading-relaxed">
            Our vision extends beyond mere business success. We are committed to building sustainable, scalable, and impactful solutions that drive global progress and empower local communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-royal-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-royal-950 mb-3">Strategic Excellence</h3>
            <p className="text-royal-700/80 leading-relaxed">
              Pioneering operational frameworks that redefine efficiency and set new benchmarks for excellence across diverse sectors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-royal-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-royal-950 mb-3">Innovation Engine</h3>
            <p className="text-royal-700/80 leading-relaxed">
              Investing heavily in research and transformative technologies to stay ahead of the curve and solve complex tomorrow's challenges.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-royal-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-royal-950 mb-3">Global Impact</h3>
            <p className="text-royal-700/80 leading-relaxed">
              Expanding our footprint selectively to markets where our expertise can catalyze economic growth and social development.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-royal-950 text-white rounded-full font-medium tracking-wide hover:bg-gold-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-royal-900/20"
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 text-white/50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
