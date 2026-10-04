import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Scissors, 
  Award,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface QualityTrustSectionProps {
  onStartOrder: () => void;
}

export const QualityTrustSection: React.FC<QualityTrustSectionProps> = ({ onStartOrder }) => {
  const qualityPillars = [
    {
      id: 'sharp-details',
      title: 'SHARP DETAILS',
      desc: 'High-density micro-dot digital & offset resolution delivering razor-sharp text, intricate linework and clear micro-lettering.',
      icon: Layers,
    },
    {
      id: 'vibrant-colors',
      title: 'VIBRANT COLORS',
      desc: 'Calibrated color management matching exact corporate Pantone & CMYK color standards with rich color saturation.',
      icon: Palette,
    },
    {
      id: 'clean-finish',
      title: 'CLEAN FINISH',
      desc: 'Precision hydraulic paper cutting, velvet touch thermal lamination, spot UV, hot foil stamping and clean corner rounding.',
      icon: Scissors,
    },
    {
      id: 'professional-output',
      title: 'PROFESSIONAL OUTPUT',
      desc: 'Rigorous pre-press file inspection and end-to-end quality checking before dispatch for flawless client presentation.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0d0d0d] to-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header per Section 14 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Uncompromising Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat'] tracking-tight text-white leading-tight">
            Because Every Print Represents You.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            We focus on sharp details, clean finishing, accurate colors and professional presentation.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/30 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-blue-400/30 shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black font-['Montserrat'] tracking-wide text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button: START YOUR ORDER */}
        <div className="text-center">
          <button
            onClick={onStartOrder}
            className="py-4 px-8 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-400/20 transition-all hover:scale-103 cursor-pointer inline-flex items-center space-x-2"
          >
            <span>START YOUR ORDER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
