import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BusinessConfig } from '../types';

interface StrongCtaProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
}

export const StrongCta: React.FC<StrongCtaProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-32">
      {/* Elegant background: one royal bloom + one gold bloom, nothing busy */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle,rgba(36,87,214,0.34),transparent_62%)]" />
        <div className="absolute -bottom-40 -right-24 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(212,168,79,0.16),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="eyebrow eyebrow-dark">Let&rsquo;s make it</span>

        <h2 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-[-0.03em] text-white leading-[1.1]">
          Ready to Print <span className="italic">Something Great?</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
          Send us your design and let us bring your idea to life.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <button
            onClick={onOpenWhatsApp}
            className="btn-3d-whatsapp px-7 py-4 text-[15px] font-semibold flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <MessageCircle className="w-4.5 h-4.5" />
            <span>Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCall}
            className="px-7 py-4 text-[15px] font-semibold text-white bg-white/8 border border-white/20 rounded-full hover:bg-white/14 hover:border-gold/50 transition-all cursor-pointer flex items-center justify-center space-x-2.5"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>
              +91 {businessInfo.phone1} / {businessInfo.phone2}
            </span>
          </button>
        </div>

        <p className="mt-7 text-[13px] text-slate-400">
          Bodhgaya, Bihar · Mon-Sat 9:00 AM - 8:30 PM, free design consultation
          on every order
        </p>
      </div>
    </section>
  );
};
