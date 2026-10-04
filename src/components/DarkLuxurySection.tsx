import React from 'react';
import { 
  Sparkles, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Award, 
  ArrowRight,
  Printer
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';
import { ShristikaLogo } from './ShristikaLogo';

interface DarkLuxurySectionProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
}

export const DarkLuxurySection: React.FC<DarkLuxurySectionProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-14 bg-dark-luxury text-white relative overflow-hidden">
      {/* Dynamic Ambient Spotlights (Section 52 & 59) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dark Luxury Statement Typography */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-900/40 text-amber-300 text-xs font-black uppercase tracking-widest border border-amber-400/30 backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SHRISTIKA STANDARD</span>
            </div>

            {/* Main Required Heading (Section 59) */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] font-['Montserrat']">
                Your Design Deserves <br className="hidden sm:block" />
                <span className="font-serif-luxury italic text-amber-300 font-normal">Better Printing.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Sub-standard printing degrades hard-earned brand equity. We calibrate microscopic color densities, inspect paper grain direction, and ensure crisp edge cuts on every single batch.
              </p>
            </div>

            {/* Craft Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Montserrat']">2400 DPI Ultra Precision</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Razor-sharp typography down to 4pt micro-lettering without ink bleeding.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-400/20 text-blue-300 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Montserrat']">True Color Calibration</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consistent CMYK color profiles matching your exact digital brand guidelines.
                </p>
              </div>
            </div>

            {/* 3D Action Triggers */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-3d-gold py-4 px-7 rounded-xl text-[#0a0a0a] font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer shadow-xl"
              >
                <FileText className="w-4 h-4 text-[#0a0a0a]" />
                <span>REQUEST CUSTOM PRINT QUOTE</span>
              </button>

              <button
                onClick={() => onOpenWhatsApp('I want to discuss high-end printing options for my brand.', 'Dark Luxury Studio Inquiry')}
                className="btn-3d-emerald py-4 px-6 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Studio Master</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating 3D Product Mockup Showcase (Section 59) */}
          <div className="lg:col-span-6 relative perspective-1000">
            <div className="relative w-full min-h-[380px] sm:min-h-[420px] flex items-center justify-center preserve-3d">
              
              {/* Gold Ambient Ring */}
              <div className="absolute w-72 h-72 rounded-full border border-amber-400/20 animate-spin [animation-duration:30s] pointer-events-none" />

              {/* Layered Card 1: 400 GSM Black Velvet Spot UV Card */}
              <div className="absolute z-30 w-64 sm:w-72 h-40 bg-gradient-to-br from-[#171717] via-[#101010] to-[#0a0a0a] rounded-2xl p-5 text-white edge-thickness-gold preserve-3d [transform:rotateX(7deg)_rotateY(-13deg)_translateZ(60px)] hover:scale-105 transition-transform duration-500 shadow-2xl border border-amber-400/30">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2">
                    <ShristikaLogo size="xs" is3D={true} />
                    <span className="text-xs font-bold font-cinzel text-amber-200">SHRISTIKA</span>
                  </div>
                  <span className="text-[9px] font-black uppercase text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-400/30">
                    Velvet Matte
                  </span>
                </div>
                <div className="py-1">
                  <div className="text-xs font-extrabold text-white">400 GSM Architectural Board</div>
                  <div className="text-[10px] text-slate-300">Embossed Gold Leaf Foil</div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/80 flex justify-between text-[9px] text-slate-400">
                  <span>Precision Die Trims</span>
                  <span className="text-amber-300 font-bold">Zero Bleed Flaws</span>
                </div>
              </div>

              {/* Layered Card 2: Floating PVC ID Card Behind */}
              <div className="absolute z-20 w-52 sm:w-60 h-36 bg-white rounded-xl p-3 text-slate-900 edge-thickness-card preserve-3d [transform:rotateX(8deg)_rotateY(16deg)_translateZ(-20px)] opacity-90 shadow-2xl">
                <div className="w-6 h-1.5 bg-slate-300 rounded-full mx-auto mb-2" />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-10 bg-slate-200 rounded shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80" 
                      alt="Staff Profile" 
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'pvc-id-card')}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase text-blue-900">INSTITUTIONAL ID</div>
                    <div className="text-[8px] font-bold text-slate-700">Dr. Rajesh V.</div>
                    <div className="text-[7px] text-emerald-600 font-bold">Thermal Waterproof</div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Trust Badge */}
              <div className="absolute -bottom-4 right-4 z-40 glass-panel-dark rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-3 border border-amber-400/30">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="text-xs font-black text-white">100% Quality Guaranteed</div>
                  <div className="text-[10px] text-slate-400">Verified Press Runs &amp; Free Proofs</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
