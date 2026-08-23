import React from 'react';
import { 
  ShieldCheck, 
  Banknote, 
  Sparkles, 
  Zap, 
  Settings2, 
  Printer,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'QUALITY FIRST',
      description: 'Ultra-high DPI digital and offset printing using authentic inks, heavy GSM boards, and refined laminations.',
      icon: ShieldCheck,
      color: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'REASONABLE PRICING',
      description: 'Competitive, fair local rates without middleman commissions — professional printing without unnecessary high pricing.',
      icon: Banknote,
      color: 'from-amber-600 to-yellow-600',
    },
    {
      title: 'PROFESSIONAL DESIGNING',
      description: 'Expert in-house graphic designing for logos, cards, banners, and layout corrections prior to printing.',
      icon: Sparkles,
      color: 'from-purple-600 to-indigo-800',
    },
    {
      title: 'FAST SERVICE',
      description: 'Quick turnarounds with instant passport photos, same-day flex banners, and reliable express delivery options.',
      icon: Zap,
      color: 'from-emerald-600 to-teal-700',
    },
    {
      title: 'CUSTOM SOLUTIONS',
      description: 'Tailored dimensions, custom die-cut shapes, special textures, metallic foils, and unique substrate choices.',
      icon: Settings2,
      color: 'from-rose-600 to-pink-700',
    },
    {
      title: 'ONE-STOP PRINTING',
      description: 'Complete solutions under one roof — from business cards, PVC IDs, banners to wedding cards and custom gifting.',
      icon: Printer,
      color: 'from-sky-600 to-blue-800',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading per Section 15 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Our Commitment to Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1835] tracking-tight font-['Montserrat']">
            Why Shristika Computer Press?
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Professional printing without unnecessary high pricing. We combine modern technology with dependable local craftsmanship.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-[#0a1835] text-amber-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-md shadow-blue-950/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1835] mb-2 font-['Montserrat'] tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center space-x-1.5 text-[11px] font-bold text-blue-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
