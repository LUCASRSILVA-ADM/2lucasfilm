
import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  isAudioEnabled: boolean;
}

const Hero: React.FC<HeroProps> = ({ isAudioEnabled }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [motionStarted, setMotionStarted] = useState(false);
  const [showMotionIcon, setShowMotionIcon] = useState(false);
  const [isDissolving, setIsDissolving] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);

  const videoUrl = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769623637/NLJ_ddeqxn.mp4";
  const id = "hero-video";

  useEffect(() => {
    const checkMobile = () => {
      const isMob = window.innerWidth <= 768;
      setIsMobile(isMob);
      if (isMob && !motionStarted) {
        setShowMotionIcon(true);
        // Verificar se precisa de permissão no iOS
        if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
          setNeedsPermission(true);
        }
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const handleOtherPlay = (e: any) => {
      if (e.detail.id !== id && videoRef.current) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('video-playing', handleOtherPlay);
    return () => {
      observer.disconnect();
      window.removeEventListener('video-playing', handleOtherPlay);
      window.removeEventListener('resize', checkMobile);
    };
  }, [motionStarted]);

  // Lógica de Detecção de Balanço (Shake)
  useEffect(() => {
    if (!isMobile || motionStarted) return;

    let lastX: number, lastY: number, lastZ: number;
    let threshold = 15; // Sensibilidade do balanço

    const handleMotion = (event: DeviceMotionEvent) => {
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;

      const deltaX = Math.abs(lastX - (acc.x || 0));
      const deltaY = Math.abs(lastY - (acc.y || 0));
      const deltaZ = Math.abs(lastZ - (acc.z || 0));

      if ((deltaX > threshold && deltaY > threshold) || (deltaX > threshold && deltaZ > threshold) || (deltaY > threshold && deltaZ > threshold)) {
        startCinema();
      }

      lastX = acc.x || 0;
      lastY = acc.y || 0;
      lastZ = acc.z || 0;
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [isMobile, motionStarted]);

  const startCinema = () => {
    setIsDissolving(true);
    setTimeout(() => {
      setMotionStarted(true);
      setShowMotionIcon(false);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 800);
  };

  const requestPermission = async () => {
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceMotionEvent as any).requestPermission();
        if (response === 'granted') {
          setNeedsPermission(false);
        }
      } catch (e) {
        console.error("Permission denied", e);
      }
    } else {
      setNeedsPermission(false);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        if (!isMobile || motionStarted) {
          videoRef.current.muted = !isAudioEnabled;
          videoRef.current.play().catch(() => {});
          window.dispatchEvent(new CustomEvent('video-playing', { detail: { id } }));
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isAudioEnabled, isMobile, motionStarted]);

  return (
    <div ref={containerRef} className="relative w-full h-[85vh] md:h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video 
          ref={videoRef}
          loop 
          playsInline
          autoPlay
          muted={!isAudioEnabled}
          preload="auto"
          className="w-full h-full object-cover z-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>
      </div>

      {/* Shake UI - Versão Mobile */}
      {isMobile && showMotionIcon && (
        <div className={`absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-1000 ${isDissolving ? 'opacity-0 scale-150 blur-2xl' : 'opacity-100'}`}>
          <div className="relative group">
            {/* Ícone de Celular Balançando */}
            <div className={`w-24 h-24 mb-8 flex items-center justify-center animate-[shake_1.5s_infinite] ${isDissolving ? 'animate-none' : ''}`}>
               <svg className="w-16 h-16 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
               </svg>
            </div>
            
            {/* Efeito de Partículas (Simulado com círculos em volta) */}
            {isDissolving && (
              <div className="absolute inset-0 pointer-events-none">
                 {[...Array(12)].map((_, i) => (
                   <div 
                    key={i} 
                    className="absolute w-1 h-1 bg-violet-400 rounded-full animate-[particle_0.8s_ease-out_forwards]"
                    style={{
                      top: '50%',
                      left: '50%',
                      '--tx': `${(Math.random() - 0.5) * 200}px`,
                      '--ty': `${(Math.random() - 0.5) * 200}px`,
                    } as any}
                   />
                 ))}
              </div>
            )}
          </div>

          <div className="text-center px-12 space-y-6">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
              Balançe para <span className="text-violet-500">Sentir</span>
            </h3>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] leading-relaxed">
              Ative a experiência cinematográfica através do movimento.
            </p>
            
            {needsPermission ? (
              <button 
                onClick={requestPermission}
                className="mt-8 px-8 py-3 bg-violet-600 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                Ativar Sensores
              </button>
            ) : (
              <button 
                onClick={startCinema}
                className="mt-8 px-8 py-3 bg-white/10 border border-white/20 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/60"
              >
                ou toque para iniciar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Legend Desktop */}
      {!isMobile && !isAudioEnabled && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
          <div className="px-6 py-3 bg-violet-600 border border-white/20 rounded-full shadow-lg">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Toque para ativar o som</span>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes particle {
          to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
            scale: 0.1;
          }
        }
      `}} />
    </div>
  );
};

export default Hero;
