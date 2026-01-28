
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Olá. Sou o CineGuide, assistente do Lucas. Quer saber sobre o showreel dele ou sobre o projeto Incredible Place?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[550px] bg-black border border-white/10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-5 bg-amber-600 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-black flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4H3v16h18V4h-3z" />
                </svg>
              </div>
              <span className="font-black italic uppercase tracking-widest text-black text-sm">CineGuide v1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm font-light leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-amber-600 text-black rounded-sm font-bold' 
                    : 'bg-white/5 text-gray-300 border border-white/10 rounded-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 border-t border-white/5 bg-black">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Director..."
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-amber-600 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-500 p-3 rounded-sm text-black transition-colors disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-amber-600 hover:bg-amber-500 rounded-sm flex items-center justify-center shadow-2xl shadow-amber-600/20 transition-all active:scale-90 group"
      >
        <svg className={`w-8 h-8 text-black transition-all ${isOpen ? 'rotate-90 scale-0' : 'group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
        <svg className={`absolute w-8 h-8 text-black transition-all ${isOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AIChatbot;
