
import React, { useEffect, useRef, useState } from 'react';

const Usability: React.FC = () => {
  const videoHorizontal = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769644224/001_o3t7dl.mp4";
  const videoVertical = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769644373/YTDowncom_Shorts_Suite-Room-Interior-interiordesign-hotel_Media_C4q5DZZMbIE_001_720p_j3sy6s.mp4";
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const scrollTimeout = useRef<any>(null);

  const handleScroll = () => {
    // Esconde o ícone imediatamente ao iniciar o movimento
    if (showIndicator) setShowIndicator(false);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
    scrollTimeout.current = setTimeout(() => {
      // Se parou de rolar e não chegou no final do conteúdo lateral
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 20;
        if (!isAtEnd) {
          setShowIndicator(true);
        }
      }
    }, 2000); 
  };

  return (
    <div className="pt-24 pb-4 px-6 container mx-auto max-w-7xl border-t border-white/5">
      <div className="text-center space-y-4 mb-16 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          O VÍDEO NO <span className="text-violet-500">MUNDO REAL</span>
        </h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.6em]">ECOSSISTEMAS DE ALTA PERFORMANCE</p>
      </div>

      {/* VERSION: DESKTOP */}
      <div className="hidden lg:grid grid-cols-3 gap-16 items-start">
        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700">
               <source src={videoHorizontal} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/40 z-10 p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div></div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-2">EM SEU SITE</div>
                  <div className="text-lg font-black uppercase italic text-white tracking-widest">HOTEL BOUTIQUE</div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full"></div>
             </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Digital Boutique Experience</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">O vídeo como a alma do seu site.</p>
          </div>
        </div>

        <div className="space-y-8 group">
          <div className="aspect-[9/16] max-w-[280px] mx-auto bg-slate-900 border border-white/10 rounded-[3rem] p-4 relative shadow-2xl overflow-hidden">
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700">
               <source src={videoVertical} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/20 z-10 flex flex-col justify-end p-6 pb-12 pointer-events-none">
                <div className="text-center mb-4">
                   <div className="text-[10px] font-mono text-white uppercase tracking-widest">EM SUAS REDES SOCIAIS</div>
                </div>
                <div className="space-y-2"><div className="w-12 h-1 bg-white/40 rounded-full mx-auto mb-4"></div><div className="h-3 w-3/4 bg-white/20 rounded-full"></div><div className="h-3 w-1/2 bg-white/20 rounded-full"></div></div>
             </div>
          </div>
          <div className="text-center space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Social Engagement</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Alta retenção e estética impecável.</p>
          </div>
        </div>

        <div className="space-y-8 group">
          <div className="aspect-video bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700">
               <source src={videoHorizontal} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/40 z-10 p-6 flex flex-col justify-between pointer-events-none">
                <div className="w-10 h-7 bg-red-600 rounded flex items-center justify-center"><div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent"></div></div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-2">SEU CANAL NO YOUTUBE</div>
                  <div className="text-lg font-black uppercase italic text-white tracking-widest">HOTEL TOUR 4K</div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-2/3 z-20 pointer-events-none"></div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-violet-400 transition-colors">Narrative Mastery</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Storytelling cinematográfico de elite.</p>
          </div>
        </div>
      </div>

      {/* VERSION: MOBILE (Horizontal Balloon Carousel) */}
      <div className="lg:hidden relative -mx-6">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-12 pt-10" 
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex-shrink-0 w-[10vw] h-1 snap-center"></div> 
          
          <HorizontalBalloonItem label="EM SEU SITE" videoUrl={videoHorizontal} type="site" />
          <HorizontalBalloonItem label="EM SUAS REDES SOCIAIS" videoUrl={videoVertical} type="social" aspectRatio="9/16" />
          <HorizontalBalloonItem label="SEU CANAL NO YOUTUBE" videoUrl={videoHorizontal} type="youtube" />
          <HorizontalBalloonItem label="EM SUA PAGINA NO FACEBOOK" videoUrl={videoHorizontal} type="facebook" />

          <div className="flex-shrink-0 w-[10vw] h-1 snap-center"></div>
        </div>

        {/* Real Anatomical Thumb Drag Indicator */}
        <div 
          className={`absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none z-[100] transition-all duration-700 ease-in-out ${showIndicator ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="relative animate-thumb-drag">
            {/* SVG Realistic Right Thumb Profile */}
            <svg width="80" height="80" viewBox="0 0 120 120" className="drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
              <defs>
                <linearGradient id="thumbSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c4b5fd', stopOpacity: 1 }} />
                  <stop offset="60%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="innerShadow">
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="3" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="black" floodOpacity="0.3" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>
              
              {/* Detailed Thumb Shape - Anatomically inspired right thumb seen from profile */}
              <path 
                d="M110,95 C110,95 115,85 105,75 C95,65 85,60 70,55 C60,52 45,48 35,45 C25,42 15,48 12,58 C10,68 15,78 25,82 C35,85 55,88 70,92 C85,95 100,100 110,95 Z" 
                fill="url(#thumbSkin)"
                filter="url(#innerShadow)"
              />
              
              {/* Nail Detail - Perspective view */}
              <path 
                d="M20,52 C18,52 15,55 15,62 C15,69 18,72 20,72 C25,72 35,70 35,62 C35,55 25,52 20,52 Z" 
                fill="rgba(255,255,255,0.25)" 
                className="opacity-60"
              />
              
              {/* Joint Creases - Visual cues for realism */}
              <path d="M55,55 Q58,65 55,75" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeLinecap="round" />
              <path d="M50,56 Q53,65 50,74" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeLinecap="round" />
              
              <path d="M80,65 Q83,75 80,85" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round" />

              {/* Shine/Reflection */}
              <path d="M30,50 C40,52 60,55 70,58" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
            </svg>
            
            {/* Visual Drag Particle Effect */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full">
               <div className="flex gap-1 items-center animate-drag-trail">
                  <div className="w-1 h-1 bg-violet-400 rounded-full opacity-40"></div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-violet-600 rounded-full opacity-40"></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes thumb-drag {
          0% { transform: translateX(40px) scale(0.9); opacity: 0; }
          20% { opacity: 1; transform: translateX(20px) scale(1); }
          80% { opacity: 1; transform: translateX(-60px) scale(1); }
          100% { transform: translateX(-80px) scale(0.9); opacity: 0; }
        }
        @keyframes drag-trail {
          0% { opacity: 0; transform: translateX(20px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-thumb-drag {
          animation: thumb-drag 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-drag-trail {
           animation: drag-trail 2.8s linear infinite;
        }
      `}} />
    </div>
  );
};

