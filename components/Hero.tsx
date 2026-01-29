
import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  isAudioEnabled: boolean;
}

const Hero: React.FC<HeroProps> = ({ isAudioEnabled }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const videoUrl = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769623637/NLJ_ddeqxn.mp4";
  const id = "hero-video";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleOtherPlay = (e: any) => {
      if (e.detail.id !== id && videoRef.current) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('video-playing', handleOtherPlay);
    return () => {
      observer.disconnect();
      window.removeEventListener('video-playing', handleOtherPlay);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.muted = !isAudioEnabled;
        videoRef.current.play().catch(() => {});
        window.dispatchEvent(new CustomEvent('video-playing', { detail: { id } }));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isAudioEnabled]);

  return (
    <div ref={containerRef} className="relative w-full h-[85vh] md:h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video 
          ref={videoRef}
          loop 
          playsInline
          autoPlay
          muted={!isAudioEnabled}
          onPlay={() => window.dispatchEvent(new CustomEvent('video-playing', { detail: { id } }))}
          className="w-full h-full object-cover z-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>
      </div>

      {!isAudioEnabled && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
          <div className="px-6 py-3 bg-violet-600 border border-white/20 rounded-full shadow-lg">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Toque para ativar o som</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
