import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import ExecutiveValueScroll from "./components/ExecutiveValueScroll";
import Legacy from "./components/Legacy";
import Portfolio from "./components/Portfolio";
import MediaGallery from "./components/MediaGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-royal-950 font-sans selection:bg-gold-200 selection:text-royal-950 antialiased overflow-x-hidden">
      {/* Premium Navigation Header */}
      <Navigation />

      {/* Main Structural Context Sections */}
      <main className="relative">
        <Hero />
        <Biography />
        <ExecutiveValueScroll />
        <Legacy />
        <Portfolio />
        <MediaGallery />
        <Testimonials />
      </main>

      {/* Elegant Editorial Footer */}
      <Footer />
    </div>
  );
}
