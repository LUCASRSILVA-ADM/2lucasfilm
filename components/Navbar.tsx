
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { 
      id: 'home', 
      label: 'Início', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    { 
      id: 'documentaries', 
      label: 'Filmes', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
    },
    { 
      id: 'featured', 
      label: 'Destaques', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      id: 'vertical', 
      label: 'Vertical', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    { 
      id: 'usability', 
      label: 'Action', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    { 
      id: 'about', 
      label: 'Bio', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    }
  ];

  return (
    <nav className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-[100] w-fit group">
      <div 
        className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_50px_rgba(0,0,0,0.6)] ${
          isHovered ? 'md:px-12 scale-105 border-violet-500/40 bg-black/80' : 'hover:border-white/20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="font-black text-[10px] md:text-xs italic tracking-tighter mr-2 md:mr-8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
          <span className="text-white hidden sm:inline">2LUCAS</span><span className="text-violet-500 hidden sm:inline">FILM</span>
          <span className="text-violet-500 sm:hidden">2L</span>
        </div>
        
        <div className={`flex items-center gap-4 md:gap-8 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center justify-center transition-all duration-300 relative group/item ${
                activeSection === item.id ? 'text-violet-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {/* Desktop: Text */}
              <span className="hidden md:inline text-[10px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                {item.label}
              </span>
              
              {/* Mobile: Icons */}
              <span className="md:hidden">
                {item.icon}
              </span>

              <span className={`absolute -bottom-1 left-0 h-[1px] bg-violet-500 transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover/item:w-full'}`}></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
