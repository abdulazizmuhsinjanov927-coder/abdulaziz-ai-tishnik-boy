import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#04060d] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              <span className="font-display font-bold text-base text-white tracking-tight">
                Abdulaziz — AI Tishnik Boy
              </span>
            </div>
            <p className="text-xs text-slate-400">
              12 yoshli yosh dasturchi · 7-sinf o‘quvchisi · IlmHub ta’limi (2 yil)
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">Bosh sahifa</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">Men haqimda</a>
            <a href="#interests" className="hover:text-cyan-300 transition-colors">Qiziqishlarim</a>
            <a href="#timeline" className="hover:text-cyan-300 transition-colors">Yo‘lim</a>
            <a href="#goals" className="hover:text-cyan-300 transition-colors">Maqsadlarim</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Bog‘lanish</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Sahifa yuqorisiga qaytish"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-all cursor-pointer"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet Copyright Line */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© 2026 Abdulaziz. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Kreativ, zamonaviy va xavfsiz shaxsiy portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