const HorizontalBalloonItem = ({ label, videoUrl, type, aspectRatio = "16/9" }: any) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [inflation, setInflation] = useState(0);

  useEffect(() => {
    const checkInflation = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - itemCenter);
      const threshold = window.innerWidth * 0.45;
      
      if (distance < threshold) {
        const factor = 1 - (distance / threshold);
        setInflation(Math.pow(factor, 1.2));
      } else {
        setInflation(0);
      }
    };

    const container = itemRef.current?.parentElement;
    if (container) {
      container.addEventListener('scroll', checkInflation);
      checkInflation();
    }
    return () => container?.removeEventListener('scroll', checkInflation);
  }, []);

  const getIcon = () => {
    switch(type) {
      case 'site': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
      case 'social': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
      case 'youtube': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;
      case 'facebook': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
      default: return null;
    }
  };

  const getBrandColor = () => {
    switch(type) {
      case 'youtube': return 'bg-red-600';
      case 'facebook': return 'bg-blue-600';
      case 'social': return 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600';
      default: return 'bg-violet-600';
    }
  };

  return (
    <div 
      ref={itemRef} 
      className="flex-shrink-0 w-[80vw] min-h-[450px] flex items-center justify-center snap-center relative"
    >
      <div 
        className={`absolute z-30 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/20 transition-all duration-700 ease-out animate-float ${getBrandColor()}`}
        style={{
          top: inflation > 0.1 ? `${10 - (inflation * 45)}px` : '50%',
          transform: `translateY(-50%) scale(${0.7 + (inflation * 0.5)})`,
          left: '50%',
          marginLeft: '-32px'
        }}
      >
        {getIcon()}
      </div>

      <div 
        className="w-full bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
        style={{
          scale: 0.35 + (inflation * 0.65),
          opacity: 0.2 + (inflation * 0.8),
          transform: `translateY(${(1 - inflation) * 30}px)`,
        }}
      >
        <div className="bg-white/5 py-3 px-4 border-b border-white/5 text-center mt-6">
           <span className="text-[8px] font-mono font-black text-violet-400 uppercase tracking-[0.3em]">{label}</span>
        </div>

        <div className="relative" style={{ aspectRatio }}>
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={videoUrl} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           
           <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="text-[7px] font-mono text-white/30 uppercase tracking-[0.2em]">Visual Experience // 2LUCASFILM</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Usability;
