import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenPlayground: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayground }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'interests', 'timeline', 'goals', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Bosh sahifa' },
    { id: 'about', label: 'Men haqimda' },
    { id: 'interests', label: 'Qiziqishlarim' },
    { id: 'timeline', label: 'Mening yo‘lim' },
    { id: 'goals', label: 'Maqsadlarim' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060913]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark with subtle high-tech character */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2 group text-base sm:text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#22d3ee]"></span>
            <span className="font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Abdulaziz
            </span>
            <span className="text-xs font-mono text-cyan-400/80 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
              AI Tishnik
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav
            aria-label="Asosiy menyu"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPlayground}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)] whitespace-nowrap"
              title="Abdulazizning AI G‘oyalar laboratoriyasini ochish"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Laboratoriya</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 rounded-lg hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.4)] whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
              <span>Bog‘lanish</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Menyuni ochish"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-[#060913]/95 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlayground();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 rounded-lg"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>AI Laboratoriyasi</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
