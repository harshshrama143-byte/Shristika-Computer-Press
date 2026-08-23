import React, { useState, useEffect, useRef } from 'react';
import { 
  Printer, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { ShristikaLogo } from './ShristikaLogo';

interface HeaderProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mouseTilt, setMouseTilt] = useState({ rotateX: 0, rotateY: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'portfolio', 'about', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle 3D mouse parallax handler for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024 || isScrolled) return;
    const rect = headerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 1.5;
    const rotateY = ((x - centerX) / centerX) * 2;

    setMouseTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rotateX: 0, rotateY: 0 });
  };

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { label: 'ABOUT US', href: '#about', id: 'about' },
    { label: 'WHY US', href: '#why-us', id: 'why-us' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed top-0 left-0 right-0 z-50 perspective-1000 transition-all duration-300 pointer-events-none"
    >
      {/* Top Luxury Micro Bar */}
      <div className={`bg-[#071A3D] text-slate-200 text-xs py-1.5 px-4 hidden md:block border-b border-amber-400/20 shadow-xs pointer-events-auto transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <a 
              href={businessInfo.googleMapsUrl || "https://maps.app.goo.gl/18daCaEqs1FBpkTK8"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-amber-300 transition-colors text-[11px] font-medium"
              title="Open location in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
              <span className="truncate max-w-md font-sans">{businessInfo.address}</span>
            </a>
            <span className="hidden lg:flex items-center space-x-1 text-slate-400 text-[11px]">
              <Clock className="w-3 h-3 text-amber-400/80" />
              <span>Mon – Sat: 9:00 AM – 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-[#F2C866]" />
              <span className="text-[#F2C866] font-bold text-[11px] tracking-wide uppercase">
                High Quality Printing • Reasonable Price • Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Navigation Island */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 mt-1.5 sm:mt-2.5 pointer-events-auto">
        <div 
          style={{
            transform: `rotateX(${mouseTilt.rotateX}deg) rotateY(${mouseTilt.rotateY}deg) translateZ(4px)`,
          }}
          className={`navbar-3d-island rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_16px_36px_-8px_rgba(7,26,61,0.2),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] py-2 sm:py-2.5 px-3 sm:px-5' 
              : 'bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_14px_34px_-10px_rgba(7,26,61,0.15),0_6px_18px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] py-2.5 sm:py-3.5 px-3.5 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* LEFT: 3D Brand Logo Area */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="logo-3d-container flex items-center space-x-2.5 sm:space-x-3.5 group focus:outline-none shrink-0 cursor-pointer"
            >
              {/* Raised 3D Logo Seal */}
              <ShristikaLogo size="md" is3D={true} />

              {/* Typography */}
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-[#071A3D] leading-none font-['Montserrat']">
                  SHRISTIKA
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black tracking-widest text-[#123B78] uppercase leading-tight mt-0.5 font-['Montserrat']">
                  COMPUTER PRESS
                </span>
                <span className="text-[8px] font-bold text-slate-500 tracking-wider hidden xl:block uppercase mt-0.5">
                  Printing &amp; Designing Solutions
                </span>
              </div>
            </a>

            {/* CENTER: 3D Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 preserve-3d">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link-3d px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-bold tracking-wide transition-all relative cursor-pointer ${
                      isActive 
                        ? 'active-nav-pill text-[#071A3D] bg-blue-50/90 font-extrabold shadow-[0_2px_8px_-2px_rgba(18,59,120,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] border border-blue-200/60' 
                        : 'text-slate-700 hover:text-[#071A3D] hover:bg-slate-100/80 hover:shadow-xs'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#D9A441] via-[#F2C866] to-[#D9A441] rounded-full shadow-[0_1px_3px_rgba(217,164,65,0.6)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT: 3D Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-2.5 preserve-3d shrink-0">
              
              {/* 3D Call Button */}
              <button
                onClick={onOpenCall}
                title="Call Shristika Computer Press (6200796553 / 9835733642)"
                className="btn-3d-call px-3.5 py-2 rounded-xl text-white font-bold text-xs flex items-center space-x-1.5 cursor-pointer tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#F2C866]" />
                <span className="text-white text-[11px] xl:text-xs">CALL NOW</span>
              </button>

              {/* 3D WhatsApp Button */}
              <button
                onClick={onOpenWhatsApp}
                title="Chat on WhatsApp (6200796553 / 9835733642)"
                className="btn-3d-whatsapp px-3.5 xl:px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center space-x-1.5 cursor-pointer tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-[#12B76A]" />
                <span className="text-[11px] xl:text-xs">WHATSAPP</span>
              </button>

              {/* 3D Primary Quote CTA */}
              <button
                onClick={() => onOpenQuoteModal()}
                title="Get an Instant Custom Quote"
                className="btn-3d-quote px-4 xl:px-4.5 py-2 rounded-xl text-[#071A3D] font-extrabold text-xs flex items-center space-x-1.5 cursor-pointer tracking-wider shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#071A3D]" />
                <span className="text-[11px] xl:text-xs font-black">GET A QUOTE</span>
              </button>
            </div>

            {/* RIGHT: Mobile Controls (Quick Call, Quick WhatsApp & 3D Hamburger) */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 lg:hidden shrink-0">
              
              <button
                onClick={onOpenCall}
                aria-label="Call Shristika Computer Press"
                className="btn-3d-call p-2 sm:p-2.5 rounded-xl text-white cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#F2C866]" />
              </button>

              <button
                onClick={onOpenWhatsApp}
                aria-label="WhatsApp Shristika Computer Press"
                className="btn-3d-whatsapp p-2 sm:p-2.5 rounded-xl text-white cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#12B76A]" />
              </button>

              {/* 3D Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0d234d] to-[#071A3D] border border-[#D9A441]/40 text-[#F2C866] flex items-center justify-center shadow-[0_4px_10px_rgba(7,26,61,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Luxury Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-0 min-h-screen bg-[#071A3D]/95 backdrop-blur-xl z-50 p-5 pt-6 flex flex-col justify-between text-white animate-in fade-in zoom-in-95 duration-200 pointer-events-auto overflow-y-auto">
          
          {/* Top Bar of Mobile Menu */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <ShristikaLogo size="md" is3D={true} />
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tight text-white font-['Montserrat']">
                    SHRISTIKA
                  </span>
                  <span className="text-[10px] font-black tracking-widest text-[#F2C866] uppercase">
                    COMPUTER PRESS
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="mt-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl font-extrabold text-sm tracking-wide flex items-center justify-between transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#123B78] to-[#0d2757] text-[#F2C866] border border-[#D9A441]/30 shadow-md' 
                        : 'text-slate-200 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F2C866]' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom 3D Quick Action Cards */}
          <div className="mt-8 pt-5 border-t border-white/10 space-y-3">
            
            {/* 3D Get a Quote Mobile Card */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-3d-quote py-3.5 px-4 rounded-xl text-[#071A3D] font-black text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#071A3D]" />
              <span>GET A QUOTE</span>
            </button>

            {/* Dual 3D Buttons: Call & WhatsApp */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCall();
                }}
                className="btn-3d-call py-3 px-3 rounded-xl text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-[#D9A441]/30 shadow-md"
              >
                <Phone className="w-4 h-4 text-[#F2C866]" />
                <span>CALL NOW</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="btn-3d-whatsapp py-3 px-3 rounded-xl text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#12B76A]" />
                <span>WHATSAPP</span>
              </button>
            </div>

            {/* Studio Info Badge */}
            <div className="pt-2 text-center text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Shristika Computer Press</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Domuhan Cherki Road, Bodhgaya • +91 6200796553 / 9835733642</p>
            </div>

          </div>

        </div>
      )}
    </header>
  );
};
