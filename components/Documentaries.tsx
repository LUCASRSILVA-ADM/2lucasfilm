
import React from 'react';

const Documentaries: React.FC = () => {
  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
          Sessão <span className="text-violet-500">Documentários</span>
        </h2>
        <div className="h-[2px] w-24 bg-violet-600"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="group relative aspect-video w-full bg-slate-900 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
          <video 
            loop 
            muted 
            autoPlay 
            playsInline
            className="w-full h-full object-cover brightness-50 group-hover:brightness-90 transition-all duration-1000"
          >
            <source src="https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769190488/treiler_2_tct9i7.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
          
          <div className="absolute bottom-10 left-10 space-y-3 pointer-events-none">
            <div className="font-mono text-[9px] text-violet-500 uppercase tracking-[0.6em] animate-pulse">FEATURED PRODUCTION</div>
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              Além Da Linha <br/> de Chegada
            </h3>
          </div>
          
          {/* Interaction Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentaries;
