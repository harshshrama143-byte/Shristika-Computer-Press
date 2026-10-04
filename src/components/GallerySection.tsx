import React, { useState } from 'react';
import { 
  PORTFOLIO_CATEGORIES, 
  PORTFOLIO_ITEMS 
} from '../data/galleryData';
import { PortfolioCategory, PortfolioItem, BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';
import { 
  Eye, 
  Sparkles, 
  ZoomIn, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenWhatsApp,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  // Keep the page short — reveal the rest of the archive on demand.
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const currentSelectedItem =
    selectedItemIndex !== null && selectedItemIndex < visibleItems.length
      ? filteredItems[selectedItemIndex]
      : null;

  const handleNext = () => {
    if (selectedItemIndex !== null && visibleItems.length > 0) {
      setSelectedItemIndex((selectedItemIndex + 1) % visibleItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null && visibleItems.length > 0) {
      setSelectedItemIndex((selectedItemIndex - 1 + visibleItems.length) % visibleItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-14 bg-warm-luxury relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Luxury Typography (Section 51 & 57) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 text-xs font-black uppercase tracking-widest border border-slate-200 shadow-xs">
            <Eye className="w-3.5 h-3.5 text-blue-800" />
            <span>STUDIO PRODUCTION ARCHIVE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight font-['Montserrat']">
            Selected Work &amp; <br className="hidden sm:block" />
            <span className="font-serif-luxury italic font-normal text-blue-900">Finished Samples.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Every sample in our gallery represents real output from our press, calibrated for true-to-life colors and flawless finish.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0a0a0a] text-white border-blue-950 shadow-lg shadow-blue-950/20 scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Portfolio Grid with Hover Lift, Subtle Rotation & Deep Shadow (Section 57) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
          {visibleItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className="card-hover-3d group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer flex flex-col hover:border-amber-400/60"
              >
                {/* Image Container with 3D forward translation on hover (Section 57) */}
                <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden preserve-3d">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'default')}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  
                  {/* Category Pill Overlay */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-amber-300 rounded-md border border-amber-400/40 shadow-md">
                    {item.categoryLabel}
                  </span>

                  {/* Hover Zoom Icon with smooth pop */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-3.5 rounded-full bg-[#0a0a0a]/90 text-white shadow-2xl backdrop-blur-md scale-90 group-hover:scale-100 transition-transform border border-amber-400/40">
                      <ZoomIn className="w-5 h-5 text-amber-300" />
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4.5 flex-grow flex flex-col justify-between space-y-2.5">
                  <h3 className="text-sm font-bold text-[#0a0a0a] group-hover:text-blue-900 transition-colors font-['Montserrat'] line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / collapse the archive */}
        {filteredItems.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 rounded-full bg-[#0d0d0d] hover:bg-black text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <span>
                {showAll ? 'Show less' : `View all ${filteredItems.length} samples`}
              </span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      <LightboxModal
        item={currentSelectedItem}
        items={visibleItems}
        onClose={() => setSelectedItemIndex(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
        onOpenWhatsApp={onOpenWhatsApp}
        onOpenQuoteModal={onOpenQuoteModal}
        businessInfo={businessInfo}
      />
    </section>
  );
};
