
import React from 'react';

const Featured: React.FC = () => {
  const featuredImages = [
    { 
      url: 'https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632033/1_ljrbig.png', 
      title: 'ALÉM DE MIM', 
      tag: 'POSTER' 
    },
    { 
      url: 'https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632036/2_b8rrjr.png', 
      title: 'THE ROOM', 
      tag: 'STORYTELLING' 
    },
    { 
      url: 'https://res.cloudinary.com/dkzx2kuuu/image/upload/v1767730215/samples/landscapes/architecture-signs.jpg', 
      title: 'USER FLOW', 
      tag: 'DIRECTION' 
    }
  ];

  return (
    <div className="py-24 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            Em <span className="text-violet-500">Destaque</span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">FRAMES SELECIONADOS // 2LUCASFILM</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredImages.map((img, i) => (
          <div key={i} className="group relative aspect-video bg-slate-900 border border-white/5 overflow-hidden">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4">
               <div className="text-[8px] font-mono text-violet-400 uppercase tracking-widest mb-1">{img.tag}</div>
               <div className="text-lg font-black italic text-white uppercase tracking-tighter">{img.title}</div>
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
