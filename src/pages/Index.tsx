
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProductsSection from '../components/ProductsSection';
import WaUArtSection from '../components/WaUArtSection';
import NFTArtSection from '../components/NFTArtSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
      <div className="min-h-screen bg-background text-foreground">
          <Header/>
          <main>
              <HeroSection/>
              <AboutSection/>
              <ExperienceSection/>
              <ProductsSection/>
              <WaUArtSection/>
              <NFTArtSection/>
              <ContactSection/>
          </main>
          <Footer/>
      </div>
  );
};

export default Index;
