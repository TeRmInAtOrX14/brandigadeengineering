import '@/styles/globals.css';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Industries */}
      <Industries />

      {/* Interactive 3D Showcase */}
      <Showcase3D />

      {/* Process Timeline */}
      <Process />

      {/* Why Choose */}
      <WhyChoose />

      {/* Certifications */}
      <Certifications />

      {/* Client Logos Slider */}
      <ClientSlider />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

// Import all components (they will be generated next)
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Showcase3D from '../components/Showcase3D';
import Process from '../components/Process';
import WhyChoose from '../components/WhyChoose';
import Certifications from '../components/Certifications';
import ClientSlider from '../components/ClientSlider';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
