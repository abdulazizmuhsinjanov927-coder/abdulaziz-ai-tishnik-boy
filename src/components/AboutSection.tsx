import React, { useState } from 'react';
import { User, GraduationCap, Clock, Sparkles, BookOpen, Rocket, Check, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'skills'>('bio');

  const stats = [
    {
      value: '12+',
      label: 'Yosh',
      subtext: 'Yosh va maqsad sari intiluvchan',
      glow: 'from-cyan-500/20 to-blue-500/10',
      textColor: 'text-cyan-300',
    },
    {
      value: '7-sinf',
      label: 'Maktab ta’limi',
      subtext: 'Fanlar va IT uyg‘unligi',
      glow: 'from-purple-500/20 to-pink-500/10',
      textColor: 'text-purple-300',
    },
    {
      value: '2 yil',
      label: 'IlmHub ta’limi',
      subtext: 'Amaliy bilim va tajriba',
      glow: 'from-emerald-500/20 to-teal-500/10',
      textColor: 'text-emerald-300',
    },
    {
      value: '∞',
      label: 'Yangi g‘oyalar',
      subtext: 'Cheksiz ijodiy salohiyat',
      glow: 'from-amber-500/20 to-orange-500/10',
      textColor: 'text-amber-300',
    },
  ];

  const highlights = [
    {
      title: '7-sinf maktab o‘quvchisi',
      desc: 'Maktab darslari bilan bir qatorda zamonaviy raqamli texnologiyalarni chuqur o‘rganib kelmoqda.',
    },
    {
      title: 'IlmHub o‘quv markazida 2 yillik uzluksiz ta’lim',
      desc: 'IT asoslari, kompyuter mantig‘i va dasturlash yo‘nalishlarida muntazam amaliy tajriba.',
    },
    {
      title: 'Sun’iy intellekt (AI) ishqibozi',
      desc: 'Neyron tarmoqlar, zamonaviy AI modellari va avtomatlashtirish imkoniyatlariga kuchli qiziqish.',
    },
    {
      title: 'Kelajakdagi orzu va maqsad',
      desc: 'Xalqaro miqyosdagi kuchli IT mutaxassisi bo‘lib, odamlar hayotini yengillashtiruvchi loyihalar yaratish.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>SHAXSIY PROFIL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 text-white">
            Men haqimda
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Yosh bo‘lishimga qaramay, texnologiya va sun’iy intellekt olamida o‘z o‘rnimni topish uchun har kuni izlanaman.
          </p>
        </div>

        {/* 4 Quantitative Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-[#0b1021]/80 border border-slate-800 p-6 overflow-hidden glass-panel-hover"
            >
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${stat.glow} rounded-full blur-2xl pointer-events-none`}
              />
              <div className="relative z-10">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight mb-1 tabular-nums ${stat.textColor}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-normal">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Information Bento Card */}
        <div className="rounded-3xl bg-[#0a0f1f]/90 border border-cyan-500/20 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Core Identity Profile */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Abdulaziz
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <span>AI Tishnik Boy</span>
                      <span>·</span>
                      <span>Toshkent, O‘zbekiston</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Men 12 yoshdaman va 7-sinfda tahsil olaman. So‘nggi 2 yil davomida IlmHub o‘quv markazida axborot texnologiyalari va dasturlash bo‘yicha tizimli ta’lim olib kelmoqdaman. Sun’iy intellekt (AI) yangiliklari, algoritmlar va zamonaviy web texnologiyalari meni doim ilhomlantiradi.
                </p>
              </div>

              {/* Interactive Info Tabs */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      activeTab === 'bio'
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Asosiy ma’lumot
                  </button>
                  <button
                    onClick={() => setActiveTab('education')}
                    className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      activeTab === 'education'
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    IlmHub ta’limi
                  </button>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      activeTab === 'skills'
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Qiziqish yo‘nalishlari
                  </button>
                </div>

                {/* Tab content */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 min-h-[140px] flex items-center">
                  {activeTab === 'bio' && (
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">To‘liq ism:</span>
                        <span className="font-semibold text-white">Abdulaziz</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Yoshi:</span>
                        <span className="font-semibold text-cyan-300">12 yosh</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Sinfi:</span>
                        <span className="font-semibold text-purple-300">7-sinf o‘quvchisi</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-400">Asosiy e’tibor:</span>
                        <span className="font-semibold text-emerald-300">Sun’iy intellekt & Dasturlash</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'education' && (
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <p className="leading-relaxed">
                        <strong className="text-white">IlmHub o‘quv markazida 2 yillik ta’lim:</strong> Bu davrda kompyuter savodxonligidan tortib, algoritmik fikrlash, dasturlash asoslari va innovatsion texnologiyalardan to‘g‘ri foydalanish o‘rganildi.
                      </p>
                      <div className="flex items-center gap-2 pt-2 text-cyan-300 text-xs font-mono">
                        <Award className="w-4 h-4" />
                        <span>Muntazam amaliy mashg‘ulotlar va mini-loyihalar</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'skills' && (
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <p className="leading-relaxed mb-2">
                        Texnologiyaning eng qiziqarli sohalari bo‘yicha doimiy o‘rganish jarayonidaman:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span>AI vositalari & Promptlar</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Algoritmik mantiq</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Web Development asoslari</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Kreativ IT g‘oyalar</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Key Milestones / Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Asosiy yo‘nalishlar va ustuvorliklar</span>
              </h4>

              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    {index === 0 && <BookOpen className="w-4 h-4" />}
                    {index === 1 && <GraduationCap className="w-4 h-4" />}
                    {index === 2 && <Sparkles className="w-4 h-4" />}
                    {index === 3 && <Rocket className="w-4 h-4" />}
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Motivational Quote banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-900 border border-cyan-500/20">
                <p className="text-xs sm:text-sm italic text-slate-300">
                  “Kelajak bugun yangi texnologiyalarni o‘rganishdan va katta maqsadlar sari to‘xtovsiz harakat qilishdan boshlanadi.”
                </p>
                <div className="mt-2 text-[11px] font-mono text-cyan-400">
                  — Abdulaziz, AI Tishnik Boy
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
