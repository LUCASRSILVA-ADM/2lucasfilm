
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'documentaries', label: 'Documentários' },
    { id: 'featured', label: 'Destaques' },
    { id: 'vertical', label: 'Social Content' },
    { id: 'usability', label: 'Usabilidade' },
    { id: 'about', label: 'Quem Somos' }
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit group">
      <div 
        className={`flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
          isHovered ? 'px-10 scale-105 border-violet-500/40 bg-black/80' : 'hover:border-white/20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="font-black text-xs italic tracking-tighter mr-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
          <span className="text-white">2LUCAS</span><span className="text-violet-500">FILM</span>
        </div>
        
        <div className={`flex items-center gap-8 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-80 translate-x-1'}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap relative group/item ${
                activeSection === item.id ? 'text-violet-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-violet-500 transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover/item:w-full'}`}></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
