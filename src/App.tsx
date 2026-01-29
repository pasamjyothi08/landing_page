import Header from './components/Header';
import Hero from './components/Hero';
import NotYourAverage from './components/NotYourAverage';
import WhyChooseUs from './components/WhyChooseUs';
import PhotoGallery from './components/PhotoGallery';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import HappyClients from './components/HappyClients';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NotYourAverage />
      <WhyChooseUs />
      <PhotoGallery />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
