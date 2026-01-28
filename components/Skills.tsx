
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const radarData = SKILLS.slice(0, 6).map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">A Arte Técnica</h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">Equipamento, Olhar e Narrativa.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="h-[500px] w-full bg-slate-900/40 border border-white/5 p-8 flex items-center justify-center relative group">
          <div className="absolute top-6 left-6 text-[9px] font-mono text-violet-500/40 uppercase tracking-widest">SINAL_DE_VIDEO_PROCESSED</div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#2e1065" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiência"
                dataKey="A"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.2}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#020617', border: '1px solid #2e1065', borderRadius: '0px' }}
                itemStyle={{ color: '#a78bfa' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold uppercase tracking-widest text-slate-300 text-sm group-hover:text-violet-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-violet-500/50">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800/50 h-[1px]">
                <div 
                  className="bg-violet-600 h-full transition-all duration-[1.5s] ease-out shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
