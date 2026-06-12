'use client';

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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Showcase3D />
      <Process />
      <WhyChoose />
      <Certifications />
      <ClientSlider />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
