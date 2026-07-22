import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FloorPlans from "./components/FloorPlans";
import ImageGallery from "./components/ImageGallery";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

function App() {
  // Initialize Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBFBFB] text-[#0A0A0A] selection:bg-[#FFB800] selection:text-black">
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <AboutSection />
      <FloorPlans />
      <ImageGallery />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
