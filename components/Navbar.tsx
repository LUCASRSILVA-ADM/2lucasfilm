
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'documentaries', label: 'Filmes' },
    { id: 'featured', label: 'Destaques' },
    { id: 'vertical', label: 'Vertical' },
    { id: 'usability', label: 'Action' },
    { id: 'about', label: 'Bio' }
  ];

  return (
    <nav className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-[100] w-fit group">
      <div 
        className={`flex items-center gap-2 px-6 py-2 md:py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_50px_rgba(0,0,0,0.6)] ${
          isHovered ? 'px-8 md:px-12 scale-105 border-violet-500/40 bg-black/80' : 'hover:border-white/20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="font-black text-[10px] md:text-xs italic tracking-tighter mr-4 md:mr-8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
          <span className="text-white">2LUCAS</span><span className="text-violet-500">FILM</span>
        </div>
        
        <div className={`flex items-center gap-4 md:gap-8 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[8px] md:text-[10px] font-mono font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap relative group/item ${
                activeSection === item.id ? 'text-violet-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.label.charAt(0)}</span>
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-violet-500 transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover/item:w-full'}`}></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
