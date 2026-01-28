
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/5 pb-10">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">Trabalhos <span className="text-violet-500">Recentes</span></h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">Frames que contam histórias.</p>
        </div>
        <div className="hidden md:block">
          <p className="text-slate-400 text-sm max-w-xs text-right italic font-light">
            Uma seleção de produções que definem nossa identidade visual.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`group relative space-y-6 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 border border-white/5">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest bg-black/80 text-violet-300 px-3 py-1 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic group-hover:text-violet-400 transition-colors tracking-tighter">
                {project.title}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {project.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white hover:text-violet-500 transition-colors">
                Ver Projeto 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
