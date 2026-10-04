import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BusinessConfig } from '../types';

interface HeroProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
}) => {
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="grain relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28"
    >
      {/* Soft, non-cluttered backdrop: one royal glow + one faint gold ring */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 right-[-12%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(36,87,214,0.13),transparent_65%)]" />
        <div className="absolute top-32 -right-16 w-72 h-72 rounded-full border border-gold/20 hidden lg:block" />
        <div className="absolute -bottom-40 left-[-10%] w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(212,168,79,0.13),transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- Hero message (centred — no side visual) ---------------- */}
        <div className="hero-enter max-w-3xl mx-auto text-center">
          <span className="eyebrow">
            Printing &amp; Designing Studio · Bodhgaya
          </span>

          <h1 className="mt-7 font-heading text-[38px] leading-[1.06] sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold tracking-[-0.035em] text-navy">
            Print Your Ideas.
            <span className="block italic text-royal">Make Them Real.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 font-medium tracking-[-0.01em]">
            Premium Printing <span className="text-gold">•</span> Creative Design{' '}
            <span className="text-gold">•</span> Digital Services
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-3d-primary px-7 py-4 text-[15px] font-semibold flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-7 py-4 text-[15px] font-semibold text-navy bg-white border border-slate-300 rounded-full hover:border-navy hover:bg-soft transition-all cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
