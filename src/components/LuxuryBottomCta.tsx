import React from 'react';
import { 
  FileText, 
  MessageCircle, 
  Sparkles, 
  CreditCard, 
  ShieldCheck, 
  Heart, 
  Tag, 
  Printer, 
  ArrowRight
} from 'lucide-react';
import { BusinessConfig } from '../types';

interface LuxuryBottomCtaProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
}

export const LuxuryBottomCta: React.FC<LuxuryBottomCtaProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background Soft Studio Ambient Radiance (Section 50, 52) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#0d0d0d] via-[#1f1f1f] to-[#0d0d0d] rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold stripe on top edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-amber-400 to-indigo-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Section 60) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 text-amber-300 text-xs font-black uppercase tracking-widest border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR PRINT PROJECT</span>
              </div>

              {/* Required Exact Heading (Section 60) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Montserrat'] leading-tight">
                Ready to Bring Your <br className="hidden sm:block" />
                <span className="font-serif-luxury italic text-amber-300 font-normal">Idea to Life?</span>
              </h2>

              {/* Required Exact Subheading (Section 60) */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed font-sans">
                Tell us what you need. We’ll help turn your idea into a professional printed product.
              </p>

              {/* 3D Action Buttons (Section 60) */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                
                {/* WHATSAPP US */}
                <button
                  onClick={() => onOpenWhatsApp('Hello Shristika Press, I am ready to start a new print order.', 'Bottom Luxury CTA')}
                  className="btn-3d-emerald py-4 px-7 rounded-xl text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg shadow-emerald-950/40 group"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>WHATSAPP US</span>
                </button>

                {/* GET A QUOTE */}
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="btn-3d-gold py-4 px-7 rounded-xl text-[#0a0a0a] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg shadow-amber-950/30 group"
                >
                  <FileText className="w-4 h-4 text-[#0a0a0a] group-hover:rotate-6 transition-transform" />
                  <span>GET A QUOTE</span>
                </button>

              </div>

            </div>

            {/* Right: Floating 3D Paper & Card Composition (Section 60) */}
            <div className="lg:col-span-5 relative perspective-1000 hidden sm:flex items-center justify-center min-h-[260px]">
              
              {/* Back Card: Shimmer Wedding Card */}
              <div className="absolute w-56 h-36 bg-[#fcfaf4] rounded-xl p-3 text-slate-900 border border-amber-300 shadow-2xl edge-thickness-gold preserve-3d [transform:rotate(-10deg)_translateZ(-20px)]">
                <div className="flex justify-between items-center text-[9px] font-bold text-amber-900 border-b border-amber-200 pb-1">
                  <span className="font-cinzel">ROYAL SUITE</span>
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                </div>
                <div className="py-2 text-center">
                  <div className="font-serif-luxury italic text-xs text-slate-800">Wedding Invitation</div>
                  <div className="text-[8px] text-amber-800 uppercase mt-0.5 font-mono">Laser Cut &amp; Gold Foil</div>
                </div>
              </div>

              {/* Front Card: Velvet Deep Navy Visiting Card Lifted in 3D */}
              <div className="relative z-20 w-64 h-38 bg-[#0a0a0a] rounded-2xl p-4 text-white border border-amber-400/50 shadow-2xl edge-thickness-dark preserve-3d [transform:rotate(6deg)_translateZ(40px)] hover:scale-105 transition-transform">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-5 h-5 rounded bg-amber-400 text-[#0a0a0a] flex items-center justify-center text-[10px] font-black font-cinzel">
                      S
                    </div>
                    <span className="text-[11px] font-bold font-cinzel text-amber-200">SHRISTIKA</span>
                  </div>
                  <span className="text-[8px] font-black uppercase bg-blue-900/90 text-amber-300 px-1.5 py-0.5 rounded border border-amber-400/30">
                    400 GSM
                  </span>
                </div>
                <div className="py-2">
                  <div className="text-xs font-bold text-white">Commercial Press Proof</div>
                  <div className="text-[9px] text-slate-300">Spot UV &amp; Gold Embossing</div>
                </div>
                <div className="pt-1.5 border-t border-slate-700/80 flex justify-between text-[8px] text-slate-400">
                  <span>Direct Delivery</span>
                  <span className="text-amber-300 font-bold">Fast Turnaround</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
