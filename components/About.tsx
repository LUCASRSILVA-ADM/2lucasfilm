
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* The two Lucas: Filmmakers and Social Media Creators */}
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl group">
          <img
            src="input_file_0.png"
            alt="Lucas R. Silva e Lucas A. Mota"
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8">
            <div className="text-[10px] font-mono tracking-[0.6em] text-violet-500 uppercase mb-2">FOUNDERS // DIRECTORS</div>
            <h3 className="text-2xl font-black italic uppercase text-white tracking-tighter">Lucas R. & Lucas A.</h3>
          </div>
        </div>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-[0.8]">
              O QUE <span className="text-violet-500">SOMOS</span>
            </h2>
            <p className="text-violet-400 font-mono text-[10px] uppercase tracking-[0.5em] pt-4">2LUCASFILM // O NOVO OLHAR</p>
          </div>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p className="text-2xl text-white font-medium italic border-l-4 border-violet-600 pl-6">
              "Autodidatas por natureza e apaixonados por viagens."
            </p>
            <p>
              <span className="text-white font-bold">Lucas R. Silva e Lucas A. Mota</span> vêm desbravando destinos e mostrando através de suas lentes um novo olhar. Unindo a paixão por contar histórias à técnica cinematográfica refinada, transformamos viagens em experiências eternas.
            </p>
            <p>
              Nossa história continua a cada frame, capturando a alma de cada lugar. No portfólio, carregamos parcerias com grandes nomes como <span className="text-white font-semibold">José Roberto Marques, Pablo Marçal, Kaka Diniz e Luiza Possi</span>, além de diversas outras personalidades e influenciadores de impacto global.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="p-8 bg-white/5 border border-white/10 flex flex-col items-center text-center">
              <div className="text-violet-500 font-black text-6xl mb-2">5</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">PAÍSES</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 flex flex-col items-center text-center">
              <div className="text-violet-500 font-black text-6xl mb-2">+120</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">CLIENTES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
