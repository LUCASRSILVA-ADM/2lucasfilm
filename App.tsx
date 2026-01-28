
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-violet-500/40">
      {/* Luzes de fundo violeta suaves */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-violet-900/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] bg-purple-900/10 blur-[160px] rounded-full"></div>
      </div>

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 md:py-40">
          <About />
        </section>
        
        <section id="skills" className="py-24 md:py-40 bg-slate-900/10 backdrop-blur-3xl border-y border-white/5">
          <Skills />
        </section>
        
        <section id="projects" className="py-24 md:py-40">
          <Projects />
        </section>
        
        <section id="contact" className="py-24 md:py-40 bg-slate-900/30">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
