
import React from 'react';

const Usability: React.FC = () => {
  const videoHorizontal = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769644224/001_o3t7dl.mp4";
  const videoVertical = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769644373/YTDowncom_Shorts_Suite-Room-Interior-interiordesign-hotel_Media_C4q5DZZMbIE_001_720p_j3sy6s.mp4";

  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="text-center space-y-4 mb-24">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          O VÍDEO NO <span className="text-violet-500">MUNDO REAL</span>
        </h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.6em]">USABILIDADE E RESULTADOS TÁTEIS</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Case 1: Site Background Hotel Boutique */}
        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
             >
               <source src={videoHorizontal} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/40 z-10 p-4 md:p-6 flex flex-col justify-between pointer-events-none">
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
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Digital Boutique Experience</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              O vídeo como a alma do seu site. Uma imersão cinematográfica que vende o luxo antes mesmo do primeiro clique.
            </p>
          </div>
        </div>

        {/* Case 2: Instagram Reel Restaurant */}
        <div className="space-y-8 group order-first lg:order-none">
          <div className="aspect-[9/16] max-w-[280px] mx-auto bg-slate-900 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 relative shadow-2xl overflow-hidden">
             <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
             >
               <source src={videoVertical} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/20 z-10 flex flex-col justify-end p-6 pb-12 pointer-events-none">
                <div className="space-y-2">
                   <div className="w-12 h-1 bg-white/40 rounded-full mx-auto mb-4"></div>
                   <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
                   <div className="h-3 w-1/2 bg-white/20 rounded-full"></div>
                </div>
             </div>
             <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[8px] font-mono text-white/30 rotate-90 tracking-[1em] uppercase pointer-events-none">INSTAGRAM_REEL</div>
          </div>
          <div className="text-center space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Social Engagement</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Vídeos dinâmicos que despertam o desejo e dominam o feed. Alta retenção e estética impecável.
            </p>
          </div>
        </div>

        {/* Case 3: YouTube Channel Hotel Tour */}
        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
             >
               <source src={videoHorizontal} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/40 z-10 p-4 md:p-6 flex flex-col justify-between pointer-events-none">
                <div className="w-10 h-7 bg-red-600 rounded flex items-center justify-center">
                   <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent"></div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-2">YOUTUBE CONTENT</div>
                  <div className="text-lg font-black uppercase italic text-white tracking-widest">HOTEL TOUR 4K</div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-2/3 z-20 pointer-events-none"></div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Narrative Mastery</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Storytelling de longa duração para YouTube. Tours cinematográficos que transportam o público para o destino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usability;
