
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Documentaries from './components/Documentaries';
import Featured from './components/Featured';
import VerticalContent from './components/VerticalContent';
import Usability from './components/Usability';
import About from './components/About';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'documentaries', 'featured', 'vertical', 'usability', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection logic for better accuracy
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden selection:bg-violet-500/40 font-inter">
      <Navbar activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="documentaries" className="bg-black">
          <Documentaries />
        </section>

        <section id="featured" className="bg-black">
          <Featured />
        </section>

        <section id="vertical" className="bg-black">
          <VerticalContent />
        </section>

        <section id="usability" className="bg-black">
          <Usability />
        </section>
        
        <section id="about" className="bg-black border-t border-white/5">
          <About />
        </section>
      </main>
      
      {/* Footer and Chatbot removed per request */}
    </div>
  );
};

export default App;
