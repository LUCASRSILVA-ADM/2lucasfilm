
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
  const [isDissolving, setIsDissolving] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);

  const videoUrl = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769623637/NLJ_ddeqxn.mp4";
  const id = "hero-video";

  useEffect(() => {
    const checkMobile = () => {
      const isMob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMob);
      
      // Verifica se o navegador exige permissão (iOS)
      if (isMob && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
        // Verifica se já temos permissão
        setNeedsPermission(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const handleOtherVideo = (e: any) => {
      if (e.detail.id !== id && videoRef.current) {
        videoRef.current.pause();
      }
    };
    window.addEventListener('video-playing', handleOtherVideo);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('video-playing', handleOtherVideo);
    };
  }, []);

  // Lógica de Captura de Movimento
  useEffect(() => {
    if (!isMobile || motionStarted || needsPermission) return;

    let lastX = 0, lastY = 0, lastZ = 0;
    const threshold = 15; 
    let lastTime = Date.now();

    const handleMotion = (event: DeviceMotionEvent) => {
      const currentTime = Date.now();
      if ((currentTime - lastTime) < 100) return;

      const acc = event.accelerationIncludingGravity;
      if (!acc) return;

      const deltaX = Math.abs(lastX - (acc.x || 0));
      const deltaY = Math.abs(lastY - (acc.y || 0));
      const deltaZ = Math.abs(lastZ - (acc.z || 0));

      if ((deltaX > threshold && deltaY > threshold) || (deltaX > threshold && deltaZ > threshold)) {
        handleInteraction();
      }

      lastX = acc.x || 0;
      lastY = acc.y || 0;
      lastZ = acc.z || 0;
      lastTime = currentTime;
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [isMobile, motionStarted, needsPermission]);

  const handleInteraction = () => {
    if (motionStarted) return;
    setIsDissolving(true);
    
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          window.dispatchEvent(new CustomEvent('video-playing', { detail: { id } }));
        }).catch(err => {
          console.warn("Autoplay block. Retrying on interaction...", err);
        });
      }
    }

    setTimeout(() => {
      setMotionStarted(true);
    }, 600);
  };

  const handleManualActivatePermission = async () => {
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceMotionEvent as any).requestPermission();
        if (response === 'granted') {
          setNeedsPermission(false);
          // Pequeno delay para os sensores estabilizarem
          setTimeout(handleInteraction, 150);
        }
      } catch (e) {
        console.error("Erro sensor:", e);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        if (!isMobile || motionStarted) {
          videoRef.current.play().catch(() => {});
          if (motionStarted) {
            window.dispatchEvent(new CustomEvent('video-playing', { detail: { id } }));
          }
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isMobile, motionStarted]);

  return (
    <div ref={containerRef} className="relative w-full h-[85vh] md:h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video 
          ref={videoRef}
          loop 
          playsInline
          autoPlay
          muted={!motionStarted}
          preload="auto"
          className={`w-full h-full object-cover z-0 pointer-events-none transition-all duration-1000 ${motionStarted ? 'opacity-100 scale-100 grayscale-0' : 'opacity-20 scale-110 grayscale'}`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Ativação Principal */}
        {!motionStarted && (
          <div 
            onClick={!needsPermission ? handleInteraction : undefined}
            className={`absolute inset-0 z-50 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ${isDissolving ? 'opacity-0 scale-150' : 'opacity-100'}`}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Ícone de Smartphone com Balanço Lateral Realista */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center animate-shake-lateral">
                <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full"></div>
                <svg className="w-full h-full text-violet-500 drop-shadow-[0_0_25px_rgba(139,92,246,0.9)]" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12" cy="19" r="0.8" fill="currentColor" />
                  {/* Linhas de Movimento */}
                  <path d="M4 8C3 10 3 14 4 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-50" />
                  <path d="M1 9.5C0.5 10.5 0.5 13.5 1 14.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
                  <path d="M20 8C21 10 21 14 20 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-50" />
                  <path d="M23 9.5C23.5 10.5 23.5 13.5 23 14.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
                </svg>
              </div>

              <div className="text-center space-y-3">
                <p className="text-[10px] md:text-xs font-mono text-white uppercase tracking-[0.5em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {isMobile ? 'AGITE PARA INICIAR O VÍDEO' : 'CLIQUE PARA INICIAR'}
                </p>
                <div className="h-[1px] w-12 bg-violet-500/50 mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Toast Inferior Discreto para Permissão (iOS) */}
        {needsPermission && !motionStarted && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <button 
              onClick={handleManualActivatePermission}
              className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3 hover:bg-violet-600 transition-all group"
            >
              <span className="text-[9px] font-mono text-white/80 uppercase tracking-widest group-hover:text-white">
                Ativar sensores de movimento
              </span>
              <svg className="w-3 h-3 text-violet-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}

        {/* Gradientes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake-lateral {
          0% { transform: translateX(0) rotate(0deg); }
          15% { transform: translateX(-18px) rotate(-8deg); }
          30% { transform: translateX(18px) rotate(8deg); }
          45% { transform: translateX(-18px) rotate(-8deg); }
          60% { transform: translateX(18px) rotate(8deg); }
          75% { transform: translateX(-10px) rotate(-4deg); }
          90% { transform: translateX(10px) rotate(4deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
        .animate-shake-lateral {
          animation: shake-lateral 2.5s cubic-bezier(.36,.07,.19,.97) infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;
