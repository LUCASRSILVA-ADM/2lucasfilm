
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="font-black text-2xl italic tracking-tighter mb-2">
                <span className="text-white">2LUCAS</span><span className="text-violet-500">FILM</span>
             </div>
             <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Cinematic Experiences Worldwide</p>
          </div>

          <div className="flex gap-8">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
               <span className="text-[10px] font-mono uppercase tracking-widest">Instagram</span>
             </a>
             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
               <span className="text-[10px] font-mono uppercase tracking-widest">YouTube</span>
             </a>
             <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
               <span className="text-[10px] font-mono uppercase tracking-widest">Vimeo</span>
             </a>
          </div>

          <div className="text-center md:text-right">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">© 2024 2LUCASFILM</div>
             <div className="text-[9px] font-mono text-violet-500/50 mt-1">SÃO PAULO • CHILE • PORTUGAL • ESPANHA • ITÁLIA</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
