
import React, { useRef, useEffect, useState } from 'react';

interface VerticalContentProps {
  isAudioEnabled: boolean;
}

const VerticalContent: React.FC<VerticalContentProps> = ({ isAudioEnabled }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const socialPosts = [
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632869/1-homepage-1_t57lle.jpg",
      caption: "Capturando a alma dos destinos mais exclusivos. A jornada começa aqui. #travel #2lucasfilm",
      likes: "12.4k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632872/1_x4lpnw.jpg",
      caption: "Onde o luxo encontra a lente. Detalhes que fazem a diferença em cada frame. #luxuryfilm",
      likes: "8.2k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632877/1b7709ef.jpg_bus0oy.avif",
      caption: "Luz, sombra e movimento. Definindo novos padrões estéticos para o mercado digital. #filmmaking",
      likes: "5.1k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632881/7dd9886f-848a-4934-b764-70f596ba3d39.jpeg_hqxqk1.avif",
      caption: "A imensidão do horizonte sob nosso olhar. Destinos inesquecíveis registrados com alma. #adventure",
      likes: "15.7k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632887/53b1b654-0f79-49dd-8a61-8d2b9697ed02.jpeg_bgd2nh.avif",
      caption: "Storytelling que impacta. Transformando momentos comuns em obras eternas. #cinema #impact",
      likes: "9.3k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632891/291f4fcb-7851-4853-aff1-254ec0e2a6c4.jpeg_vwndru.avif",
      caption: "Cada frame conta uma história única. O mundo através da nossa visão cinematográfica. #creative",
      likes: "6.8k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632905/2812138b-2c09-4e50-84b9-680beada8780.jpeg_lgrg5t.avif",
      caption: "Estética minimalista para experiências grandiosas. O menos é sempre mais luxuoso. #aesthetic",
      likes: "11.1k"
    },
    {
      url: "https://res.cloudinary.com/dkzx2kuuu/image/upload/v1769632909/cbc23e75-095e-4b19-ac96-48642ed16a50_ngoceu.jpg",
      caption: "Nos bastidores do extraordinário. 2LUCASFILM em ação pelo mundo. #production #behindthescenes",
      likes: "14.2k"
    }
  ];

  const carouselItems = [...socialPosts, ...socialPosts, ...socialPosts];

  return (
    <div ref={containerRef} className="py-24 container mx-auto border-t border-white/5 overflow-hidden">
      <div className="px-6 mb-16">
        <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
          Vertical <span className="text-violet-500">Authority</span>
        </h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.6em] mt-2">ALTA RETENÇÃO // SOCIAL CONTENT</p>
      </div>

      <div className="relative flex overflow-hidden">
        <div 
          className="flex gap-6 md:gap-10"
          style={{
            animation: isPaused ? 'none' : 'infinite-scroll 60s linear infinite',
          }}
        >
          {carouselItems.map((post, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[280px] md:w-[340px] aspect-[9/16] bg-slate-950 border border-white/10 rounded-[2.5rem] overflow-hidden relative group hover:border-violet-500/50 transition-all duration-500 shadow-2xl"
            >
              <img 
                src={post.url} 
                alt="Social Content" 
                className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-[4s] ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 opacity-70"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full border border-white/30 bg-violet-600/40 backdrop-blur-md flex items-center justify-center">
                         <span className="text-[8px] font-black italic text-white">2L</span>
                       </div>
                       <div className="text-[10px] font-bold text-white tracking-wide drop-shadow-lg">2lucasfilm</div>
                    </div>
                 </div>

                 <div className="flex items-end justify-between gap-4">
                    <div className="flex-1 space-y-3">
                       <div className="text-[11px] text-white font-medium line-clamp-3 leading-snug drop-shadow-md">
                         {post.caption}
                       </div>
                       <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-3 py-1.5 w-fit border border-white/10">
                          <div className="w-3 h-3 text-white">
                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                          </div>
                          <div className="text-[8px] font-mono text-white/90 uppercase tracking-widest overflow-hidden whitespace-nowrap">Áudio original • 2lucasfilm</div>
                       </div>
                    </div>

                    <div className="flex flex-col items-center gap-5 text-white/90 pb-2">
                       <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                          <span className="text-[9px] font-bold drop-shadow-md">{post.likes}</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="absolute inset-0 border-[8px] border-black rounded-[2.5rem] pointer-events-none opacity-40"></div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default VerticalContent;
