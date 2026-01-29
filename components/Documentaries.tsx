
import React, { useState, useRef, useEffect } from 'react';

interface DocumentariesProps {
  isAudioEnabled: boolean;
}

const Documentaries: React.FC<DocumentariesProps> = ({ isAudioEnabled }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const mainId = "main-doc-video";

  const docs = [
    {
      id: "main-doc",
      title: "Além Da Linha de Chegada",
      url: "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769190488/treiler_2_tct9i7.mp4",
      tag: "ORIGINAL DOC"
    },
    {
      id: "decor-campinas",
      title: "DECOR CAMPINAS",
      url: "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769630358/DECOR_CAMPINAS_tezxa2.mp4",
      tag: "INTERIOR FILM"
    },
    {
      id: "lentes-viagem",
      title: "Lentes de Viagem",
      url: "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769631026/DDSD_nqo13r.mp4",
      tag: "BEHIND THE SCENES"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ativa somente quando o contêiner está pelo menos 60% visível (centro da tela)
        setIsFullyVisible(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      { threshold: [0, 0.3, 0.6, 1.0] }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const handleOtherPlay = (e: any) => {
      if (e.detail.id !== mainId && mainVideoRef.current) {
        mainVideoRef.current.pause();
      }
    };

    window.addEventListener('video-playing', handleOtherPlay);
    return () => {
      observer.disconnect();
      window.removeEventListener('video-playing', handleOtherPlay);
    };
  }, []);

  // Lógica de Autoplay e Áudio Automático
  useEffect(() => {
    if (mainVideoRef.current) {
      if (isFullyVisible) {
        // Se estiver no centro da tela e o áudio global estiver desbloqueado, toca com som
        mainVideoRef.current.muted = false; 
        const playPromise = mainVideoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            window.dispatchEvent(new CustomEvent('video-playing', { detail: { id: mainId } }));
          }).catch(() => {
            // Fallback: se o navegador bloquear som, tenta mudo
            if (mainVideoRef.current) {
              mainVideoRef.current.muted = true;
              mainVideoRef.current.play().catch(() => {});
            }
          });
        }
      } else {
        mainVideoRef.current.pause();
      }
    }
  }, [isFullyVisible]);

  return (
    <div ref={containerRef} className="py-24 px-6 container mx-auto max-w-7xl">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
          <span className="text-violet-500">Documentários</span>
        </h2>
        <div className="h-[2px] w-24 bg-violet-600"></div>
      </div>

      <div className="space-y-12">
        {/* Vídeo Principal - COM ÁUDIO ATIVADO NO AUTOPLAY */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative aspect-video w-full bg-slate-900 overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            <video 
              ref={mainVideoRef}
              loop 
              playsInline
              preload="auto"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000 pointer-events-none"
            >
              <source src={docs[0].url} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 space-y-2 pointer-events-none">
              <div className="font-mono text-[9px] text-violet-500 uppercase tracking-[0.6em]">{docs[0].tag}</div>
              <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
                {docs[0].title}
              </h3>
            </div>
            
            {/* Controle de Volume Manual */}
            <button 
              onClick={() => {
                if (mainVideoRef.current) mainVideoRef.current.muted = !mainVideoRef.current.muted;
              }}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-violet-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Galeria Expansível */}
        <div className="max-w-5xl mx-auto text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 hover:border-violet-500 hover:bg-violet-600/10 transition-all duration-500 rounded-full"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white">
              {isExpanded ? 'Recolher Galeria' : 'Mais Produções'}
            </span>
            <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100 mt-16' : 'max-h-0 opacity-0 overflow-hidden mt-0'}`}>
            {docs.slice(1).map((doc, idx) => (
              <DocItem key={idx} doc={doc} isAudioEnabled={isAudioEnabled} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DocItem = ({ doc, isAudioEnabled }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleOtherPlay = (e: any) => {
      if (e.detail.id !== doc.id && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('video-playing', handleOtherPlay);
    return () => window.removeEventListener('video-playing', handleOtherPlay);
  }, [doc.id]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        window.dispatchEvent(new CustomEvent('video-playing', { detail: { id: doc.id } }));
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      className="group relative aspect-video bg-slate-900 border border-white/5 overflow-hidden shadow-xl rounded-sm cursor-pointer"
      onClick={togglePlay}
    >
       <video 
        ref={videoRef} 
        loop 
        muted 
        playsInline 
        className={`w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
       >
          <source src={doc.url} type="video/mp4" />
       </video>
       <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 ${isPlaying ? 'bg-transparent opacity-0' : ''}`}></div>
       
       <div className="absolute bottom-6 left-6 text-left pointer-events-none">
          <div className="text-[8px] font-mono text-violet-400 mb-1">{doc.tag}</div>
          <div className="text-xl font-bold italic text-white uppercase tracking-tighter">{doc.title}</div>
       </div>
    </div>
  );
};

export default Documentaries;
