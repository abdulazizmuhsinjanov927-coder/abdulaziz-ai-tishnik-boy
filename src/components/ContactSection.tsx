import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, MessageSquare, Sparkles, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrUser: '',
    subject: 'Salom va tabrik',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const safeContactEmail = 'abdulaziz.aitishnik@gmail.com';

  const quickPresets = [
    'Salom berish va tanishish 👋',
    'Hamkorlik yoki IT g‘oya 💡',
    'Ilhomlantiruvchi so‘zlar ✨',
    'AI loyihasi taklifi 🤖',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Simulate sending safely
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(safeContactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden tech-grid-bg">
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-600/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>ALOQA & XAVFSIZ PLACEHOLDER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 text-white">
            Men bilan bog‘lanish
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            G‘oyalar, fikr-mulohazalar yoki yosh dasturchini qo‘llab-quvvatlash uchun xabar qoldiring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Safety Note & Official Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Safe Notice Card */}
            <div className="rounded-3xl bg-[#090e1f]/90 border border-cyan-500/25 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    Xavfsizlik va Maxfiylik
                  </h3>
                  <div className="text-xs text-slate-400 font-mono">
                    12 yoshli yosh iqtidor
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yoshim 12 da bo‘lganligi sababli, shaxsiy xavfsizlik va maxfiylik qoidalariga ko‘ra shaxsiy telefon raqam va uy manzili bu yerda ko‘rsatilmaydi. Barcha xabarlar va hamkorlik takliflari xavfsiz aloqa kanallari orqali qabul qilinadi.
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs font-mono text-cyan-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>IlmHub o‘quv markazi o‘quvchisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Xavfsiz va madaniyatli muloqot</span>
                </div>
              </div>
            </div>

            {/* Safe Contact Placeholder card with copy */}
            <div className="rounded-3xl bg-[#0a0f20]/80 border border-slate-800 p-6 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Elektron aloqa manzili
              </div>
              
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm">
                <div className="flex items-center gap-2 text-slate-200 font-mono text-xs truncate mr-2">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{safeContactEmail}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Nusxalandi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Nusxalash</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Kelajakdagi qo‘shma IT loyihalar yoki maslahatlar yuzasidan bemalol yozishingiz mumkin.
              </p>
            </div>

          </div>

          {/* Right Column: Safe Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#090e1f]/95 border border-cyan-500/25 p-6 sm:p-8 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Rahmat, xabaringiz qabul qilindi!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    E’tiboringiz va iliq tilaklaringiz uchun minnatdorman! Abdulaziz imkon qadar tezroq xabaringizni ko‘rib chiqadi.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        emailOrUser: '',
                        subject: 'Salom va tabrik',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Yangi xabar yuborish</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
                    <MessageSquare className="w-4 h-4" />
                    <span>XAVFSIZ XABAR QOLDIRISH FORMASI</span>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="mb-2">
                    <label className="block text-xs text-slate-400 mb-1.5 font-mono">
                      Tezkor mavzuni tanlang:
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {quickPresets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: preset })}
                          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            formData.subject === preset
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/80 font-medium'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Ismingiz <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Jasur, Sardor..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                    />
                  </div>

                  {/* Email / Username Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email yoki Telegram login (ixtiyoriy)
                    </label>
                    <input
                      type="text"
                      placeholder="Masalan: @username yoki email@domen.uz"
                      value={formData.emailOrUser}
                      onChange={(e) => setFormData({ ...formData, emailOrUser: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Xabaringiz <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Abdulazizga iliq tilaklar, maslahat yoki IT bo‘yicha savolingizni yozing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 hover:brightness-110 active:scale-98 rounded-xl transition-all duration-200 neon-glow-btn cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xabarni yuborish</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
