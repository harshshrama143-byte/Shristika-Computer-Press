import React, { useMemo, useState } from 'react';
import { Expand, ArrowRight } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
} from '../data/galleryData';
import { PortfolioCategory, PortfolioItem, BusinessConfig } from '../types';
import { LightboxModal } from './LightboxModal';
import { handleImageError } from '../utils/imageUtils';

interface PortfolioSectionProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

/** Categories shown as filters on the homepage. */
const HOMEPAGE_FILTERS: PortfolioCategory[] = [
  'all',
  'id_cards',
  'visiting_cards',
  'banners',
  'stickers',
  'certificates',
];

const RATIOS = ['aspect-[4/5]', 'aspect-square', 'aspect-[4/3]', 'aspect-[5/6]'];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const chips = useMemo(
    () => PORTFOLIO_CATEGORIES.filter((c) => HOMEPAGE_FILTERS.includes(c.id)),
    []
  );

  const items = useMemo(
    () =>
      PORTFOLIO_ITEMS.filter((i) =>
        HOMEPAGE_FILTERS.includes(i.category as PortfolioCategory)
      ),
    []
  );

  const visibleItems = useMemo(
    () =>
      activeCategory === 'all'
        ? items
        : items.filter((i) => i.category === activeCategory),
    [items, activeCategory]
  );

  const selectedItem: PortfolioItem | null =
    selectedIndex !== null && visibleItems[selectedIndex]
      ? visibleItems[selectedIndex]
      : null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % visibleItems.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + visibleItems.length) % visibleItems.length
    );
  };

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-navy">
            Made With <span className="italic">Precision</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Explore some of our recent printing and design work.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {chips.map((chip) => {
            const isActive = activeCategory === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => {
                  setActiveCategory(chip.id);
                  setSelectedIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 text-[13px] font-semibold border transition-all duration-250 cursor-pointer ${
                  isActive
                    ? 'bg-navy text-white border-navy shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-navy hover:text-navy'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Masonry gallery */}
        <div className="mt-8 sm:mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className="card-tile group block w-full mb-5 sm:mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-soft text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-royal"
            >
              <div className={`relative overflow-hidden ${RATIOS[idx % RATIOS.length]}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => handleImageError(e, 'default')}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Resting label */}
                <span className="absolute top-3 left-3 rounded-full bg-white/92 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy border border-white/60">
                  {item.categoryLabel}
                </span>

                {/* Hover affordance */}
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/85 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand className="w-4 h-4" />
                </span>

                {/* Caption */}
                <span className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-navy via-navy/85 to-navy/0 px-4 pt-10 pb-4 block">
                  <span className="block text-white font-semibold text-[14px] leading-snug">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-slate-300 text-[12px]">
                    {item.tags.slice(0, 3).join(' · ')}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {visibleItems.length === 0 && (
          <p className="text-center text-slate-400 py-10 text-sm">
            No work in this category yet.
          </p>
        )}

        {/* Foot CTA */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => onOpenQuoteModal()}
            className="group inline-flex items-center gap-2 py-2 min-h-10 text-sm font-semibold text-royal hover:gap-3 transition-all cursor-pointer"
          >
            Order Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <LightboxModal
        item={selectedItem}
        items={visibleItems}
        onClose={() => setSelectedIndex(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
        onOpenWhatsApp={onOpenWhatsApp}
        onOpenQuoteModal={onOpenQuoteModal}
        businessInfo={businessInfo}
      />
    </section>
  );
};
