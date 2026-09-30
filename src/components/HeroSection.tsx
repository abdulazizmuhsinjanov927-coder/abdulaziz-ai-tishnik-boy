import React, { useState } from 'react';
import { ArrowRight, Sparkles, Brain, Cpu, Code2, ChevronDown, CheckCircle2 } from 'lucide-react';
import avatarImg from '../assets/images/abdulaziz_avatar_1790738981133.jpg';

interface HeroSectionProps {
  onExploreAbout: () => void;
  onExploreInterests: () => void;
  onOpenPlayground: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreAbout,
  onExploreInterests,
  onOpenPlayground,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-bg"
    >
      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Young Creator High-Tech Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>12 yoshli dasturchi · IlmHub ta’limi (2 yil)</span>
            </div>

            {/* Greeting */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-2 flex items-center gap-2">
              Salom, men Abdulaziz <span className="inline-block animate-bounce origin-bottom">👋</span>
            </p>

            {/* Massive Creative Headline: AI Tishnik Boy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-display">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                AI Tishnik
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]">
                Boy
              </span>
            </h1>

            {/* Short Bio strictly following prompt */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Men 12 yoshli, IT va sun’iy intellektga qiziqadigan 7-sinf o‘quvchisiman. Men har kuni yangi texnologiyalarni o‘rganishga va o‘z g‘oyalarimni yaratishga harakat qilaman.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl transition-all duration-300 neon-glow-btn cursor-pointer"
              >
                <span>Men haqimda</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreInterests}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-100 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-cyan-500/50 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <Brain className="w-4 h-4 text-purple-400" />
                <span>Mening qiziqishlarim</span>
              </button>

              <button
                onClick={onOpenPlayground}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Sinov Qutisi</span>
              </button>
            </div>

            {/* Clean Proof Metadata Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800/80 w-full max-w-xl">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Cpu className="w-3.5 h-3.5" /> IlmHub 2 yil
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <Brain className="w-3.5 h-3.5" /> 7-sinf o‘quvchisi
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Sparkles className="w-3.5 h-3.5" /> Kelajak IT Mutaxassisi
              </span>
            </div>
          </div>

          {/* Right Column: Holographic 3D Avatar Card & Interactive Tech Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Glowing Orbital Ring behind avatar */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-sky-400 rounded-3xl blur-lg opacity-45 group-hover:opacity-85 transition duration-1000 group-hover:duration-200 animate-pulse"
                aria-hidden="true"
              />

              {/* Main Avatar Container */}
              <div className="relative rounded-3xl bg-[#0a0f1d]/90 border border-cyan-500/30 overflow-hidden shadow-2xl p-4">
                
                {/* Image Frame with Aspect Ratio */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <img
                    src={avatarImg}
                    alt="Abdulaziz - 12 yoshli yosh dasturchi va AI ishqibozi"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                  />

                  {/* Fallback container if image is loading or fails */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3">
                        <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
                      </div>
                      <p className="text-sm font-bold text-white">Abdulaziz</p>
                      <p className="text-xs text-cyan-400">AI Tishnik Boy</p>
                    </div>
                  )}

                  {/* Bottom overlay gradient for crisp typography */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent pointer-events-none" />

                  {/* Badge floating over avatar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">Abdulaziz</span>
                        <span className="text-[10px] text-cyan-300 font-mono">Yosh: 12 · 7-sinf</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/70 border border-purple-500/30 px-2 py-0.5 rounded">
                      IlmHub Talabasi
                    </span>
                  </div>
                </div>

                {/* Cyber Card Footer with quick interactive mini-code bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <span className="text-cyan-400">status:</span>
                    <span>faol izlanishda 🚀</span>
                  </div>
                  <button
                    onClick={handleShareClick}
                    className="text-slate-400 hover:text-cyan-300 font-mono text-[11px] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    {copiedStatus ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Nusxalandi!</span>
                      </>
                    ) : (
                      <span>Havolani ulashish</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Floating micro pill stats card (attached cleanly outside) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0e172a]/95 border border-cyan-500/30 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Sun’iy Intellekt</div>
                  <div className="text-[10px] text-slate-400 font-mono">Kelajak texnologiyasi</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0e172a]/95 border border-purple-500/30 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">2 Yil IlmHub</div>
                  <div className="text-[10px] text-slate-400 font-mono">Amaliy tajriba</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onExploreAbout}
            aria-label="Pastga o‘tish"
            className="p-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
