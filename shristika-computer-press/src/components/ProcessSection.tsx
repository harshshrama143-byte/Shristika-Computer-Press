import React from 'react';
import { 
  FileSearch, 
  Send, 
  CheckCheck, 
  PackageCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  onStartOrder: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartOrder }) => {
  const steps = [
    {
      number: '01',
      title: 'SELECT YOUR SERVICE',
      description: 'Choose your desired product — visiting cards, PVC IDs, banners, stickers, wedding cards, or custom printing.',
      icon: FileSearch,
    },
    {
      number: '02',
      title: 'SHARE DETAILS & DESIGN',
      description: 'Send your ready print file (CDR/PDF/PSD) or share your concept with our design studio directly on WhatsApp or form.',
      icon: Send,
    },
    {
      number: '03',
      title: 'REVIEW & APPROVE PROOF',
      description: 'We prepare a digital visual proof for your review and finalize dimensions, materials, finishes, and quantities.',
      icon: CheckCheck,
    },
    {
      number: '04',
      title: 'FAST PRINTING & DELIVERY',
      description: 'Your order is printed with precision, checked for quality, and made ready for fast studio pickup or dispatch.',
      icon: PackageCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading per Section 16 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Smooth Order Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1835] tracking-tight font-['Montserrat']">
            Simple &amp; Easy Ordering Process
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            4 simple steps to get your printing completed smoothly.
          </p>
        </div>

        {/* 4 Steps Grid with connecting line on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-amber-300 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-700 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#0a1835] mb-2 font-['Montserrat'] tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-blue-800">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA: START ORDER NOW */}
        <div className="text-center">
          <button
            onClick={onStartOrder}
            className="py-4 px-8 rounded-xl bg-blue-900 hover:bg-[#0a1835] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-950/20 transition-all hover:scale-103 cursor-pointer inline-flex items-center space-x-2"
          >
            <span className="text-amber-300">START ORDER NOW</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
