import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import ReferringPage from "./pages/ReferringPage";
import Contact from "./components/Contact";

export const metadata = {
  title: "Dr Edidiong Dominic Nkanta",
  description: "Official biography and portfolio of Dr Edidiong Dominic Nkanta",
  verification: {
    google: "qt0gfOyC-hmllBg0R8EzCULtTX4vjzZxX2dTPoZ_E-E",
  },
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#FAF8F5] text-royal-950 font-sans selection:bg-gold-200 selection:text-royal-950 antialiased overflow-x-hidden pt-[69px]">
        {/* Premium Navigation Header */}
        <Navigation />

        {/* Main Structural Context Sections */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/referring" element={<ReferringPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Elegant Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
