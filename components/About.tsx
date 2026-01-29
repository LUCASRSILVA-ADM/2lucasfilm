
import React from 'react';

const About: React.FC = () => {
  // Imagem fornecida pelo usuário para a biografia
  const foundersImageUrl = "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632050/Gemini_Generated_Image_emh5gmemh5gmemh5_ahrljj.png";

  return (
    <div className="container mx-auto px-6 max-w-7xl pt-2 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Founders Image */}
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] group order-2 lg:order-1">
          <img
            src={foundersImageUrl}
            alt="Lucas R. Silva e Lucas A. Mota"
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
               e.currentTarget.src = "https://images.unsplash.com/photo-1542204172-3c1274092b6a?auto=format&fit=crop&q=80&w=1000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-8 left-8">
            <div className="text-[9px] font-mono tracking-[0.5em] text-violet-500 uppercase mb-2">FOUNDERS & FILMMAKERS</div>
            <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">Lucas R. <span className="text-violet-500">&</span> Lucas A.</h3>
          </div>
        </div>
        
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-[0.8]">
              QUEM <span className="text-violet-500">SOMOS</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
            <p className="text-xl md:text-2xl text-white font-medium italic border-l-4 border-violet-600 pl-6 bg-white/5 py-4 pr-4">
              "Autodidatas por natureza e apaixonados por viagens."
            </p>
            <p>
              <span className="text-white font-bold">2LUCASFILM</span> é a materialização de um olhar único sobre o mundo. Lucas R. Silva e Lucas A. Mota desbravam destinos e capturam a essência de cada momento, elevando o vídeo ao status de obra de arte.
            </p>
            <p>
              Já atendemos grandes personalidades como José Roberto Marques, Pablo Marçal, Kaka Diniz e Luiza Possi, além de outras personalidades e empresários, construindo narrativas que impactam milhões através de um storytelling cinematográfico de elite.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 bg-slate-900/40 border border-white/5 rounded-sm flex flex-col items-center text-center group hover:border-violet-500 transition-all duration-500">
              <div className="text-violet-500 font-black text-6xl md:text-8xl mb-2">05</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-mono font-bold mb-6">PAÍSES</div>
              
              <div className="flex gap-4 text-2xl filter drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">
                 <span title="Brasil" className="hover:scale-125 transition-transform cursor-help">🇧🇷</span>
                 <span title="Chile" className="hover:scale-125 transition-transform cursor-help">🇨🇱</span>
                 <span title="Portugal" className="hover:scale-125 transition-transform cursor-help">🇵🇹</span>
                 <span title="Espanha" className="hover:scale-125 transition-transform cursor-help">🇪🇸</span>
                 <span title="Itália" className="hover:scale-125 transition-transform cursor-help">🇮🇹</span>
              </div>
            </div>
            <div className="p-8 bg-slate-900/40 border border-white/5 rounded-sm flex flex-col items-center text-center hover:border-violet-500 transition-all duration-500">
              <div className="text-violet-500 font-black text-6xl md:text-8xl mb-2">+120</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">CLIENTES ATENDIDOS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
