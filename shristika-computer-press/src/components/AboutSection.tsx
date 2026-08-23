import React from 'react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Printer, 
  ShieldCheck, 
  Clock, 
  Layers,
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';
import { ShristikaLogo } from './ShristikaLogo';

interface AboutSectionProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const specializations = [
    'Commercial & Corporate Business Stationery',
    'Custom Graphic Designing & Brand Identity',
    'Institutional Student & Employee PVC ID Cards',
    'Large-Format Weatherproof Flex Banners & Standees',
    'Royal Laser-Cut Wedding & Event Invitation Suites',
    'Precision Photo Framing & Studio HD Prints',
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Studio Impression with Address Pin */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                alt="Shristika Computer Press Studio"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'banner-flex')}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1835] via-[#0a1835]/40 to-transparent" />

              {/* Overlay Logo Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-amber-400/40 shadow-xl">
                <ShristikaLogo size="xs" is3D={true} />
                <span className="text-amber-300 text-xs font-black uppercase tracking-wider font-['Montserrat']">
                  BODHGAYA STUDIO
                </span>
              </div>

              {/* Bottom Address Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-[#0a1835]">
                <div className="flex items-start space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wide block">
                      Studio Location
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mt-0.5">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Specializations */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Building2 className="w-3.5 h-3.5 text-blue-700" />
              <span>About Our Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1835] tracking-tight font-['Montserrat'] leading-tight">
              About Shristika Computer Press
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Shristika Computer Press is a dedicated professional printing and graphic designing studio based in Bodhgaya, Bihar. We specialize in delivering high-quality commercial, institutional, and personalized printing solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Equipped with modern high-precision digital printing machines, thermal card printers, large format solvent plotters, and seasoned graphic designers, we ensure that every business card, identity badge, flex board, and wedding invitation reflects perfection and durability.
            </p>

            {/* Specialization List */}
            <div className="pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-3">
                Core Specializations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Connect with Studio</span>
              </button>

              <button
                onClick={onOpenCall}
                className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs sm:text-sm flex items-center space-x-2 border border-slate-200 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-800" />
                <span>Call Studio</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
