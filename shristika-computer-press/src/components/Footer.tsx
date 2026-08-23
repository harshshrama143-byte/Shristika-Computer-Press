import React from 'react';
import { 
  Printer, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Heart,
  ShieldCheck,
  Sparkles,
  Layers,
  CreditCard,
  Tag
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { getWhatsAppDirectUrl, getTelDirectUrl } from '../config/businessInfo';
import { ShristikaLogo } from './ShristikaLogo';

interface FooterProps {
  businessInfo: BusinessConfig;
  onOpenPrivacyTerms: (type: 'privacy' | 'terms') => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenCall: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  businessInfo,
  onOpenPrivacyTerms,
  onOpenWhatsApp,
  onOpenCall,
  onOpenQuoteModal,
}) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'All Services', href: '#services' },
    { label: 'Selected Work', href: '#portfolio' },
    { label: 'About Studio', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const popularServices = [
    { label: 'Visiting Cards (350-400 GSM)', id: 'visiting-card' },
    { label: 'PVC ID Cards & Lanyards', id: 'pvc-id-card' },
    { label: 'Custom Die-Cut Stickers', id: 'sticker-printing' },
    { label: 'Flex Banners & Standees', id: 'banner-flex' },
    { label: 'Wedding Invitation Cards', id: 'wedding-card' },
    { label: 'Teak Wood Photo Frames', id: 'photo-frame' },
    { label: 'Gloss Flyers & Pamphlets', id: 'pamphlet-flyer' },
    { label: 'Letterheads & Bill Books', id: 'letterhead-stationery' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071126] text-slate-300 relative overflow-hidden border-t border-blue-950">
      {/* Top subtle decorative pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Logo & Tagline & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <ShristikaLogo size="md" is3D={true} />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-['Montserrat']">
                  SHRISTIKA
                </span>
                <span className="text-[11px] font-extrabold tracking-widest text-amber-400 uppercase">
                  COMPUTER PRESS
                </span>
              </div>
            </div>

            <p className="text-amber-300 font-extrabold text-xs sm:text-sm tracking-wide">
              “High Quality Printing • Reasonable Price • Fast Service”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              A premier printing and graphic designing studio based in Bodhgaya, dedicated to precision offset, digital prints, vinyl stickers, institutional IDs, and celebratory stationery.
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-4 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
              >
                Request Quotation
              </button>
              <button
                onClick={() => onOpenWhatsApp()}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm flex items-center space-x-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs text-slate-400 hover:text-amber-300 transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Printing Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
              Core Services
            </h4>
            <ul className="space-y-2">
              {popularServices.map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenQuoteModal(srv.id)}
                    className="text-xs text-slate-400 hover:text-amber-300 transition-colors text-left flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="truncate">{srv.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact & Location */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
              Studio Details
            </h4>

            <div className="space-y-2.5 text-xs">
              {/* Address */}
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="leading-relaxed block">{businessInfo.address}</span>
                  <a 
                    href={businessInfo.googleMapsUrl || "https://maps.app.goo.gl/18daCaEqs1FBpkTK8"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center space-x-1 mt-1 text-[11px]"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start space-x-2 text-slate-300 pt-1">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Phone Lines:</span>
                  <a href={getTelDirectUrl(businessInfo.phone1 || '6200796553')} className="hover:text-amber-300 block font-bold">
                    +91 {businessInfo.phone1 || '6200796553'}
                  </a>
                  <a href={getTelDirectUrl(businessInfo.phone2 || '9835733642')} className="hover:text-amber-300 block font-bold">
                    +91 {businessInfo.phone2 || '9835733642'}
                  </a>
                </div>
              </div>

              {/* WhatsApp Lines */}
              <div className="flex items-start space-x-2 text-slate-300 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">WhatsApp Enabled:</span>
                  <button 
                    onClick={() => onOpenWhatsApp("Hello Shristika Computer Press, I have a printing inquiry.")}
                    className="hover:text-emerald-300 font-bold block text-left"
                  >
                    +91 {businessInfo.whatsapp1 || '6200796553'} / +91 {businessInfo.whatsapp2 || '9835733642'}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPrivacyTerms('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPrivacyTerms('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
