
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Main portfolio video
  const videoUrl = "https://res.cloudinary.com/dkzx2kuuu/video/upload/v1769623637/NLJ_ddeqxn.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const handleInteraction = () => {
      if (videoRef.current && !hasInteracted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
        setHasInteracted(true);
      }
    };

    window.addEventListener('click', handleInteraction, true);
    window.addEventListener('touchstart', handleInteraction, true);
    
    return () => {
      window.removeEventListener('click', handleInteraction, true);
      window.removeEventListener('touchstart', handleInteraction, true);
    };
  }, [hasInteracted]);

  return (
    <div className="relative w-full bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* 
        Using object-contain to ensure no cropping and zero quality loss.
        The video maintains its native aspect ratio.
      */}
      <div className="relative w-full h-full max-h-screen flex items-center justify-center">
        <video 
          ref={videoRef}
          loop 
          playsInline
          autoPlay
          muted={!hasInteracted}
          className="w-full h-full object-contain z-0 transition-opacity duration-1000"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* 
          Imperceptible transition overlay. 
          Blends the bottom edge of the video frame into the black background of the page.
        */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
      </div>

      {/* Audio Status Overlay */}
      <div className="absolute bottom-12 right-12 z-20 pointer-events-none flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${hasInteracted ? 'bg-violet-500 shadow-[0_0_12px_#8b5cf6]' : 'bg-white/30 animate-pulse'}`}></div>
        <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.4em]">
          {hasInteracted ? 'AUDIO_ON' : 'CLICK_FOR_SOUND'}
        </span>
      </div>
    </div>
  );
};

export default Hero;
