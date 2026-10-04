import React from 'react';
import { Sparkles, MessageCircle, FileText, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BusinessConfig } from '../types';

interface CustomDesignSectionProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const CustomDesignSection: React.FC<CustomDesignSectionProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenQuoteModal,
}) => {
  const handleWhatsApp = () => {
    onOpenWhatsApp(
      "Hello Shristika Computer Press, I have a custom design requirement in mind and would like to share my file/concept.",
      "Custom Design Requirement"
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0d0d0d] via-[#2b2b2b] to-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background print mesh aesthetic */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Creative Graphic &amp; Custom Solutions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat'] tracking-tight text-white leading-tight">
              Have a Design in Mind?
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              Send us your requirement and let us help turn your idea into a professional printed product. Whether you have ready CDR/PDF print files or just a rough sketch, our studio will prepare it with pixel-perfect output.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>CDR, PDF, AI, PSD &amp; JPG accepted</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Professional Graphic Designing</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Digital Proofing before print</span>
              </span>
            </div>
          </div>

          {/* Right Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenQuoteModal('custom-printing')}
              className="py-3.5 px-7 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-amber-400/20 transition-all hover:scale-102 cursor-pointer uppercase tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>SEND REQUIREMENT</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3.5 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/25 transition-all hover:scale-102 cursor-pointer uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WHATSAPP US</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
