import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  FileText, 
  Sparkles,
  ZoomIn,
  ZoomOut,
  Tag
} from 'lucide-react';
import { PortfolioItem, BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  businessInfo: BusinessConfig;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
  onOpenWhatsApp,
  onOpenQuoteModal,
  businessInfo,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const handleAskWhatsApp = () => {
    const msg = `Hello Shristika Computer Press, I am interested in your sample work "${item.title}" (${item.categoryLabel}). Please share details and pricing.`;
    onOpenWhatsApp(msg, item.title);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Content Modal Container */}
      <div 
        className="bg-slate-950 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row border border-slate-800 shadow-2xl relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Preview Container with Zoom capability */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[460px] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'default')}
            className={`max-h-[55vh] md:max-h-[80vh] w-full object-contain transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Zoom Toggle Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-xs font-bold text-white flex items-center space-x-1.5 border border-white/20 cursor-pointer hover:bg-black"
          >
            {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
            <span>{isZoomed ? 'Reset Zoom' : 'Zoom In'}</span>
          </button>

          <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-xs font-bold text-amber-300 rounded-md border border-amber-400/30">
            {item.categoryLabel}
          </span>
        </div>

        {/* Details & Action Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-7 flex flex-col justify-between bg-slate-900 text-white space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Work Details</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] tracking-tight">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-semibold flex items-center space-x-1 border border-slate-700"
                >
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-4 border-t border-slate-800">
            <button
              onClick={handleAskWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Enquire for Similar Print (WhatsApp)</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer border border-slate-700"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Request Custom Dimensions</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
