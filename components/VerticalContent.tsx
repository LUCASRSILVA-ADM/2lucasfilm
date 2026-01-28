
import React from 'react';

const VerticalContent: React.FC = () => {
  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            Vertical <span className="text-violet-500">Authority</span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.6em]">PRODUÇÃO MOBILE-FIRST // REDES SOCIAIS</p>
        </div>
        <div className="max-w-xs">
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Especialistas em converter a atenção do scroll em desejo através de frames verticais de altíssima qualidade.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 justify-center">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-[300px] aspect-[9/16] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative group hover:border-violet-500/50 transition-all duration-700 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(139,92,246,0.1)_100%)]"></div>
            
            {/* Mock Video Element */}
            <div className="absolute inset-4 border border-white/5 rounded-2xl flex flex-col justify-between p-6">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-violet-600 animate-pulse"></div>
                  <div className="h-2 w-20 bg-white/10 rounded-full"></div>
               </div>
               
               <div className="space-y-4">
                  <div className="h-3 w-full bg-white/5 rounded-full"></div>
                  <div className="h-3 w-2/3 bg-white/5 rounded-full"></div>
                  <div className="flex gap-4">
                     <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                     <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                     <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                  </div>
               </div>
            </div>
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
               <div className="w-14 h-14 rounded-full border border-violet-500/50 flex items-center justify-center text-violet-500 bg-violet-500/10">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                  </svg>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalContent;
