
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">
              VAMOS <br/> <span className="text-violet-500 text-6xl md:text-9xl">FILMAR?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Pronto para transformar seu destino ou marca em uma narrativa cinematográfica de elite? O próximo nível começa aqui.
            </p>
          </div>
          
          <div className="space-y-8 font-mono">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-600/10 transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Briefing Direto</div>
                <div className="text-white text-lg font-bold group-hover:text-violet-400 transition-colors">contato@2lucasfilm.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/30 p-8 md:p-12 border border-white/5 relative overflow-hidden group shadow-2xl rounded-sm">
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-violet-500/20 group-hover:border-violet-500/50 transition-all duration-700"></div>
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 py-20 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-violet-500/10 text-violet-500 flex items-center justify-center rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black uppercase italic mb-2 text-white">Sinal Recebido</h3>
                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">Entraremos em contato em breve.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500">Nome ou Marca</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white placeholder-slate-700 font-light"
                  placeholder="DIGITE AQUI"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500">Seu Melhor E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white placeholder-slate-700 font-light"
                  placeholder="EMAIL@EXEMPLO.COM"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500">O Projeto</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white resize-none placeholder-slate-700 font-light"
                  placeholder="DESCREVA SEU OBJETIVO..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full py-6 bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-[0.5em] transition-all duration-500 active:scale-[0.98] shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Enviar Briefing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-white/10 to-violet-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
