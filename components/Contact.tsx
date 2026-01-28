
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
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Vamos <span className="text-violet-500">Filmar?</span></h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Pronto para transformar seu destino ou projeto em uma obra de arte cinematográfica? Entre em contato e vamos criar algo incrível.
            </p>
          </div>
          
          <div className="space-y-8 font-mono">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Email Direto</div>
                <div className="text-white text-lg font-bold group-hover:text-violet-400 transition-colors">contato@incredibleplace.film</div>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Base de Operações</div>
                <div className="text-white text-lg font-bold group-hover:text-violet-400 transition-colors">São Paulo // Global</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-10 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-violet-500/20 group-hover:border-violet-500/50 transition-all"></div>
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 py-20 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-violet-500/10 text-violet-500 flex items-center justify-center rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black uppercase italic mb-2">Mensagem Recebida</h3>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Entraremos em contato em breve.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white placeholder-slate-700"
                  placeholder="DIGITE SEU NOME"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Seu Melhor Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white placeholder-slate-700"
                  placeholder="EMAIL@EXAMPLE.COM"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">O Briefing</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/40 border border-white/5 px-6 py-4 focus:outline-none focus:border-violet-600 transition-all text-white resize-none placeholder-slate-700"
                  placeholder="DESCREVA SEU PROJETO OU DESTINO..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-[0.4em] transition-all active:scale-[0.98] shadow-2xl shadow-violet-600/10"
              >
                Enviar Sinal
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
