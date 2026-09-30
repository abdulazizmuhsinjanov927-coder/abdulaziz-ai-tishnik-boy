import React, { useState } from 'react';
import { Bot, Code, Globe, Rocket, Brain, Lightbulb, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { InterestItem } from '../types';

interface InterestsSectionProps {
  onOpenPlayground: () => void;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ onOpenPlayground }) => {
  const [selectedInterest, setSelectedInterest] = useState<InterestItem | null>(null);

  const interests: InterestItem[] = [
    {
      id: 'ai',
      title: 'Sun’iy intellekt',
      iconName: 'bot',
      category: 'Kelajak Asosi',
      shortDesc: 'Neyron tarmoqlar, generativ AI modellari, prompt muhandisligi va aqlli tizimlar arxitekturasi.',
      fullDesc:
        'Sun’iy intellekt men uchun eng sevimli soha. Men AI modellari qanday fikrlashi, matn va tasvirlarni qanday qayta ishlashi, insonlarning og‘ir va zerikarli ishlarini qanday yengillashtirishi mumkinligini doim o‘rganaman. Kelajakda o‘zbek tilida mukammal muloqot qiladigan yoshlar uchun foydali AI tizimlar yaratishni orzu qilaman.',
      skills: ['LLM & Chatbot modellari', 'Prompt Engineering', 'AI bilan avtomatlashtirish', 'Neyron tarmoqlar mantig‘i'],
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      glowColor: 'hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
    },
    {
      id: 'coding',
      title: 'Dasturlash',
      iconName: 'code',
      category: 'Mantiqiy Fikrlash',
      shortDesc: 'Algoritmlar, ma’lumotlar tuzilmasi, Python va JavaScript mantiqi hamda muammolarni tizimli hal qilish.',
      fullDesc:
        'Dasturlash orqali inson o‘z kompyuteriga har qanday vazifani buyura oladi. IlmHub’dagi darslarda algoritmlarning ishlash mexanizmi, shart operatorlari, sikllar va funksiyalar bilan ishlashni o‘rganib kelmoqdaman. Kod yozish — bu mantiq va ijodkorlikning ajoyib uyg‘unligi.',
      skills: ['Python asoslari', 'Algoritmik tafakkur', 'Shartlar va sikllar', 'Toza kod yozish madaniyati'],
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      glowColor: 'hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    },
    {
      id: 'web',
      title: 'Web Development',
      iconName: 'globe',
      category: 'Raqamli Dunyo',
      shortDesc: 'Zamonaviy web-saytlar, chiroyli dizaynlar, HTML, CSS, JavaScript va interaktiv interfeyslar.',
      fullDesc:
        'Web-saytlar — bu butun dunyo ko‘rishi mumkin bo‘lgan raqamli eshikdir. Foydalanuvchilar uchun qulay, neon uslubidagi zamonaviy interfeyslar, animatsiyalar va tezkor sahifalar yaratish menga juda yoqadi. Web texnologiyalarining yangi imkoniyatlarini muntazam kuzatib boraman.',
      skills: ['HTML5 & CSS3', 'JavaScript asoslari', 'Responsive Dizayn', 'UI/UX tushunchalari'],
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      glowColor: 'hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
    },
    {
      id: 'tech',
      title: 'Texnologiyalar',
      iconName: 'rocket',
      category: 'Innovatsiyalar',
      shortDesc: 'Zamonaviy gadjetlar, bulutli texnologiyalar, robototexnika va kelajakning eng ilg‘or ixtirolari.',
      fullDesc:
        'Dunyo texnologiyalar bilan juda tez rivojlanmoqda. Kvant kompyuterlari, aqlli uylar, avtonom transportlar va kosmik texnologiyalar qanday ishlashini o‘rganish menga ulkan ilhom beradi. Men ham ana shunday texnologiyalar yaratuvchisi bo‘lishni maqsad qilganman.',
      skills: ['Kelajak texnologiyalari', 'Bulutli xizmatlar', 'IoT va aqlli qurilmalar', 'Kiberxavfsizlik asoslari'],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      glowColor: 'hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
    },
    {
      id: 'learning',
      title: 'Yangi bilimlar',
      iconName: 'brain',
      category: 'Doimiy O‘sish',
      shortDesc: 'Har kuni yangi mavzularni o‘zlashtirish, foydali kitoblar mutolaasi va intellektual salohiyat.',
      fullDesc:
        'Bilim olish — har bir muvaffaqiyatning kalitidir. 7-sinf darslarida yaxshi o‘qish bilan birga, bo‘sh vaqtimda ITga doir maqolalar, texnologik darsliklar va rivojlanishga undovchi kitoblarni o‘qishni odat qilganman. “Har kuni kamida bitta yangi narsa o‘rganish” — mening qoidam.',
      skills: ['Mustaqil izlanish', 'Tanqidiy fikrlash', 'Kitoblar mutolaasi', 'Vaqtni rejalashtirish'],
      gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      glowColor: 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
    },
    {
      id: 'projects',
      title: 'Kreativ loyihalar',
      iconName: 'lightbulb',
      category: 'Amaliy Yechimlar',
      shortDesc: 'O‘z g‘oyalarini hayotga tatbiq etish, yoshlar va tengdoshlar uchun qiziqarli raqamli mahsulotlar.',
      fullDesc:
        'Nazariyani amaliyotda sinash — eng yaxshi o‘rganish usuli. Men maktabdagi do‘stlarimga darslarni qiziqarliroq qilish uchun kichik botlar, mini o‘yinlar va kalkulyatorlar yaratish ustida ishlayman. Har bir loyiha yangi tajriba demakdir.',
      skills: ['G‘oyalarni prototip qilish', 'Foydali mini dasturlar', 'Tengdoshlar uchun yordamchi tizimlar', 'Loyiha boshqaruvi'],
      gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
      glowColor: 'hover:border-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'code':
        return <Code className="w-6 h-6 text-purple-400" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'rocket':
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-amber-400" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative overflow-hidden tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>INTELLEKTUAL MAYDON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 text-white">
            Mening qiziqishlarim
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Meni ilhomlantiradigan va har kuni yangi bilim olishga undaydigan asosiy yo‘nalishlar:
          </p>
        </div>

        {/* 6 Responsive Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interests.map((interest) => (
            <div
              key={interest.id}
              onClick={() => setSelectedInterest(interest)}
              className={`group relative rounded-3xl bg-[#090e1d]/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${interest.glowColor} hover:-translate-y-1.5`}
            >
              {/* Subtle top corner gradient */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${interest.gradient} rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
              />

              <div>
                {/* Header: Icon + Category unboxed text */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(interest.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    {interest.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {interest.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {interest.shortDesc}
                </p>
              </div>

              {/* Card Footer: Skills previews + details button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-mono">
                  {interest.skills.length} asosiy qobiliyat
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Batafsil</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick action bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Har bir qiziqish yo‘nalishi bo‘yicha interaktiv namunalarni ko‘rishni xohlaysizmi?</span>
            </span>
            <button
              onClick={onOpenPlayground}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 transition-colors cursor-pointer"
            >
              AI Laboratoriyani sinash
            </button>
          </div>
        </div>

        {/* Detailed Modal for Selected Interest */}
        {selectedInterest && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedInterest(null)}
          >
            <div
              className="relative w-full max-w-xl rounded-3xl bg-[#0b1021] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top ambient highlight */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${selectedInterest.gradient} rounded-full blur-3xl pointer-events-none`}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedInterest(null)}
                aria-label="Yopish"
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getIcon(selectedInterest.iconName)}
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400">
                    {selectedInterest.category}
                  </div>
                  <h3 id="modal-title" className="text-2xl font-bold text-white font-display">
                    {selectedInterest.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 my-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{selectedInterest.fullDesc}</p>

                <div className="pt-3">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
                    Abdulaziz o‘rganayotgan asosiy tushunchalar:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedInterest.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedInterest(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Yopish
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedInterest(null);
                    onOpenPlayground();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  Laboratoriyada ko‘rish
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
