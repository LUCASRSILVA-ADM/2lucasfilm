
import React from 'react';

const Usability: React.FC = () => {
  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="text-center space-y-4 mb-24">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          O VÍDEO NO <span className="text-violet-500">MUNDO REAL</span>
        </h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.6em]">USABILIDADE E RESULTADOS TÁTEIS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Case 1: Site Background Hotel Boutique */}
        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-black/40 z-10 p-6 flex flex-col justify-between">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-2">WEBSITE BACKGROUND</div>
                  <div className="text-lg font-black uppercase italic text-white tracking-widest">HOTEL BOUTIQUE</div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full"></div>
             </div>
             <div className="absolute inset-0 scale-110 blur-sm opacity-50 bg-violet-900/20"></div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Digital Boutique Experience</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              O vídeo como a alma do seu site. Uma imersão cinematográfica que vende o luxo antes mesmo do primeiro clique.
            </p>
          </div>
        </div>

        {/* Case 2: Instagram Reel Restaurant */}
        <div className="space-y-8 group">
          <div className="aspect-[9/16] max-w-[240px] mx-auto bg-slate-900 border border-white/10 rounded-[3rem] p-4 relative shadow-2xl overflow-hidden">
             <div className="absolute inset-0 bg-black/20 z-10 flex flex-col justify-end p-6 pb-12">
                <div className="space-y-2">
                   <div className="w-12 h-1 bg-white/40 rounded-full mx-auto mb-4"></div>
                   <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                   <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-mono text-violet-500/50 rotate-90 tracking-[1em] uppercase">INSTAGRAM_REEL</div>
          </div>
          <div className="text-center space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Social Engagement</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Vídeos dinâmicos para restaurantes que despertam o desejo e dominam o feed do Instagram.
            </p>
          </div>
        </div>

        {/* Case 3: YouTube Channel Hotel Tour */}
        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-black/40 z-10 p-6 flex flex-col justify-between">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                   <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent"></div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-2">YOUTUBE CONTENT</div>
                  <div className="text-lg font-black uppercase italic text-white tracking-widest">HOTEL TOUR 4K</div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-2/3 z-20"></div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Narrative Mastery</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Storytelling de longa duração para YouTube. Tours cinematográficos que transportam o hóspede para dentro do seu hotel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usability;
