import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FloorPlans from './components/FloorPlans';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-offwhite overflow-x-hidden selection:bg-gold selection:text-primary">
      {/* Film grain noise overlay for premium texture */}
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      <AboutSection />
      <FloorPlans />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
