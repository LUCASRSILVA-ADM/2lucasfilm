
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Start' },
    { id: 'about', label: 'Story' },
    { id: 'skills', label: 'Gear' },
    { id: 'projects', label: 'Reel' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-8 pointer-events-none">
      <div className="font-black text-2xl italic tracking-tighter pointer-events-auto">
        LUCAS<span className="text-amber-500">.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 px-8 py-3 bg-black/40 backdrop-blur-xl border border-white/5 rounded-sm pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-colors hover:text-amber-500 ${
              activeSection === item.id ? 'text-amber-500' : 'text-gray-400'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden lg:block pointer-events-auto">
        <a href="#contact" className="text-[10px] font-mono border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all uppercase">
          Book Session
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
