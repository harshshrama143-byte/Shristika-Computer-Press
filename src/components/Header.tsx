import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronRight,
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = [
        'home',
        'services',
        'gallery',
        'why-us',
        'process',
        'about',
        'contact',
      ];
      const scrollPosition = window.scrollY + 140;

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
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Navy micro bar — address, hours, positioning line */}
      <div
        className={`bg-navy text-slate-300 hidden md:block pointer-events-auto transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-[11px]">
          <div className="flex items-center space-x-5">
            <a
              href={
                businessInfo.googleMapsUrl ||
                'https://maps.app.goo.gl/18daCaEqs1FBpkTK8'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 py-1 text-slate-300 hover:text-gold transition-colors"
              title="Open location in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate max-w-md">{businessInfo.address}</span>
            </a>
            <span className="hidden lg:flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold/80" />
              <span>Mon - Sat: 9:00 AM - 8:30 PM</span>
            </span>
          </div>

          <span className="text-gold font-semibold tracking-[0.14em] uppercase">
            High Quality Printing • Reasonable Price • Fast Service
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4 pointer-events-auto">
        <div
          className={`navbar-3d-island bg-white border rounded-2xl px-4 sm:px-6 ${
            isScrolled
              ? 'border-slate-200 shadow-lg py-2'
              : 'border-slate-200/70 shadow-md py-3'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="logo-3d-container flex items-center space-x-3 shrink-0 cursor-pointer"
            >
              <ShristikaLogo size="md" is3D={false} />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-navy leading-none font-heading">
                  SHRISTIKA
                </span>
                <span className="mt-1.5 block h-px w-full bg-gold/60" aria-hidden="true" />
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-royal uppercase leading-tight mt-1.5 font-heading">
                  Computer Press
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link-3d px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'active-nav-pill text-navy bg-soft font-semibold'
                        : 'text-slate-600 hover:text-royal'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
              <button
                onClick={() => onOpenQuoteModal()}
                title="Get an instant custom quote"
                className="btn-3d-primary px-5 py-2.5 text-sm font-semibold cursor-pointer"
              >
                Order Now
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center space-x-2 shrink-0">
              <button
                onClick={onOpenWhatsApp}
                aria-label="WhatsApp Shristika Computer Press"
                className="btn-3d-whatsapp p-2.5 sm:hidden cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-3d-primary hidden sm:inline-flex px-4 py-2.5 text-sm font-semibold cursor-pointer"
              >
                Order Now
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn-3d-primary w-10 h-10 p-0 flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-0 min-h-screen bg-navy/97 backdrop-blur-xl z-50 p-5 pt-6 flex flex-col justify-between text-white pointer-events-auto overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <ShristikaLogo size="md" is3D={false} />
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white font-heading">
                    SHRISTIKA
                  </span>
                  <span className="mt-1.5 block h-px w-full bg-gold/60" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-[0.22em] text-gold uppercase mt-1.5 font-heading">
                    Computer Press
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-2xl font-medium text-[15px] flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white/10 text-gold border border-gold/30'
                        : 'text-slate-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-slate-500'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn-3d-primary w-full py-4 px-4 font-semibold text-base flex items-center justify-center space-x-2"
            >
              <span>Order Now</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCall();
                }}
                className="py-3.5 px-3 rounded-full text-white font-medium text-sm flex items-center justify-center space-x-2 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="btn-3d-whatsapp py-3.5 px-3 font-medium text-sm flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-400">
              <p className="font-semibold text-slate-200">
                Shristika Computer Press
              </p>
              <p className="text-[11px] mt-1">
                Domuhan Cherki Road, Bodhgaya • +91 {businessInfo.phone1} /{' '}
                {businessInfo.phone2}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
