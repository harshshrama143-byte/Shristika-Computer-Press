import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  Tag, 
  Heart, 
  Image as ImageIcon, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface ProductShowcaseProps {
  businessInfo: BusinessConfig;
  onOpenServiceModal: (serviceId: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onOpenServiceModal,
  onOpenQuoteModal,
}) => {
  const showcaseProducts = [
    {
      id: 'visiting-card',
      title: 'Visiting Cards',
      tag: '350-400 GSM ART BOARD',
      desc: 'Velvet soft touch, spot UV gloss, gold & silver foil with precision edge trims.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      icon: CreditCard,
      highlight: 'Luxury Cardstock'
    },
    {
      id: 'pvc-id-card',
      title: 'PVC ID Cards',
      tag: 'PURE THERMAL PVC',
      desc: '100% waterproof smart identity cards with custom woven lanyards and barcodes.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlight: 'Waterproof Core'
    },
    {
      id: 'sticker-printing',
      title: 'Die-Cut Stickers',
      tag: 'WATERPROOF VINYL',
      desc: 'Custom shaped product packaging labels, transparent bottles & kraft paper decals.',
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
      icon: Tag,
      highlight: 'Contour Cutting'
    },
    {
      id: 'wedding-card',
      title: 'Wedding Invitations',
      tag: 'ROYAL METALLIC SUITES',
      desc: 'Laser-cut gatefolds, gold foil embossing, shimmery inserts and handcrafted sleeves.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      icon: Heart,
      highlight: 'Hot Foil Stamped'
    },
    {
      id: 'photo-frame',
      title: 'Photo Frames',
      tag: 'CUSTOM TEAK & ACRYLIC',
      desc: 'Studio archival photographic prints framed in solid wood & floating acrylic panels.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      icon: ImageIcon,
      highlight: 'Studio Glass'
    },
    {
      id: 'banner-flex',
      title: 'Flex Banners',
      tag: 'HEAVY-DUTY STAR FLEX',
      desc: 'UV-resistant outdoor hoardings, backlit glow signs & portable roll-up standees.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
      highlight: 'Rain & Sun Proof'
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Product Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Montserrat']">
              Engineered for Quality &amp; Precision
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-medium">
              Explore our core printing standards — from luxury paper stocks and thermal PVC to large format weatherproof outdoor media.
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <span className="text-xs text-slate-400 font-semibold">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {showcaseProducts.map((prod) => {
            const IconComponent = prod.icon;
            return (
              <div
                key={prod.id}
                className="w-80 sm:w-96 shrink-0 bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-amber-400/50 shadow-xl group transition-all duration-300 snap-start flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, prod.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0d0d0d]/90 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase tracking-wider border border-amber-400/30">
                    {prod.tag}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-emerald-500/90 text-white text-[11px] font-bold flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{prod.highlight}</span>
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-amber-300 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-['Montserrat']">
                        {prod.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenServiceModal(prod.id)}
                      className="text-xs font-bold text-slate-300 hover:text-amber-300 flex items-center space-x-1 transition-colors py-1.5"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={() => onOpenQuoteModal(prod.id)}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
