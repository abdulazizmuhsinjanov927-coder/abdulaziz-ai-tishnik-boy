import React from 'react';
import { Milestone, Sparkles, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { TimelineMilestone } from '../types';

export const TimelineSection: React.FC = () => {
  const milestones: TimelineMilestone[] = [
    {
      step: '01',
      title: 'IlmHub’da o‘qishni boshladim',
      period: '2024-yil boshlanishi',
      description:
        'Axborot texnologiyalari olamiga ilk jiddiy qadam. Kompyuter savodxonligi, mantiqiy fikrlash algoritmlari va dasturlash olamining poydevori yaratildi.',
      keyLearnings: [
        'Kompyuter arxitekturasi va mantiqiy amallar',
        'Dasturlash muhitlari bilan ishlash',
        'Algoritmik masalalarni yechish',
      ],
      highlight: 'Ilk qadam',
    },
    {
      step: '02',
      title: '2 yil davomida bilimlarimni rivojlantirdim',
      period: '2024 – 2026 yillar',
      description:
        'IlmHub o‘quv markazida ustozlar rahbarligida uzluksiz ta’lim. Kodlash amaliyotlari, topshiriqlar, kichik mustaqil loyihalar va texnologik tushunchalarni chuqurlashtirish davri.',
      keyLearnings: [
        'Python va sintaksis amaliyoti',
        'Web sahifalar tuzish va dizayn prinsiplari',
        'Jamoada ishlash va fikr almashish',
      ],
      highlight: 'Tajriba to‘plash',
    },
    {
      step: '03',
      title: 'IT va AI’ga qiziqishim kuchaydi',
      period: 'Hozirgi davr',
      description:
        'Sun’iy intellektning mislsiz imkoniyatlarini kashf etish. Generativ AI, neyron tarmoqlar qanday ishlashi va ularni kundalik hayotda qo‘llashga bo‘lgan qiziqishning keskin ortishi.',
      keyLearnings: [
        'AI prompt muhandisligi',
        'Kelajak texnologiyalari tahlili',
        'AI vositalari yordamida tezkor rivojlanish',
      ],
      highlight: 'AI Ishtiyoqi',
    },
    {
      step: '04',
      title: 'Kelajakda o‘z loyihalarimni yaratishni maqsad qilganman',
      period: 'Kelajak viziyasi',
      description:
        'Olingan 2 yillik bilim va yangi texnologiyalarni birlashtirib, jamiyatga, tengdoshlarimga va O‘zbekiston ravnaqiga xizmat qiluvchi xalqaro darajadagi IT loyihalarini barpo etish.',
      keyLearnings: [
        'Yoshlar uchun foydali ta’limiy AI dasturlari',
        'Kuchli IT mutaxassisi darajasiga chiqish',
        'Innovatsion startaplar yaratish',
      ],
      highlight: 'Katta maqsad',
    },
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background glow lines */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>RIVOJLANISH XARITASI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 text-white">
            Mening yo‘lim
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            2 yillik izlanish, tajriba va kelajak sari qo‘yilgan qat’iy qadamlar xronologiyasi.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Neon Line for Desktop & Tablet */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 opacity-30"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8"
                >
                  {/* Left Column for Even (or Empty on desktop for Odd) */}
                  <div
                    className={`md:col-span-5 ${
                      isEven
                        ? 'md:text-right flex flex-col md:items-end'
                        : 'md:order-2 md:text-left flex flex-col md:items-start'
                    }`}
                  >
                    <div className="w-full rounded-3xl bg-[#090e1e]/90 border border-slate-800 p-6 sm:p-7 glass-panel-hover shadow-xl">
                      {/* Top label */}
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="text-xs font-mono text-cyan-400">
                          {item.period}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs font-mono text-purple-300">
                          {item.highlight}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key learnings */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                        {item.keyLearnings.map((learning, lIdx) => (
                          <div
                            key={lIdx}
                            className={`flex items-center gap-2 ${
                              isEven ? 'md:justify-end' : 'justify-start'
                            }`}
                          >
                            {!isEven && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                            <span>{learning}</span>
                            {isEven && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 hidden md:block" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node (2 cols on Desktop) */}
                  <div className="hidden md:flex md:col-span-2 md:order-1 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#0a0f1e] border-2 border-cyan-400 flex items-center justify-center font-display font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] z-10">
                        {item.step}
                      </div>
                      <div className="absolute w-16 h-16 rounded-2xl bg-cyan-500/20 blur-md pointer-events-none" />
                    </div>
                  </div>

                  {/* Empty Column to balance the grid on desktop */}
                  <div
                    className={`hidden md:block md:col-span-5 ${
                      isEven ? 'md:order-2' : 'md:order-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
