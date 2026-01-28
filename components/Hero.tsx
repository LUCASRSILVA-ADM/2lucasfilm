
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // New direct video link provided by the user
  const videoUrl = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769623637/NLJ_ddeqxn.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to autoplay muted as per browser policies
    video.muted = true;
    video.play().catch(error => {
      console.log("Initial autoplay blocked or failed:", error);
    });

    const handleGlobalClick = () => {
      if (videoRef.current && !hasStarted) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0; // Restart to experience full impact with sound
        videoRef.current.play();
        setHasStarted(true);
        setIsMuted(false);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [hasStarted]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black cursor-pointer">
      {/* Interaction Layer (Overlay that vanishes on click) */}
      {!hasStarted && (
        <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-[4px] transition-opacity duration-1000">
          <div className="flex flex-col items-center gap-6 group">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 border border-violet-500/40 rounded-full animate-ping"></div>
              <div className="absolute inset-0 border border-violet-500/20 rounded-full scale-125"></div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-[10px] font-mono tracking-[1em] uppercase text-white/70">Ativar Áudio Cinema</p>
              <p className="text-[8px] font-mono tracking-[0.3em] uppercase text-white/30">Click to enter the experience</p>
            </div>
          </div>
        </div>
      )}

      {/* 3D Logo (Fixed in corner) */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50 pointer-events-none perspective-1000">
        <div className="flex flex-col items-start animate-[float3D_8s_ease-in-out_infinite]">
          <h2 className="text-xl md:text-3xl font-black italic tracking-tighter uppercase leading-none inline-block preserve-3d">
            <span className="text-violet-500 logo-shadow">2</span>
            <span className="text-white logo-shadow-white">LUCAS</span>
            <span className="text-violet-500 logo-shadow">FILM</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-500/40 to-transparent mt-1"></div>
        </div>
      </div>

      {/* Video Background Engine */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video 
          ref={videoRef}
          loop 
          playsInline
          autoPlay
          muted={isMuted}
          className={`w-full h-full object-cover transition-all duration-[3000ms] ease-out ${hasStarted ? 'scale-100 grayscale-0 brightness-100' : 'scale-110 grayscale-[0.5] brightness-50'}`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Cinematic Grading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-10"></div>
      </div>

      {/* Camera UI Elements (Viewfinder) */}
      <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-16">
        <div className="absolute top-12 left-12 w-10 h-10 border-t-2 border-l-2 border-white/10"></div>
        <div className="absolute top-12 right-12 w-10 h-10 border-t-2 border-r-2 border-white/10"></div>
        <div className="absolute bottom-12 left-12 w-10 h-10 border-b-2 border-l-2 border-white/10"></div>
        <div className="absolute bottom-12 right-12 w-10 h-10 border-b-2 border-r-2 border-white/10"></div>
        
        {hasStarted && (
          <div className="absolute bottom-12 right-16 flex flex-col items-end gap-1 opacity-40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono text-white tracking-[0.5em] uppercase">REC 00:00:01:24</span>
            </div>
            <span className="text-[8px] font-mono text-white/60 tracking-[0.2em] uppercase">4K RAW // 60FPS // LOG-C</span>
          </div>
        )}

        {/* Vertical Ticker Aesthetic */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-10">
          <div className="w-[1px] h-20 bg-white"></div>
          <div className="text-[8px] font-mono text-white vertical-text uppercase tracking-widest">Incredible Place Film</div>
          <div className="w-[1px] h-20 bg-white"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float3D {
          0%, 100% { transform: rotateX(5deg) rotateY(-5deg) translateZ(20px); }
          50% { transform: rotateX(-5deg) rotateY(5deg) translateZ(0px); }
        }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .vertical-text { writing-mode: vertical-rl; }
        .logo-shadow {
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.4), 1px 1px 0 #7c3aed, 2px 2px 0 #6d28d9, 3px 3px 0 #5b21b6;
        }
        .logo-shadow-white {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.1), 1px 1px 0 #f8fafc, 2px 2px 0 #e2e8f0, 3px 3px 0 #cbd5e1;
        }
      `}} />
    </div>
  );
};

export default Hero;
