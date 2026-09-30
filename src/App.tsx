import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { InterestsSection } from './components/InterestsSection';
import { TimelineSection } from './components/TimelineSection';
import { GoalsSection } from './components/GoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiPlaygroundModal } from './components/AiPlaygroundModal';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  useEffect(() => {
    // Initial high-tech loading transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060913] text-white">
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 border-2 border-cyan-400/80 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] animate-pulse">
            <Terminal className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="absolute -inset-3 rounded-3xl bg-cyan-500/20 blur-xl animate-ping" />
        </div>
        <h2 className="text-xl font-bold font-display tracking-tight text-white mb-2">
          Abdulaziz — AI Tishnik Boy
        </h2>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>Futuristik portfolio yuklanmoqda...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Interactive AI Floating Particles & Neural Synapse Canvas */}
      <ParticleBackground />

      {/* Sticky 3-zone Glassmorphic Navbar */}
      <Navbar onOpenPlayground={() => setIsPlaygroundOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Section 1: Hero Section */}
        <HeroSection
          onExploreAbout={() => scrollToSection('about')}
          onExploreInterests={() => scrollToSection('interests')}
          onOpenPlayground={() => setIsPlaygroundOpen(true)}
        />

        {/* Section 2: Men haqimda */}
        <AboutSection />

        {/* Section 3: Mening qiziqishlarim */}
        <InterestsSection onOpenPlayground={() => setIsPlaygroundOpen(true)} />

        {/* Section 4: Mening yo‘lim (Timeline) */}
        <TimelineSection />

        {/* Section 5: Maqsadlarim */}
        <GoalsSection onOpenPlayground={() => setIsPlaygroundOpen(true)} />

        {/* Section 6: Kontakt (Xavfsiz placeholder) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Playground Modal */}
      <AiPlaygroundModal
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
      />
    </div>
  );
}
