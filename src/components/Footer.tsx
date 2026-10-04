import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { getTelDirectUrl } from '../config/businessInfo';
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
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const popularServices = [
    { label: 'Visiting Cards', id: 'visiting-card' },
    { label: 'PVC ID Cards', id: 'pvc-id-card' },
    { label: 'Banner & Flex Printing', id: 'banner-flex' },
    { label: 'Sticker Printing', id: 'sticker-printing' },
    { label: 'Pamphlet & Flyer', id: 'pamphlet-flyer' },
    { label: 'Certificate Printing', id: 'certificate-printing' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mapsUrl =
    businessInfo.googleMapsUrl ||
    'https://maps.app.goo.gl/18daCaEqs1FBpkTK8';

  return (
    <footer className="bg-navy text-slate-300 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
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

            <p className="text-[15px] leading-relaxed text-slate-400 max-w-sm">
              A printing and graphic design studio in Bodhgaya, Bihar. Offset
              and digital printing, stickers, institutional ID cards, banners
              and celebratory stationery, finished to a premium standard.
            </p>

            <p className="text-[13px] text-gold/90 font-medium tracking-wide">
              High Quality Printing • Reasonable Price • Fast Service
            </p>

            {/* Connect / social */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenWhatsApp}
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View location on Google Maps"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-royal hover:border-royal text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <MapPin className="w-4.5 h-4.5" />
              </a>

              <a
                href={getTelDirectUrl(businessInfo.phone1 || '6200796553')}
                aria-label="Call Shristika Computer Press"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-gold hover:border-gold hover:text-navy text-slate-300 flex items-center justify-center transition-all"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.18em]">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left text-[14px] text-slate-400 hover:text-gold transition-colors cursor-pointer py-2 min-h-10"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.18em]">
              Services
            </h4>
            <ul className="mt-3 space-y-1">
              {popularServices.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenQuoteModal(srv.id)}
                    className="group w-full text-left text-[14px] text-slate-400 hover:text-gold transition-colors flex items-center gap-2 py-2 min-h-10 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-royal shrink-0 group-hover:bg-gold transition-colors" />
                    <span>{srv.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.18em]">
              Contact
            </h4>

            <div className="mt-4 space-y-4 text-[14px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block leading-relaxed text-slate-300">
                    {businessInfo.address}
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80 font-medium inline-flex items-center gap-1 mt-1 text-[12px] py-1.5 min-h-9"
                  >
                    View on Google Maps
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Mon - Sat: 9:00 AM - 8:30 PM
                  <span className="block text-slate-500 text-[13px]">
                    Sunday: 10:00 AM - 4:00 PM
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={getTelDirectUrl(businessInfo.phone1 || '6200796553')}
                    className="block text-slate-300 hover:text-white transition-colors py-2 min-h-10"
                  >
                    +91 {businessInfo.phone1 || '6200796553'}
                  </a>
                  <a
                    href={getTelDirectUrl(businessInfo.phone2 || '9835733642')}
                    className="block text-slate-300 hover:text-white transition-colors py-2 min-h-10"
                  >
                    +91 {businessInfo.phone2 || '9835733642'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <button
                  onClick={() =>
                    onOpenWhatsApp('Hello Shristika Computer Press, I have a printing inquiry.')
                  }
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer py-2 min-h-10"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {businessInfo.businessName}. All
            rights reserved.
          </div>

          <div className="flex items-center gap-2 sm:gap-5 -mx-2">
            <button
              onClick={() => onOpenPrivacyTerms('privacy')}
              className="hover:text-white transition-colors cursor-pointer px-2 py-2.5 min-h-10"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPrivacyTerms('terms')}
              className="hover:text-white transition-colors cursor-pointer px-2 py-2.5 min-h-10"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
