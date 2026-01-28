
import React from 'react';

const Featured: React.FC = () => {
  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            Em <span className="text-violet-500">Destaque</span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">EM BREVE // NOVAS PRODUÇÕES</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-[16/9] bg-slate-900/50 border border-white/5 flex items-center justify-center overflow-hidden group relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(139,92,246,0.05)_100%)]"></div>
            <span className="font-mono text-[10px] text-slate-700 tracking-[1em] uppercase group-hover:text-violet-500/50 transition-colors">Loading_Asset_{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
