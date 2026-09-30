import React, { useState } from 'react';
import { X, Terminal, Sparkles, Bot, Code, Play, RefreshCw, CheckCircle2 } from 'lucide-react';

interface AiPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiPlaygroundModal: React.FC<AiPlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [selectedTool, setSelectedTool] = useState<'assistant' | 'code' | 'prompt'>('assistant');
  const [inputText, setInputText] = useState('7-sinf o‘quvchisi uchun dasturlashni boshlash bo‘yicha 3 ta maslahat');
  const [outputResult, setOutputResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const tools = [
    {
      id: 'assistant' as const,
      name: 'AI Maktab Yordamchisi',
      desc: 'Maktab fanlari va ITni birlashtiruvchi aqlli konsept',
      defaultPrompt: 'Dasturlash va maktab fanlarini qanday qilib birgalikda o‘rganish mumkin?',
    },
    {
      id: 'code' as const,
      name: 'Python Mantiq Sinovi',
      desc: 'IlmHub’da o‘rganilgan dasturlash algoritmlari',
      defaultPrompt: 'def salom_ber(ism): return f"Salom {ism}, kelajak dasturchisi!"',
    },
    {
      id: 'prompt' as const,
      name: 'Kreativ AI G‘oya Generator',
      desc: 'Yoshlar uchun foydali IT startap g‘oyalari',
      defaultPrompt: 'O‘zbekiston maktablari uchun 1 ta eng qulay AI yordamchi g‘oyasi',
    },
  ];

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setOutputResult(null);

    setTimeout(() => {
      setIsProcessing(false);
      if (selectedTool === 'assistant') {
        setOutputResult(
          `🤖 [AI Tishnik Javobi]:\n` +
          `1. Mantiqiy fanlar bilan boshlang: Matematika va fizika algoritmlar mantig‘ini tushunishga katta yordam beradi.\n` +
          `2. IlmHub kabi markazlarda amaliyot qiling: Har kuni 30-40 daqiqa kod yozish yangi bilimlarni mustahkamlaydi.\n` +
          `3. O‘z mini-loyihangizni yarating: Do‘stlaringiz uchun kichik dastur yoki interaktiv sahifa yasash eng zo‘r motivatsiya!`
        );
      } else if (selectedTool === 'code') {
        setOutputResult(
          `💻 [Python Simulyatori]:\n` +
          `Sintaksis tekshirildi: ✅ Muvaffaqiyatli!\n` +
          `Chiqish (Output): "Salom Abdulaziz, kelajak dasturchisi!"\n` +
          `Xulosa: Funksiya toza va optimallashtirilgan.`
        );
      } else {
        setOutputResult(
          `💡 [Abdulazizning AI G‘oya Konsepti]:\n` +
          `Loyiha nomi: "AqlliDars AI"\n` +
          `Mohiyati: 7-sinf o‘quvchilariga murakkab formulalarni qiziqarli animatsiyalar va o‘yin shaklida tushuntirib beruvchi interaktiv sun’iy intellekt yordamchisi.`
        );
      }
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#090e1e] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Abdulazizning AI Laboratoriyasi
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                12 yoshli yosh mutaxassisning interaktiv konseptsiyalari
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Yopish"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tool Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-5">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTool(t.id);
                setInputText(t.defaultPrompt);
                setOutputResult(null);
              }}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                selectedTool === t.id
                  ? 'bg-cyan-950/50 border-cyan-400/80 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-xs font-bold text-cyan-300 mb-1">{t.name}</div>
              <div className="text-[11px] text-slate-400 leading-snug line-clamp-2">{t.desc}</div>
            </button>
          ))}
        </div>

        {/* Interactive Workspace */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center justify-between">
              <span>G‘oya yoki so‘rov:</span>
              <span className="text-[11px] text-cyan-400">Tahrirlash mumkin</span>
            </label>
            <textarea
              rows={2}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-mono text-xs transition-colors outline-none resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:brightness-110 active:scale-98 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Qayta ishlanmoqda...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Ishga tushirish</span>
                </>
              )}
            </button>
          </div>

          {/* Result Output Window */}
          {outputResult && (
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-line animate-in fade-in duration-200 shadow-inner">
              {outputResult}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>IlmHub bilimlariga asoslangan interaktiv modul</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
