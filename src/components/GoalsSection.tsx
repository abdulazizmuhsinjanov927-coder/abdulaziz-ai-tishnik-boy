import React, { useState } from 'react';
import { Target, Terminal, Cpu, Globe2, Rocket, Stars, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FutureGoal } from '../types';
import techBackdrop from '../assets/images/hero_tech_backdrop_1790738999612.jpg';

interface GoalsSectionProps {
  onOpenPlayground: () => void;
}

export const GoalsSection: React.FC<GoalsSectionProps> = ({ onOpenPlayground }) => {
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);

  const goals: FutureGoal[] = [
    {
      id: 'g1',
      number: '01',
      title: 'Kuchli dasturchi bo‘lish',
      vision:
        'Murakkab algoritmlarni qiynalmasdan yechadigan, zamonaviy dasturlash tillarini (Python, JavaScript, TypeScript) puxta biladigan professional muhandis darajasiga yetishish.',
      actionPlan: 'Har kuni yangi masalalar yechish, algoritmlarni chuqur tahlil qilish va amaliy loyihalar ustida ishlash.',
      timeframe: 'Doimiy intilish',
      icon: 'terminal',
      category: 'Texnik Mahorat',
    },
    {
      id: 'g2',
      number: '02',
      title: 'AI texnologiyalarini chuqur o‘rganish',
      vision:
        'Sun’iy intellektning faqat foydalanuvchisi emas, balki uni yaratuvchisi va moslashtiruvchisi bo‘lish. Neyron tarmoqlar, kompyuter ko‘rishi va katta til modellarini chuqur o‘rganish.',
      actionPlan: 'AI nazariyasi va amaliyoti bilan parallel shug‘ullanish, ochiq kodli AI kutubxonalarini o‘zlashtirish.',
      timeframe: 'Yaqin kelajak',
      icon: 'cpu',
      category: 'Sun’iy Intellekt',
    },
    {
      id: 'g3',
      number: '03',
      title: 'Foydali web-saytlar va dasturlar yaratish',
      vision:
        'Odamlar kundalik hayotida foydalanadigan, muammolarini yechadigan qulay, chiroyli va tezkor web-platformalar hamda mobil ilovalar ishlab chiqish.',
      actionPlan: 'Foydalanuvchi tajribasi (UX) va qulaylikka e’tibor qaratgan holda yangi web servislar prototiplarini yaratish.',
      timeframe: 'Amaliy bosqich',
      icon: 'globe',
      category: 'Foydali Dasturlar',
    },
    {
      id: 'g4',
      number: '04',
      title: 'O‘z IT loyihalarimni ishga tushirish',
      vision:
        'Tengdoshlarim, yoshlar va butun jamiyat uchun xizmat qiladigan shaxsiy startap va innovatsion IT loyihalarini mustaqil ravishda jonli efirga chiqarish.',
      actionPlan: 'G‘oyalarni rejalashtirish, jamoa bilan ishlash madaniyatini o‘rganish va MVP loyihalarni yaratish.',
      timeframe: 'Katta qadam',
      icon: 'rocket',
      category: 'Startap & Mahsulot',
    },
    {
      id: 'g5',
      number: '05',
      title: 'Kelajakda katta texnologik loyihalar yaratish',
      vision:
        'O‘zbekiston nomini jahon axborot texnologiyalari xaritasida yuksaltirishga hissa qo‘shadigan, xalqaro miqyosdagi ulkan AI va IT ekotizimlarini barpo etish.',
      actionPlan: 'Ilm olishdan to‘xtamaslik, jahon standartlariga intilish va eng ilg‘or texnologiyalarni yurtimizga tatbiq etish.',
      timeframe: 'Ulug‘vor maqsad',
      icon: 'stars',
      category: 'Xalqaro Maydon',
    },
  ];

  const currentGoal = goals[activeGoalIndex];

  return (
    <section id="goals" className="py-24 relative overflow-hidden">
      
      {/* Background with futuristic tech backdrop image overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={techBackdrop}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060913] via-[#060913]/90 to-[#060913]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>FUTURISTIK KELAJAK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 text-white">
            Maqsadlarim
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Katta orzular aniq rejalardan va to‘xtovsiz intilishdan boshlanadi.
          </p>
        </div>

        {/* Futuristic Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 5 Goal Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {goals.map((goal, idx) => {
              const isActive = activeGoalIndex === idx;
              return (
                <button
                  key={goal.id}
                  onClick={() => setActiveGoalIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-950/80 via-slate-900 to-purple-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                      : 'bg-[#090e1e]/70 hover:bg-slate-900/80 border-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-1 rounded-md border ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      {goal.number}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {goal.title}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        {goal.category}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Goal Futuristic Showcase Display (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-[#0a0f20]/95 border border-cyan-500/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Futuristic ambient corner glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Target className="w-4 h-4" />
                    <span>MAQSAD {currentGoal.number} / 05</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-full">
                    {currentGoal.timeframe}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                    {currentGoal.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4">
                    Yo‘nalish: <span className="text-cyan-300">{currentGoal.category}</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentGoal.vision}
                  </p>
                </div>

                {/* Action Plan */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-2">
                  <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Harakatlar rejasi:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {currentGoal.actionPlan}
                  </p>
                </div>

              </div>

              {/* Bottom Interactive Bar */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-slate-400">
                  Status: <span className="text-emerald-400">Maqsad sari qat’iy harakatda</span>
                </div>

                <button
                  type="button"
                  onClick={onOpenPlayground}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Abdulazizning AI G‘oyalarini sinash</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
