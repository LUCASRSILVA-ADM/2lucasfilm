
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Documentaries from './components/Documentaries';
import Featured from './components/Featured';
import VerticalContent from './components/VerticalContent';
import Usability from './components/Usability';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const handleGlobalInteraction = () => {
    if (!isAudioEnabled) {
      setIsAudioEnabled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleGlobalInteraction);
    window.addEventListener('touchstart', handleGlobalInteraction);

    const handleScroll = () => {
      const sections = ['home', 'documentaries', 'featured', 'vertical', 'usability', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);
    };
  }, [isAudioEnabled]);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden selection:bg-violet-500/40 font-inter">
      <Navbar activeSection={activeSection} />

      <main>
        <section id="home" className="relative">
          <Hero isAudioEnabled={isAudioEnabled} />
        </section>
        
        <section id="documentaries" className="bg-black relative z-20">
          <Documentaries isAudioEnabled={isAudioEnabled} />
        </section>

        <section id="featured" className="bg-black relative z-20">
          <Featured />
        </section>

        <section id="vertical" className="bg-black relative z-20 overflow-hidden">
          <VerticalContent isAudioEnabled={isAudioEnabled} />
        </section>

        <section id="usability" className="bg-black relative z-20">
          <Usability />
        </section>
        
        <section id="about" className="bg-black border-t border-white/5 relative z-20">
          <About />
        </section>

        {/* Seção de contato removida do mobile */}
        <section id="contact" className="bg-black relative z-20 hidden lg:block">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
