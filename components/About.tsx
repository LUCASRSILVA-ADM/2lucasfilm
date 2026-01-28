
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative group aspect-[4/5] overflow-hidden rounded-sm border border-white/5">
          <div className="absolute inset-0 bg-violet-900/10 mix-blend-overlay z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
            alt="Equipe Lucas & Lucas"
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] tracking-[0.4em] text-violet-400 uppercase">
            [ MODO_FILME_ATIVO ]
          </div>
        </div>
        
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
              A Alma <span className="text-violet-500">Visual</span>
            </h2>
            <div className="h-[2px] w-16 bg-violet-600"></div>
          </div>
          
          <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
            <p>
              Com uma década de estrada, Lucas consolidou sua voz através de documentários e curtas premiados. Atuando como Diretor de Fotografia, assinou a estética de projetos para nomes como <span className="text-white font-medium">Pablo Marçal, Kaka Diniz e Luisa Possi</span>.
            </p>
            <p>
              A busca pelo "Incredible Place" não é apenas sobre o destino, mas sobre a narrativa que ele carrega. Hoje, ao lado de seu parceiro Lucas, eles transformam hospedagens de luxo e cenários naturais em experiências cinematográficas puras.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-white/5">
            <div className="space-y-1">
              <div className="text-white font-black text-4xl md:text-5xl">10+</div>
              <div className="text-slate-500 text-[9px] uppercase tracking-[0.3em] font-mono">Anos de Lente</div>
            </div>
            <div className="space-y-1">
              <div className="text-white font-black text-4xl md:text-5xl">500k+</div>
              <div className="text-slate-500 text-[9px] uppercase tracking-[0.3em] font-mono">Frames/Dia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
